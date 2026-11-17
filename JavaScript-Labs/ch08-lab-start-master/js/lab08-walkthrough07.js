var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");

daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

//document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");
document.write("<tr>");

for (i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";

    document.write("<th>" + day + "</th>");
}

for (var row = 0; row < 5; row++) {
    document.write("<tr>");

    for (var col = 0; col < 7; col++) {
        var date = row * 7 + col + 1;

        if (date <= 30)
            document.write("<td>" + date + "</td>");
        else
            document.write("<td></td>");
    }

    document.write("</tr>");
}

document.write("</table>");