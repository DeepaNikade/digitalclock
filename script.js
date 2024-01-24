function updateClock() {
    var now = new Date();
    var dayName = getDayName(now.getDay());
    var month = getMonthName(now.getMonth());
    var dayNum = now.getDate();
    var year = now.getFullYear();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var period = "AM";

    // Convert to 12-hour format and determine period (AM/PM)
    if (hour > 12) {
        hour = hour - 12;
        period = "PM";
    }

    // Add leading zero if needed
    hour = addLeadingZero(hour);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);

    // Update the digital clock
    document.getElementById("dayname").textContent = dayName;
    document.getElementById("month").textContent = month;
    document.getElementById("daynum").textContent = dayNum;
    document.getElementById("year").textContent = year;
    document.getElementById("hour").textContent = hour;
    document.getElementById("min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
    document.getElementById("period").textContent = period;
}

function getDayName(dayIndex) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

function getMonthName(monthIndex) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number;
}

function initClock() {
    updateClock();
    window.setInterval(updateClock, 1000); // Update every second
}

initClock();
