"use strict";

// log images
const graphics = [];
for (let i = 1; i <= 9; i++) {
  graphics[i] = document.getElementById(`cell${i}`);
}

// log matches
const matches = [document.getElementById(`hiddenMatch`)];
for (let i = 1; i <= 16; i++) {
  matches[i] = document.getElementById(`stick${i}`);
}

let matchesClasses = [
  ``,
  `matcher1`,
  `matcher1`,
  `matcher2`,
  `matcher3_left_top`,
  `matcher2`,
  `matcher3_right_top`,
  `matcher2`,
  `matcher1`,
  `matcher1`,
  `matcher2`,
  `matcher3_left_bottom`,
  `matcher2`,
  `matcher3_right_bottom`,
  `matcher2`,
  `matcher1`,
  `matcher1`,
];

let numbersCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    element.title = ``;
    element.alt = ``;
  });
}

// ------------------------- Clear Section -------------------------
function clearSectionData() {
  // Remove Numbers Count Stats
  for (let index = 1; index <= 9; index++) {
    document.getElementById(`Number${index}`).innerHTML = `No data`;
  }

  for (let index = 1; index < matches.length; index++) {
    matches[index].className = matchesClasses[index];
  }

  clearImgsSpecs(graphics);

  document.getElementById(`dataResultDate1`).innerHTML = `No data`;
  document.getElementById(`dataResultMonth1`).innerHTML = `No data`;
  document.getElementById(`dataResultYear1`).innerHTML = `No data`;
  document.getElementById(`dataResultAll1`).innerHTML = `No data`;
  document.getElementById(`dataResultDate1_Month1`).innerHTML = `No data`;
  document.getElementById(`dataResultDate1_Year1`).innerHTML = `No data`;
  document.getElementById(`dataResultMonth1_Year1`).innerHTML = `No data`;

  document.getElementById(`Headnumber`).innerHTML = `No data`;

  for (let index = 0; index < numbersCount.length; index++) {
    numbersCount[index] = 0;
  }

  loggedNumbers = [];
}

// ------------------------- Calculation -------------------------
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
      numbersCount[Number(String(input)[i]) - 1]++;
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

  // reset images
  clearImgsSpecs(graphics);

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

  // Log numbers count
  for (let index = 0; index < 9; index++) {
    GraphicsLog(`numberOf${index + 1}s`, numbersCount[index]);
  }

  // Disable matches
  matches.forEach((line) => {
    line.className = `disabled`;
  });

  // Combinations Checker
  function CheckForCombinations(numsToContain, matchesToShow, classNames) {
    if (numsToContain.every((number) => loggedNumbers.includes(number))) {
      for (let index = 0; index < matchesToShow.length; index++) {
        matchesToShow[index].className = classNames[index];
      }
    }
  }

  // Connections
  CheckForCombinations([1, 4], [matches[1]], [`matcher1`]);
  CheckForCombinations([4, 7], [matches[2]], [`matcher1`]);
  CheckForCombinations([1, 2], [matches[3]], [`matcher2`]);
  CheckForCombinations([1, 5], [matches[4]], [`matcher3_left_top`]);
  CheckForCombinations([4, 5], [matches[5]], [`matcher2`]);
  CheckForCombinations([7, 5], [matches[6]], [`matcher3_right_top`]);
  CheckForCombinations([7, 8], [matches[7]], [`matcher2`]);
  CheckForCombinations([2, 5], [matches[8]], [`matcher1`]);
  CheckForCombinations([5, 8], [matches[9]], [`matcher1`]);
  CheckForCombinations([2, 3], [matches[10]], [`matcher2`]);
  CheckForCombinations([3, 5], [matches[11]], [`matcher3_left_bottom`]);
  CheckForCombinations([5, 6], [matches[12]], [`matcher2`]);
  CheckForCombinations([9, 5], [matches[13]], [`matcher3_right_bottom`]);
  CheckForCombinations([8, 9], [matches[14]], [`matcher2`]);
  CheckForCombinations([3, 6], [matches[15]], [`matcher1`]);
  CheckForCombinations([6, 9], [matches[16]], [`matcher1`]);

  // Combinations
  CheckForCombinations(
    [1, 2, 3],
    [matches[3], matches[10]],
    [`matcher2 special`, `matcher2 special`]
  );
  CheckForCombinations(
    [1, 4, 7],
    [matches[1], matches[2]],
    [`matcher1 special`, `matcher1 special`]
  );
  CheckForCombinations(
    [1, 5, 9],
    [matches[4], matches[13]],
    [`matcher3_left_top special`, `matcher3_right_bottom special`]
  );
  CheckForCombinations(
    [2, 5, 8],
    [matches[8], matches[9]],
    [`matcher1 special`, `matcher1 special`]
  );
  CheckForCombinations(
    [3, 5, 7],
    [matches[11], matches[6]],
    [`matcher3_left_bottom special`, `matcher3_right_top special`]
  );
  CheckForCombinations(
    [3, 6, 9],
    [matches[15], matches[16]],
    [`matcher1 special`, `matcher1 special`]
  );
  CheckForCombinations(
    [4, 5, 6],
    [matches[5], matches[12]],
    [`matcher2 special`, `matcher2 special`]
  );
  CheckForCombinations(
    [7, 8, 9],
    [matches[7], matches[14]],
    [`matcher2 special`, `matcher2 special`]
  );

  // Check For Full Card
  CheckForCombinations(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    matches,
    matchesClasses.map((s) => `${s} full`)
  );

  document.getElementById(`Headnumber`).innerHTML = rounded_Date_Month_Year;

  for (let index = 0; index < 9; index++) {
    document.getElementById(`Number${index + 1}`).innerHTML = `Number of ${
      index + 1
    }s - ${numbersCount[index]}`;
  }
};

clearButton.onclick = function () {
  document.getElementById(`body`).className = "body1";
  clearSectionData();
};
