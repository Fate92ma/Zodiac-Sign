// Variables
let year = document.getElementById("year"),

    month = document.getElementById("month"),

    day = document.getElementById("day"),

    find = document.getElementById("find"),

    result = document.getElementById("result"),

    txt = "Your <b>Zodiac Sign</b> is: ",

    getMonth, getYear, getDay;

// Events
find.addEventListener("click", mySign);

/**************************************************************************************************/

// function to find your zodiac sign based on your birth day
function mySign(getYear = year.value, getMonth = month.value - 1, getDay = day.value) {

    // January 20 - February 18

    if ((getMonth == 0) && (getDay >= 20) ||
        (getMonth == 1) && (getDay <= 18)) result.innerHTML = `${txt} <b>Aquarius</b> ♒`

    // February 19 - March 20

    if ((getMonth == 1) && (getDay >= 19) && (getDay <= 28) ||
        (getMonth == 2) && (getDay <= 20)) result.innerHTML = `${txt} <b>Pisces</b> ♓`

    // February is only: "29"

    if ((getMonth == 1) && (getDay > 29)) result.innerHTML = `<strong>Invalid Date</strong>`

    //  March 20 to April 21 

    if ((getMonth == 2) && (getDay >= 21) || (getMonth == 3) && (getDay <= 19))
        result.innerHTML = `${txt} <b>Aries</b> ♈`

    // April 20 - May 20

    if ((getMonth == 3) && (getDay >= 20) || (getMonth == 4) && (getDay <= 20))
        result.innerHTML = `${txt} <b>Taurus</b> ♉`

    // May 21 - June 20

    if ((getMonth == 4) && (getDay >= 21) || (getMonth == 5) && (getDay <= 20))
        result.innerHTML = `${txt} <b>Gemini</b> ♊`

    // June 21 - July 22

    if ((getMonth == 5) && (getDay >= 21) || (getMonth == 6) && (getDay <= 22))
        result.innerHTML = `${txt} <b>Cancer</b> ♋`

    // July 23 - August 22

    if ((getMonth == 6) && (getDay >= 23) || (getMonth == 7) && (getDay <= 22))
        result.innerHTML = `${txt} <b>Leo</b> ♌`

    // August 23 - September 22

    if ((getMonth == 7) && (getDay >= 23) || (getMonth == 8) && (getDay <= 22))
        result.innerHTML = `${txt} <b>Virgo</b> ♍`

    // September 23 - October 22

    if ((getMonth == 8) && (getDay >= 23) || (getMonth == 9) && (getDay <= 22))
        result.innerHTML = `${txt} <b>Libra</b> ♎`

    // October 23 - November 21

    if ((getMonth == 9) && (getDay >= 23) || (getMonth == 10) && (getDay <= 21))
        result.innerHTML = `${txt} <b>Scorpio</b> ♏`

    // November 22 - December 21

    if ((getMonth == 10) && (getDay >= 22) || (getMonth == 11) && (getDay <= 21))
        result.innerHTML = `${txt} <b>Sagittarius</b> ♐`

    // December 22 - January 19

    if ((getMonth == 11) && (getDay >= 22) || (getMonth == 0) && (getDay <= 19))
        result.innerHTML = `${txt} <b>Capricorn</b> ♑`

    // Else

    if ((getMonth > 11) || getDay > 31)
        result.innerHTML = `<strong>Invalid Date</strong>`

}

/**************************************************************************************************/