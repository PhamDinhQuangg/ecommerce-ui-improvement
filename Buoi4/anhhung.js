
var name = "Pham Dinh Quang";
var MSSV = 31241024277;

document.write("Tôi tên là " + name + " - MSSV: " + MSSV +
    " sẽ quyết tâm trở thành 1 anh hùng JS");

// Khởi tạo chỉ số
var level = 1;
var xp = 0;
var skillPoints = 5;

// Nâng cấp nhân vật
level++;
xp = 150 * (level - 1) + 200;
skillPoints = skillPoints + xp / 10;

document.write("<br>" + name + " sẽ là Anh Hùng Javascript");
document.write("<br>Cấp độ hiện tại của bạn là " + level);

// Tính chỉ số
var strength = 0.6 * skillPoints + 0.1 * xp;
var agility = 0.2 * skillPoints + 0.2 * xp;
var intel = 0.2 * skillPoints + 10 * level;

document.write("<br>Chỉ số strength của bạn là " + strength);
document.write("<br>Chỉ số agility của bạn là " + agility);
document.write("<br>Chỉ số intel của bạn là " + intel);

// LEVEL UP
level = 3;
xp = xp + 200;

document.write("<br>LEVEL UP! Chúc mừng bạn lên cấp " + level + "! XP +200");

// Kiểm tra tên
var nhapTen = prompt("Hãy nhập lại tên của bạn");

if (nhapTen == name) {
    console.log("Chính xác! Bạn có trí nhớ rất tốt! intel +5!");
    intel = intel + 5;
} else {
    console.log("Tệ thật! Tên chính mình mà không nhớ sao?! intel -5!");
    intel = intel - 5;
}

// Chọn phân cấp Anh Hùng
var phancap = "Chưa có phân cấp";

var chon = prompt("Bạn muốn chọn phân cấp nào? a: Chiến Binh | b: Sát Thủ | c: Thợ Săn");

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

document.write("<br>Phân cấp Anh Hùng: " + phancap);
document.write("<br>Strength hiện tại: " + strength);
document.write("<br>Agility hiện tại: " + agility);
document.write("<br>Intel hiện tại: " + intel);

// TRÒ CHƠI DIỆT RỒNG
level = 5;
var health = level + 100;

console.log("Strength: " + strength);
console.log("Agility: " + agility);
console.log("Intel: " + intel);

// Chỉ số Rồng Già
var dragonHealth = 600;
var dragonStr = 100;
var dragonAgi = 15;
var dragonInt = 80;

var gameContinue = true;

while (gameContinue) {

    // Anh Hùng tấn công trước
    var heroHit = Math.random() * 100 > dragonAgi;

    if (heroHit) {
        dragonHealth = dragonHealth - strength;
        alert("TRẢM LONG! Bạn gây sát thương " + strength + " điểm cho Rồng!");

        var heroCritical = Math.random() * 100 < intel;

        if (heroCritical) {
            dragonHealth = dragonHealth - strength * 2;
            alert("CHÍ MẠNG! Bạn gây thêm " + strength * 2 + " sát thương cho Rồng!");
        }
    } else {
        alert("XÍ HỤT! Rồng đã né được đòn tấn công của bạn!");
    }

    // Kiểm tra Rồng còn sống không
    if (dragonHealth <= 0) {
        gameContinue = false;
        alert("CHIẾN THẮNG!!! Chúc mừng bạn đã tiêu diệt Rồng!");
    } else {

        // Rồng tấn công
        var dragonHit = Math.random() * 100 > agility;

        if (dragonHit) {
            health = health - dragonStr;
            alert("HỎA CẦU! Rồng gây " + dragonStr + " sát thương cho bạn!");

            var dragonCritical = Math.random() * 100 < dragonInt;

            if (dragonCritical) {
                health = health - dragonStr * 2;
                alert("CHÍ MẠNG! Rồng gây thêm " + dragonStr * 2 + " sát thương!");
            }
        } else {
            alert("XÍ HỤT! Bạn đã né được đòn tấn công của Rồng!");
        }
    }

    // Kiểm tra Anh Hùng còn sống không
    if (health <= 0) {
        gameContinue = false;
        alert("THẤT BẠI!!! Bạn đã trở thành món hiệp sĩ nướng lá lốt!");
    }
}
