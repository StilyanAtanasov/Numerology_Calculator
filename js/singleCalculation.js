"use strict";

// log numbers
const graphic1 = document.getElementById(`cell1`);
const graphic2 = document.getElementById(`cell2`);
const graphic3 = document.getElementById(`cell3`);
const graphic4 = document.getElementById(`cell4`);
const graphic5 = document.getElementById(`cell5`);
const graphic6 = document.getElementById(`cell6`);
const graphic7 = document.getElementById(`cell7`);
const graphic8 = document.getElementById(`cell8`);
const graphic9 = document.getElementById(`cell9`);

// log sticks
const line1 = document.getElementById(`stick1`);
const line2 = document.getElementById(`stick2`);
const line3 = document.getElementById(`stick3`);
const line4 = document.getElementById(`stick4`);
const line5 = document.getElementById(`stick5`);
const line6 = document.getElementById(`stick6`);
const line7 = document.getElementById(`stick7`);
const line8 = document.getElementById(`stick8`);
const line9 = document.getElementById(`stick9`);
const line10 = document.getElementById(`stick10`);
const line11 = document.getElementById(`stick11`);
const line12 = document.getElementById(`stick12`);
const line13 = document.getElementById(`stick13`);
const line14 = document.getElementById(`stick14`);
const line15 = document.getElementById(`stick15`);
const line16 = document.getElementById(`stick16`);

let numberOf1s = 0;
let numberOf2s = 0;
let numberOf3s = 0;
let numberOf4s = 0;
let numberOf5s = 0;
let numberOf6s = 0;
let numberOf7s = 0;
let numberOf8s = 0;
let numberOf9s = 0;

let loggedNumbers = [];

const calculateBTN = document.getElementById(`operationFirstBTN`);
const clearButton = document.getElementById(`clearBTN`);

function numberRoundToNine(input) {
  while (input > 9) input -= 9;
  return input;
}

function clearImgsSpecs(
  imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
) {
  imgs.forEach((element) => {
    element.src = ``;
    element.title = `No data`;
    element.alt = `No data`;
  });
}

function clearSectionData() {
  document.getElementById(`Number1`).innerHTML = `No data`;
  document.getElementById(`Number2`).innerHTML = `No data`;
  document.getElementById(`Number3`).innerHTML = `No data`;
  document.getElementById(`Number4`).innerHTML = `No data`;
  document.getElementById(`Number5`).innerHTML = `No data`;
  document.getElementById(`Number6`).innerHTML = `No data`;
  document.getElementById(`Number7`).innerHTML = `No data`;
  document.getElementById(`Number8`).innerHTML = `No data`;
  document.getElementById(`Number9`).innerHTML = `No data`;

  line1.className = `matcher1`;
  line2.className = `matcher1`;
  line3.className = `matcher2`;
  line4.className = `matcher3_left_top`;
  line5.className = `matcher2`;
  line6.className = `matcher3_right_top`;
  line7.className = `matcher2`;
  line8.className = `matcher1`;
  line9.className = `matcher1`;
  line10.className = `matcher2`;
  line11.className = `matcher3_left_bottom`;
  line12.className = `matcher2`;
  line13.className = `matcher3_right_bottom`;
  line14.className = `matcher2`;
  line15.className = `matcher1`;
  line16.className = `matcher1`;

  clearImgsSpecs([
    graphic1,
    graphic2,
    graphic3,
    graphic4,
    graphic5,
    graphic6,
    graphic7,
    graphic8,
    graphic9,
  ]);

  document.getElementById(`dataResultDate1`).innerHTML = `No data`;
  document.getElementById(`dataResultMonth1`).innerHTML = `No data`;
  document.getElementById(`dataResultYear1`).innerHTML = `No data`;
  document.getElementById(`dataResultAll1`).innerHTML = `No data`;
  document.getElementById(`dataResultDate1_Month1`).innerHTML = `No data`;
  document.getElementById(`dataResultDate1_Year1`).innerHTML = `No data`;
  document.getElementById(`dataResultMonth1_Year1`).innerHTML = `No data`;

  document.getElementById(`Headnumber`).innerHTML = `No data`;

  numberOf1s = 0;
  numberOf2s = 0;
  numberOf3s = 0;
  numberOf4s = 0;
  numberOf5s = 0;
  numberOf6s = 0;
  numberOf7s = 0;
  numberOf8s = 0;
  numberOf9s = 0;

  loggedNumbers = [];
}

calculateBTN.onclick = function () {
  clearSectionData();

  let dateString = prompt(`Insert date`);
  let monthString = prompt(`Insert month`);
  let yearString = prompt(`Insert year`);

  let date = Number(dateString);
  let month = Number(monthString);
  let year = Number(yearString);

  if (year < 0)
    alert(`Invalid input date [${dateString}/${monthString}/${yearString}]!
  - The year must be greater or equal 0!`);

  // Validation
  const ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month < 1 || month > 12 || date < 1) {
    alert(`Invalid input date [${dateString}/${monthString}/${yearString}]!`);
    return;
  }
  if (month == 1 || month > 2) {
    if (date > ListofDays[month - 1]) {
      alert(`Invalid input date [${dateString}/${monthString}/${yearString}]!`);
      return;
    }
  }
  if (month == 2) {
    var leapYear = false;
    if ((!(year % 4) && year % 100) || !(year % 400)) {
      leapYear = true;
    }
    if (leapYear == false && date >= 29) {
      alert(`Invalid input date [${dateString}/${monthString}/${yearString}]`);
      return;
    }
    if (leapYear == true && date > 29) {
      alert(`Invalid input date [${dateString}/${monthString}/${yearString}]`);
      return;
    }
  }

  document.getElementById(`body`).className = "body2";

  date = numberRoundToNine(date);
  month = numberRoundToNine(month);
  year = numberRoundToNine(year);

  let rounded_Date_Month_Year = numberRoundToNine(date + month + year);
  let rounded_Date_Month = numberRoundToNine(date + month);
  let rounded_Date_Year = numberRoundToNine(date + year);
  let rounded_Month_Year = numberRoundToNine(month + year);

  document.getElementById(
    `dataResultDate1`
  ).innerHTML = `Date = ${dateString} => ${date}`;
  document.getElementById(
    `dataResultMonth1`
  ).innerHTML = `Month = ${monthString} => ${month}`;
  document.getElementById(
    `dataResultYear1`
  ).innerHTML = `Year = ${yearString} => ${year}`;
  document.getElementById(
    `dataResultAll1`
  ).innerHTML = `Equals = ${rounded_Date_Month_Year}`;
  document.getElementById(
    `dataResultDate1_Month1`
  ).innerHTML = `Month + date = ${rounded_Date_Month}`;
  document.getElementById(
    `dataResultDate1_Year1`
  ).innerHTML = `Date + year = ${rounded_Date_Year}`;
  document.getElementById(
    `dataResultMonth1_Year1`
  ).innerHTML = `Year + month = ${rounded_Month_Year}`;

  function numberValueChecker(input) {
    for (let i = 0; i < String(input).length; i++) {
      switch (String(input)[i]) {
        case `1`:
          numberOf1s++;
          break;
        case `2`:
          numberOf2s++;
          break;
        case `3`:
          numberOf3s++;
          break;
        case `4`:
          numberOf4s++;
          break;
        case `5`:
          numberOf5s++;
          break;
        case `6`:
          numberOf6s++;
          break;
        case `7`:
          numberOf7s++;
          break;
        case `8`:
          numberOf8s++;
          break;
        case `9`:
          numberOf9s++;
          break;
      }
    }
  }

  numberValueChecker(date);
  numberValueChecker(month);
  numberValueChecker(year);
  numberValueChecker(rounded_Date_Month_Year);
  numberValueChecker(rounded_Date_Month);
  numberValueChecker(rounded_Date_Year);
  numberValueChecker(rounded_Month_Year);
  numberValueChecker(dateString);
  numberValueChecker(monthString);
  numberValueChecker(yearString);

  graphic1.alt = ``;
  graphic2.alt = ``;
  graphic3.alt = ``;
  graphic4.alt = ``;
  graphic5.alt = ``;
  graphic6.alt = ``;
  graphic7.alt = ``;
  graphic8.alt = ``;
  graphic9.alt = ``;

  graphic1.title = ``;
  graphic2.title = ``;
  graphic3.title = ``;
  graphic4.title = ``;
  graphic5.title = ``;
  graphic6.title = ``;
  graphic7.title = ``;
  graphic8.title = ``;
  graphic9.title = ``;

  function GraphicsLog(name, count) {
    if (count === 0) return;

    name = String(name);
    if (name.includes(1)) {
      loggedNumbers.push(1);
    } else if (name.includes(2)) {
      loggedNumbers.push(2);
    } else if (name.includes(3)) {
      loggedNumbers.push(3);
    } else if (name.includes(4)) {
      loggedNumbers.push(4);
    } else if (name.includes(5)) {
      loggedNumbers.push(5);
    } else if (name.includes(6)) {
      loggedNumbers.push(6);
    } else if (name.includes(7)) {
      loggedNumbers.push(7);
    } else if (name.includes(8)) {
      loggedNumbers.push(8);
    } else if (name.includes(9)) {
      loggedNumbers.push(9);
    }

    document.getElementById(
      `cell${loggedNumbers[loggedNumbers.length - 1]}`
    ).src = `../images/${loggedNumbers[loggedNumbers.length - 1]}_${count}.png`;
  }

  GraphicsLog(`numberOf1s`, numberOf1s);
  GraphicsLog(`numberOf2s`, numberOf2s);
  GraphicsLog(`numberOf3s`, numberOf3s);
  GraphicsLog(`numberOf4s`, numberOf4s);
  GraphicsLog(`numberOf5s`, numberOf5s);
  GraphicsLog(`numberOf6s`, numberOf6s);
  GraphicsLog(`numberOf7s`, numberOf7s);
  GraphicsLog(`numberOf8s`, numberOf8s);
  GraphicsLog(`numberOf9s`, numberOf9s);

  line1.className = `disabled`;
  line2.className = `disabled`;
  line3.className = `disabled`;
  line4.className = `disabled`;
  line5.className = `disabled`;
  line6.className = `disabled`;
  line7.className = `disabled`;
  line8.className = `disabled`;
  line9.className = `disabled`;
  line10.className = `disabled`;
  line11.className = `disabled`;
  line12.className = `disabled`;
  line13.className = `disabled`;
  line14.className = `disabled`;
  line15.className = `disabled`;
  line16.className = `disabled`;

  if (loggedNumbers.includes(1) && loggedNumbers.includes(2)) {
    line3.className = `matcher2`;
  }
  if (loggedNumbers.includes(1) && loggedNumbers.includes(4)) {
    line1.className = `matcher1`;
  }
  if (loggedNumbers.includes(1) && loggedNumbers.includes(5)) {
    line4.className = `matcher3_left_top`;
  }
  if (loggedNumbers.includes(2) && loggedNumbers.includes(5)) {
    line8.className = `matcher1`;
  }
  if (loggedNumbers.includes(2) && loggedNumbers.includes(3)) {
    line10.className = `matcher2`;
  }
  if (loggedNumbers.includes(3) && loggedNumbers.includes(5)) {
    line11.className = `matcher3_left_bottom`;
  }
  if (loggedNumbers.includes(3) && loggedNumbers.includes(6)) {
    line15.className = `matcher1`;
  }
  if (loggedNumbers.includes(4) && loggedNumbers.includes(7)) {
    line2.className = `matcher1`;
  }
  if (loggedNumbers.includes(4) && loggedNumbers.includes(5)) {
    line5.className = `matcher2`;
  }
  if (loggedNumbers.includes(5) && loggedNumbers.includes(6)) {
    line12.className = `matcher2`;
  }
  if (loggedNumbers.includes(5) && loggedNumbers.includes(8)) {
    line9.className = `matcher1`;
  }
  if (loggedNumbers.includes(6) && loggedNumbers.includes(9)) {
    line16.className = `matcher1`;
  }
  if (loggedNumbers.includes(7) && loggedNumbers.includes(8)) {
    line7.className = `matcher2`;
  }
  if (loggedNumbers.includes(7) && loggedNumbers.includes(5)) {
    line6.className = `matcher3_right_top`;
  }
  if (loggedNumbers.includes(8) && loggedNumbers.includes(9)) {
    line14.className = `matcher2`;
  }
  if (loggedNumbers.includes(9) && loggedNumbers.includes(5)) {
    line13.className = `matcher3_right_bottom`;
  }

  if (
    loggedNumbers.includes(1) &&
    loggedNumbers.includes(2) &&
    loggedNumbers.includes(3)
  ) {
    line3.className = `matcher2 special`;
    line10.className = `matcher2 special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `1 - 2 - 3` + `\n`;
  }
  if (
    loggedNumbers.includes(1) &&
    loggedNumbers.includes(4) &&
    loggedNumbers.includes(7)
  ) {
    line1.className = `matcher1 special`;
    line2.className = `matcher1 special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `1 - 4 - 7` + `\n`;
  }
  if (
    loggedNumbers.includes(1) &&
    loggedNumbers.includes(5) &&
    loggedNumbers.includes(9)
  ) {
    line4.className = `matcher3_left_top special`;
    line13.className = `matcher3_right_bottom special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `1 - 5 - 9` + `\n`;
  }
  if (
    loggedNumbers.includes(2) &&
    loggedNumbers.includes(5) &&
    loggedNumbers.includes(8)
  ) {
    line8.className = `matcher1 special`;
    line9.className = `matcher1 special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `2 - 5 - 8` + `\n`;
  }
  if (
    loggedNumbers.includes(3) &&
    loggedNumbers.includes(5) &&
    loggedNumbers.includes(7)
  ) {
    line11.className = `matcher3_left_bottom special`;
    line6.className = `matcher3_right_top special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `3 - 5 - 7` + `\n`;
  }
  if (
    loggedNumbers.includes(3) &&
    loggedNumbers.includes(6) &&
    loggedNumbers.includes(9)
  ) {
    line15.className = `matcher1 special`;
    line16.className = `matcher1 special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `3 - 6 - 9` + `\n`;
  }
  if (
    loggedNumbers.includes(4) &&
    loggedNumbers.includes(5) &&
    loggedNumbers.includes(6)
  ) {
    line5.className = `matcher2 special`;
    line12.className = `matcher2 special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `4 - 5 - 6` + `\n`;
  }
  if (
    loggedNumbers.includes(7) &&
    loggedNumbers.includes(8) &&
    loggedNumbers.includes(9)
  ) {
    line7.className = `matcher2 special`;
    line14.className = `matcher2 special`;
    document.getElementsByClassName(`combinations`).innerHTML +=
      `7 - 8 - 9` + `\n`;
  }

  document.getElementById(`Headnumber`).innerHTML = rounded_Date_Month_Year;

  document.getElementById(`Number1`).innerHTML = `Number of 1s - ${numberOf1s}`;
  document.getElementById(`Number2`).innerHTML = `Number of 2s - ${numberOf2s}`;
  document.getElementById(`Number3`).innerHTML = `Number of 3s - ${numberOf3s}`;
  document.getElementById(`Number4`).innerHTML = `Number of 4s - ${numberOf4s}`;
  document.getElementById(`Number5`).innerHTML = `Number of 5s - ${numberOf5s}`;
  document.getElementById(`Number6`).innerHTML = `Number of 6s - ${numberOf6s}`;
  document.getElementById(`Number7`).innerHTML = `Number of 7s - ${numberOf7s}`;
  document.getElementById(`Number8`).innerHTML = `Number of 8s - ${numberOf8s}`;
  document.getElementById(`Number9`).innerHTML = `Number of 9s - ${numberOf9s}`;
};

clearButton.onclick = function () {
  document.getElementById(`body`).className = "body1";
  clearSectionData();
};
