
// ====================================
// 1. THÔNG TIN ANH HÙNG
// ====================================

var name = "Pham Dinh Quang";
var MSSV = 31241024277;

var level = 1;
var xp = 0;
var skillPoints = 5;

var strength = 0;
var agility = 0;
var intel = 0;
var phancap = "";

var health = 105;
var maxHealth = 105;

// ====================================
// 2. THÔNG TIN RỒNG GIÀ
// ====================================

var dragonHealth = 600;
var dragonStr = 100;
var dragonAgi = 15;
var dragonInt = 80;

var gameContinue = false;
var fighting = false;
var round = 0;
var soundEnabled = true;
var audioContext = null;
var gameVersion = 0;

// ====================================
// 3. LẤY CÁC PHẦN TỬ HTML
// ====================================

var heroBar = document.getElementById("heroBar");
var dragonBar = document.getElementById("dragonBar");

var heroHP = document.getElementById("heroHP");
var dragonHP = document.getElementById("dragonHP");

var heroCharacter = document.getElementById("heroCharacter");
var dragonCharacter = document.getElementById("dragonCharacter");

var battleMessage = document.getElementById("battleMessage");
var roundLabel = document.getElementById("roundLabel");

var battlefield = document.getElementById("battlefield");
var damageText = document.getElementById("damageText");
var screenFlash = document.getElementById("screenFlash");
var projectile = document.getElementById("projectile");

var startBtn = document.getElementById("startBtn");
var attackBtn = document.getElementById("attackBtn");
var resetBtn = document.getElementById("resetBtn");
var soundBtn = document.getElementById("soundBtn");

// ====================================
// 4. CÁC HÀM HỖ TRỢ
// ====================================

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

function addLog(message) {
    var log = document.getElementById("logContent");
    var p = document.createElement("p");

    p.textContent = message;
    log.prepend(p);

    while (log.children.length > 40) {
        log.removeChild(log.lastChild);
    }

    console.log(message);
}

function showMessage(message) {
    battleMessage.textContent = message;
}

function updateHealth() {
    var heroPercent = Math.max(0, health / maxHealth * 100);
    var dragonPercent = Math.max(0, dragonHealth / 600 * 100);

    heroBar.style.width = heroPercent + "%";
    dragonBar.style.width = dragonPercent + "%";

    heroHP.textContent = Math.max(0, health) + " / " + maxHealth + " HP";
    dragonHP.textContent = Math.max(0, dragonHealth) + " / 600 HP";
}

function animateCharacter(element, effect, duration) {
    element.classList.remove("attacking", "hurt", "dodging");

    // Khởi động lại animation
    void element.offsetWidth;

    element.classList.add(effect);

    setTimeout(function() {
        element.classList.remove(effect);
    }, duration);
}

function floatingDamage(value, target, critical, miss) {
    damageText.className = "floating-damage";

    damageText.textContent = miss
        ? "MISS!"
        : (critical ? "CRITICAL! -" : "-") + value;

    damageText.classList.add(
        target == "hero" ? "on-hero" : "on-dragon"
    );

    if (critical) {
        damageText.classList.add("critical");
    }

    if (miss) {
        damageText.classList.add("miss");
    }

    void damageText.offsetWidth;
    damageText.classList.add("show");
}

function impactEffect() {
    screenFlash.classList.remove("active");
    battlefield.classList.remove("shaking");

    void battlefield.offsetWidth;

    screenFlash.classList.add("active");
    battlefield.classList.add("shaking");

    setTimeout(function() {
        screenFlash.classList.remove("active");
        battlefield.classList.remove("shaking");
    }, 450);
}

// ====================================
// 5. HỆ THỐNG ÂM THANH
// ====================================

function initAudio() {
    if (!soundEnabled) return;

    var AudioClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioClass) return;

    if (!audioContext) {
        audioContext = new AudioClass();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}

function playTone(frequency, duration, type, volume, endFrequency) {
    if (!soundEnabled || !audioContext) return;

    var oscillator = audioContext.createOscillator();
    var gain = audioContext.createGain();
    var now = audioContext.currentTime;

    oscillator.type = type || "sine";
    oscillator.frequency.setValueAtTime(frequency, now);

    if (endFrequency) {
        oscillator.frequency.exponentialRampToValueAtTime(
            Math.max(1, endFrequency),
            now + duration
        );
    }

    gain.gain.setValueAtTime(Math.max(.001, volume || .1), now);
    gain.gain.exponentialRampToValueAtTime(.001, now + duration);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + duration);
}

function playSound(type) {
    if (!soundEnabled) return;

    switch (type) {
        case "attack":
            playTone(600, .20, "sawtooth", .12, 120);
            break;

        case "hit":
            playTone(130, .25, "square", .14, 45);
            break;

        case "critical":
            playTone(800, .32, "sawtooth", .16, 80);
            setTimeout(function() {
                playTone(180, .3, "square", .12, 50);
            }, 100);
            break;

        case "fire":
            playTone(90, .65, "sawtooth", .15, 40);
            break;

        case "dodge":
            playTone(400, .20, "sine", .1, 900);
            break;

        case "victory":
            playTone(523, .2, "sine", .15);
            setTimeout(function() {
                playTone(659, .2, "sine", .15);
            }, 220);
            setTimeout(function() {
                playTone(784, .5, "sine", .18);
            }, 440);
            break;

        case "defeat":
            playTone(340, .4, "triangle", .15, 220);
            setTimeout(function() {
                playTone(170, .6, "triangle", .15, 70);
            }, 350);
            break;
    }
}

// ====================================
// 6. KHỞI TẠO NHÂN VẬT
// ====================================

function createHero() {
    // Hủy vòng chiến đấu cũ nếu có
    gameVersion++;
    gameContinue = false;
    fighting = false;

    name = document.getElementById("heroName").value.trim();

    if (name == "") {
        name = "Pham Dinh Quang";
        document.getElementById("heroName").value = name;
    }

    // Khởi tạo theo đề
    level = 1;
    xp = 0;
    skillPoints = 5;

    // Nâng cấp lần 1
    level++;
    xp = 150 * (level - 1) + 200;
    skillPoints = skillPoints + xp / 10;

    strength = 0.6 * skillPoints + 0.1 * xp;
    agility = 0.2 * skillPoints + 0.2 * xp;
    intel = 0.2 * skillPoints + 10 * level;

    addLog("Tôi tên là " + name + " - MSSV: " + MSSV);
    addLog(name + " sẽ là Anh Hùng JavaScript!");
    addLog("Level: " + level + " | XP: " + xp);

    // LEVEL UP!
    level = 3;
    xp = xp + 200;

    addLog("LEVEL UP! Chúc mừng lên cấp 3! XP +200");

    // Kiểm tra trí nhớ
    var nhapTen = prompt("Hãy nhập lại tên của bạn:");

    if (nhapTen == name) {
        intel = intel + 5;
        addLog("Chính xác! Bạn có trí nhớ rất tốt! Intel +5!");
    } else {
        intel = intel - 5;
        addLog("Tệ thật! Tên chính mình mà không nhớ sao?! Intel -5!");
    }

    // Phân cấp
    var chon = document.getElementById("heroClass").value;

    if (chon == "a") {
        phancap = "Chiến Binh";
        strength = strength + 15;
        agility = agility - 10;
        intel = intel - 5;
    } else if (chon == "b") {
        phancap = "Sát Thủ";
        strength = strength - 15;
        agility = agility + 10;
        intel = intel + 5;
    } else if (chon == "c") {
        phancap = "Thợ Săn";
        strength = strength - 15;
        intel = intel + 15;
    }

    // Chuẩn bị đánh Rồng
    level = 5;
    health = level + 100;
    maxHealth = health;

    dragonHealth = 600;
    round = 0;

    heroCharacter.className = "character hero-character";
    dragonCharacter.className = "character dragon-character";

    document.getElementById("heroLabel").textContent = name;

    document.getElementById("heroStats").textContent =
        "STR " + strength +
        " | AGI " + agility +
        " | INT " + intel;

    roundLabel.textContent = "LEVEL 5";
    updateHealth();

    addLog("Phân cấp: " + phancap);
    addLog("Strength: " + strength);
    addLog("Agility: " + agility);
    addLog("Intel: " + intel);

    addLog("Rồng Già xuất hiện! HP: 600");

    showMessage("⚔️ " + phancap + " đã sẵn sàng chiến đấu!");

    gameContinue = true;
    attackBtn.disabled = false;

    initAudio();
    playSound("attack");
}

// ====================================
// 7. ANH HÙNG TẤN CÔNG
// ====================================

async function heroTurn(version) {
    showMessage("⚔️ ANH HÙNG TẤN CÔNG!");

    animateCharacter(heroCharacter, "attacking", 600);
    playSound("attack");

    await sleep(550);
    if (version !== gameVersion) return;

    // Xác suất đánh trúng
    var heroHit = Math.random() * 100 > dragonAgi;

    if (heroHit) {
        var damage = strength;

        // Kiểm tra chí mạng
        var heroCritical = Math.random() * 100 < intel;

        if (heroCritical) {
            // Thêm 200% sát thương
            damage = damage + strength * 2;

            showMessage("💥 TRẢM LONG CHÍ MẠNG!");
            playSound("critical");
        } else {
            showMessage("⚔️ TRẢM LONG! -" + damage + " HP");
            playSound("hit");
        }

        dragonHealth = dragonHealth - damage;

        animateCharacter(dragonCharacter, "hurt", 550);
        floatingDamage(damage, "dragon", heroCritical, false);
        impactEffect();

        addLog("Anh Hùng gây " + damage + " sát thương cho Rồng!");
        updateHealth();

    } else {
        animateCharacter(dragonCharacter, "dodging", 600);
        floatingDamage(0, "dragon", false, true);

        showMessage("💨 RỒNG NÉ ĐÒN!");
        playSound("dodge");

        addLog("XÍ HỤT! Rồng đã né được đòn tấn công!");
    }

    await sleep(1150);
}

// ====================================
// 8. RỒNG TẤN CÔNG
// ====================================

async function dragonTurn(version) {
    if (dragonHealth <= 0) return;

    showMessage("🐉 RỒNG CHUẨN BỊ PHUN LỬA!");

    animateCharacter(dragonCharacter, "attacking", 700);
    playSound("fire");

    projectile.classList.remove("fire");
    void projectile.offsetWidth;
    projectile.classList.add("fire");

    await sleep(650);
    if (version !== gameVersion) return;

    projectile.classList.remove("fire");

    // Xác suất Rồng đánh trúng
    var dragonHit = Math.random() * 100 > agility;

    if (dragonHit) {
        var damage = dragonStr;

        // Kiểm tra chí mạng của Rồng
        var dragonCritical = Math.random() * 100 < dragonInt;

        if (dragonCritical) {
            // Thêm 200% sát thương
            damage = damage + dragonStr * 2;

            showMessage("🔥 HỎA CẦU CHÍ MẠNG!");
            playSound("critical");
        } else {
            showMessage("🔥 HỎA CẦU! -" + damage + " HP");
            playSound("hit");
        }

        health = health - damage;

        animateCharacter(heroCharacter, "hurt", 550);
        floatingDamage(damage, "hero", dragonCritical, false);
        impactEffect();

        addLog("Rồng gây " + damage + " sát thương cho Anh Hùng!");
        updateHealth();

    } else {
        animateCharacter(heroCharacter, "dodging", 600);
        floatingDamage(0, "hero", false, true);

        showMessage("💨 ANH HÙNG NÉ THÀNH CÔNG!");
        playSound("dodge");

        addLog("Bạn đã né được Hỏa Cầu của Rồng!");
    }

    await sleep(1150);
}

// ====================================
// 9. KIỂM TRA THẮNG THUA
// ====================================

function checkGameOver() {
    if (dragonHealth <= 0) {
        dragonHealth = 0;
        gameContinue = false;

        dragonCharacter.classList.add("dead");

        showMessage("🏆 CHIẾN THẮNG! RỒNG ĐÃ BỊ TIÊU DIỆT!");
        addLog("CHIẾN THẮNG! Chúc mừng " + name + " đã diệt Rồng!");

        playSound("victory");
        updateHealth();

        return true;
    }

    if (health <= 0) {
        health = 0;
        gameContinue = false;

        heroCharacter.classList.add("dead");

        showMessage("💀 THẤT BẠI! ANH HÙNG ĐÃ GỤC NGÃ!");
        addLog("THẤT BẠI! Bạn đã trở thành hiệp sĩ nướng lá lốt!");

        playSound("defeat");
        updateHealth();

        return true;
    }

    return false;
}

// ====================================
// 10. VÒNG LẶP CHIẾN ĐẤU
// ====================================

async function startBattle() {
    if (!gameContinue || fighting) return;

    initAudio();

    fighting = true;
    attackBtn.disabled = true;

    var version = gameVersion;

    while (gameContinue && version === gameVersion) {
        round++;

        roundLabel.textContent = "LƯỢT " + round;
        addLog("========== LƯỢT " + round + " ==========");

        await sleep(600);
        if (version !== gameVersion) break;

        // Anh Hùng tấn công trước
        await heroTurn(version);
        if (version !== gameVersion) break;

        // Nếu Rồng chết thì trận đấu kết thúc
        if (checkGameOver()) break;

        // Rồng phản công
        await dragonTurn(version);
        if (version !== gameVersion) break;

        // Nếu Anh Hùng chết thì trận đấu kết thúc
        if (checkGameOver()) break;
    }

    if (version === gameVersion) {
        fighting = false;
    }
}

// ====================================
// 11. CÁC NÚT ĐIỀU KHIỂN
// ====================================

startBtn.addEventListener("click", function() {
    if (fighting) return;
    createHero();
});

attackBtn.addEventListener("click", function() {
    startBattle();
});

resetBtn.addEventListener("click", function() {
    // Hủy trận đấu cũ
    gameVersion++;
    gameContinue = false;
    fighting = false;

    level = 1;
    xp = 0;
    skillPoints = 5;

    strength = 0;
    agility = 0;
    intel = 0;

    health = 105;
    maxHealth = 105;
    dragonHealth = 600;

    round = 0;

    heroCharacter.className = "character hero-character";
    dragonCharacter.className = "character dragon-character";

    projectile.classList.remove("fire");
    damageText.className = "floating-damage";
    screenFlash.classList.remove("active");
    battlefield.classList.remove("shaking");

    attackBtn.disabled = true;

    roundLabel.textContent = "SẴN SÀNG";
    showMessage("Hãy bắt đầu cuộc chiến!");

    document.getElementById("heroStats").textContent =
        "STR ? | AGI ? | INT ?";

    document.getElementById("logContent").innerHTML = "";

    updateHealth();
    addLog("Trò chơi đã được đặt lại.");
});

soundBtn.addEventListener("click", function() {
    soundEnabled = !soundEnabled;

    soundBtn.textContent = soundEnabled
        ? "🔊 ÂM THANH: BẬT"
        : "🔇 ÂM THANH: TẮT";

    if (soundEnabled) {
        initAudio();
        playSound("attack");
    }
});

// ====================================
// 12. KHỞI TẠO GIAO DIỆN
// ====================================

updateHealth();

console.log("ANH HÙNG JAVASCRIPT");
console.log("Tên: " + name);
console.log("MSSV: " + MSSV);
console.log("Sẵn sàng chiến đấu!");
