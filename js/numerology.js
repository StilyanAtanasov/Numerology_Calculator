"use strict";

const graphic1 = document.getElementById(`cell1`);
const graphic2 = document.getElementById(`cell2`);
const graphic3 = document.getElementById(`cell3`);
const graphic4 = document.getElementById(`cell4`);
const graphic5 = document.getElementById(`cell5`);
const graphic6 = document.getElementById(`cell6`);
const graphic7 = document.getElementById(`cell7`);
const graphic8 = document.getElementById(`cell8`);
const graphic9 = document.getElementById(`cell9`);

const graphic1_First = document.getElementById(`cell1First`);
const graphic2_First = document.getElementById(`cell2First`);
const graphic3_First = document.getElementById(`cell3First`);
const graphic4_First = document.getElementById(`cell4First`);
const graphic5_First = document.getElementById(`cell5First`);
const graphic6_First = document.getElementById(`cell6First`);
const graphic7_First = document.getElementById(`cell7First`);
const graphic8_First = document.getElementById(`cell8First`);
const graphic9_First = document.getElementById(`cell9First`);

const graphic1_Second = document.getElementById(`cell1Second`);
const graphic2_Second = document.getElementById(`cell2Second`);
const graphic3_Second = document.getElementById(`cell3Second`);
const graphic4_Second = document.getElementById(`cell4Second`);
const graphic5_Second = document.getElementById(`cell5Second`);
const graphic6_Second = document.getElementById(`cell6Second`);
const graphic7_Second = document.getElementById(`cell7Second`);
const graphic8_Second = document.getElementById(`cell8Second`);
const graphic9_Second = document.getElementById(`cell9Second`);

const graphic1_Third = document.getElementById(`cell1Third`);
const graphic2_Third = document.getElementById(`cell2Third`);
const graphic3_Third = document.getElementById(`cell3Third`);
const graphic4_Third = document.getElementById(`cell4Third`);
const graphic5_Third = document.getElementById(`cell5Third`);
const graphic6_Third = document.getElementById(`cell6Third`);
const graphic7_Third = document.getElementById(`cell7Third`);
const graphic8_Third = document.getElementById(`cell8Third`);
const graphic9_Third = document.getElementById(`cell9Third`);

const graphic1_Fourth = document.getElementById(`cell1Fourth`);
const graphic2_Fourth = document.getElementById(`cell2Fourth`);
const graphic3_Fourth = document.getElementById(`cell3Fourth`);
const graphic4_Fourth = document.getElementById(`cell4Fourth`);
const graphic5_Fourth = document.getElementById(`cell5Fourth`);
const graphic6_Fourth = document.getElementById(`cell6Fourth`);
const graphic7_Fourth = document.getElementById(`cell7Fourth`);
const graphic8_Fourth = document.getElementById(`cell8Fourth`);
const graphic9_Fourth = document.getElementById(`cell9Fourth`);

const graphic1_Fifth = document.getElementById(`cell1Fifth`);
const graphic2_Fifth = document.getElementById(`cell2Fifth`);
const graphic3_Fifth = document.getElementById(`cell3Fifth`);
const graphic4_Fifth = document.getElementById(`cell4Fifth`);
const graphic5_Fifth = document.getElementById(`cell5Fifth`);
const graphic6_Fifth = document.getElementById(`cell6Fifth`);
const graphic7_Fifth = document.getElementById(`cell7Fifth`);
const graphic8_Fifth = document.getElementById(`cell8Fifth`);
const graphic9_Fifth = document.getElementById(`cell9Fifth`);

const line1_First = document.getElementById(`stick1First`);
const line2_First = document.getElementById(`stick2First`);
const line3_First = document.getElementById(`stick3First`);
const line4_First = document.getElementById(`stick4First`);
const line5_First = document.getElementById(`stick5First`);
const line6_First = document.getElementById(`stick6First`);
const line7_First = document.getElementById(`stick7First`);
const line8_First = document.getElementById(`stick8First`);
const line9_First = document.getElementById(`stick9First`);
const line10_First = document.getElementById(`stick10First`);
const line11_First = document.getElementById(`stick11First`);
const line12_First = document.getElementById(`stick12First`);
const line13_First = document.getElementById(`stick13First`);
const line14_First = document.getElementById(`stick14First`);
const line15_First = document.getElementById(`stick15First`);
const line16_First = document.getElementById(`stick16First`);

const line1_Second = document.getElementById(`stick1Second`);
const line2_Second = document.getElementById(`stick2Second`);
const line3_Second = document.getElementById(`stick3Second`);
const line4_Second = document.getElementById(`stick4Second`);
const line5_Second = document.getElementById(`stick5Second`);
const line6_Second = document.getElementById(`stick6Second`);
const line7_Second = document.getElementById(`stick7Second`);
const line8_Second = document.getElementById(`stick8Second`);
const line9_Second = document.getElementById(`stick9Second`);
const line10_Second = document.getElementById(`stick10Second`);
const line11_Second = document.getElementById(`stick11Second`);
const line12_Second = document.getElementById(`stick12Second`);
const line13_Second = document.getElementById(`stick13Second`);
const line14_Second = document.getElementById(`stick14Second`);
const line15_Second = document.getElementById(`stick15Second`);
const line16_Second = document.getElementById(`stick16Second`);

const line1_Third = document.getElementById(`stick1Third`);
const line2_Third = document.getElementById(`stick2Third`);
const line3_Third = document.getElementById(`stick3Third`);
const line4_Third = document.getElementById(`stick4Third`);
const line5_Third = document.getElementById(`stick5Third`);
const line6_Third = document.getElementById(`stick6Third`);
const line7_Third = document.getElementById(`stick7Third`);
const line8_Third = document.getElementById(`stick8Third`);
const line9_Third = document.getElementById(`stick9Third`);
const line10_Third = document.getElementById(`stick10Third`);
const line11_Third = document.getElementById(`stick11Third`);
const line12_Third = document.getElementById(`stick12Third`);
const line13_Third = document.getElementById(`stick13Third`);
const line14_Third = document.getElementById(`stick14Third`);
const line15_Third = document.getElementById(`stick15Third`);
const line16_Third = document.getElementById(`stick16Third`);

const line1_Fourth = document.getElementById(`stick1Fourth`);
const line2_Fourth = document.getElementById(`stick2Fourth`);
const line3_Fourth = document.getElementById(`stick3Fourth`);
const line4_Fourth = document.getElementById(`stick4Fourth`);
const line5_Fourth = document.getElementById(`stick5Fourth`);
const line6_Fourth = document.getElementById(`stick6Fourth`);
const line7_Fourth = document.getElementById(`stick7Fourth`);
const line8_Fourth = document.getElementById(`stick8Fourth`);
const line9_Fourth = document.getElementById(`stick9Fourth`);
const line10_Fourth = document.getElementById(`stick10Fourth`);
const line11_Fourth = document.getElementById(`stick11Fourth`);
const line12_Fourth = document.getElementById(`stick12Fourth`);
const line13_Fourth = document.getElementById(`stick13Fourth`);
const line14_Fourth = document.getElementById(`stick14Fourth`);
const line15_Fourth = document.getElementById(`stick15Fourth`);
const line16_Fourth = document.getElementById(`stick16Fourth`);

const line1_Fifth = document.getElementById(`stick1Fifth`);
const line2_Fifth = document.getElementById(`stick2Fifth`);
const line3_Fifth = document.getElementById(`stick3Fifth`);
const line4_Fifth = document.getElementById(`stick4Fifth`);
const line5_Fifth = document.getElementById(`stick5Fifth`);
const line6_Fifth = document.getElementById(`stick6Fifth`);
const line7_Fifth = document.getElementById(`stick7Fifth`);
const line8_Fifth = document.getElementById(`stick8Fifth`);
const line9_Fifth = document.getElementById(`stick9Fifth`);
const line10_Fifth = document.getElementById(`stick10Fifth`);
const line11_Fifth = document.getElementById(`stick11Fifth`);
const line12_Fifth = document.getElementById(`stick12Fifth`);
const line13_Fifth = document.getElementById(`stick13Fifth`);
const line14_Fifth = document.getElementById(`stick14Fifth`);
const line15_Fifth = document.getElementById(`stick15Fifth`);
const line16_Fifth = document.getElementById(`stick16Fifth`);

const number1s = document.getElementById(`Number1`);
const number2s = document.getElementById(`Number2`);
const number3s = document.getElementById(`Number3`);
const number4s = document.getElementById(`Number4`);
const number5s = document.getElementById(`Number5`);
const number6s = document.getElementById(`Number6`);
const number7s = document.getElementById(`Number7`);
const number8s = document.getElementById(`Number8`);
const number9s = document.getElementById(`Number9`);

const headNumber = document.getElementById(`Headnumber`);
const headNumberFirst = document.getElementById(`HeadnumberFirst`);
const headNumberSecond = document.getElementById(`HeadnumberSecond`);
const headNumberThird = document.getElementById(`HeadnumberThird`);
const headNumberFourth = document.getElementById(`HeadnumberFourth`);
const headNumberFifth = document.getElementById(`HeadnumberFifth`);

const dateFirst = document.getElementById(`date1`);
const dateSecond = document.getElementById(`date2`);
const dateThird = document.getElementById(`date3`);
const dateFourth = document.getElementById(`date4`);

const operation1Button = document.getElementById(`operationFirstBTN`);
const clearButton = document.getElementById(`clearBTN`);
// const sendButton = document.getElementById(`sendBTN`);
const finalBTN = document.getElementById(`finalOperationBTN`);

let numberOf1s = [];
let numberOf2s = [];
let numberOf3s = [];
let numberOf4s = [];
let numberOf5s = [];
let numberOf6s = [];
let numberOf7s = [];
let numberOf8s = [];
let numberOf9s = [];

const nextNumberToFill = [];
let loggedNumbers = [];
let loggedKeyNUMS1 = [];
let loggedKeyNUMS2 = [];
let loggedKeyNUMS3 = [];
let loggedKeyNUMS4 = [];
let loggedNUMS1 = [];
let loggedNUMS2 = [];
let loggedNUMS3 = [];
let loggedNUMS4 = [];
let loggedNUMS5 = [];

let dateInput;
let monthInput;
let yearInput;

operation1Button.onclick = function () {
  const date1 = prompt(`Insert date`);
  const month1 = prompt(`Insert month`);
  const year1 = prompt(`Insert year`);

  dateInput = date1;
  monthInput = month1;
  yearInput = year1;

  let a = 0;
  let b = 0;
  let c = 0;
  const d = 9;

  // transform date

  if (date1 < 10 && date1 > 0) {
    a = Number(date1);
  } else if (date1 >= 10 && date1 < 19) {
    a = date1 - d;
  } else if (date1 >= 19 && date1 < 28) {
    a = date1 - d * 2;
  } else if (date1 >= 28 && date1 < 32) {
    a = date1 - d * 3;
  } else {
    a = 9999;
  }

  // transform month

  if (month1 < 10 && month1 > 0) {
    b = Number(month1);
  } else if (month1 >= 10 && month1 < 13) {
    b = month1 - d;
  } else {
    b = 9999;
  }

  // transform year

  if (year1 < 1909 && year1 > 1899) {
    c = year1 - d * 211;
  } else if (year1 >= 1909 && year1 < 1918) {
    c = year1 - d * 212;
  } else if (year1 >= 1918 && year1 < 1927) {
    c = year1 - d * 213;
  } else if (year1 >= 1927 && year1 < 1936) {
    c = year1 - d * 214;
  } else if (year1 >= 1936 && year1 < 1945) {
    c = year1 - d * 215;
  } else if (year1 >= 1945 && year1 < 1954) {
    c = year1 - d * 216;
  } else if (year1 >= 1954 && year1 < 1963) {
    c = year1 - d * 217;
  } else if (year1 >= 1963 && year1 < 1972) {
    c = year1 - d * 218;
  } else if (year1 >= 1972 && year1 < 1981) {
    c = year1 - d * 219;
  } else if (year1 >= 1981 && year1 < 1990) {
    c = year1 - d * 220;
  } else if (year1 >= 1990 && year1 < 1999) {
    c = year1 - d * 221;
  } else if (year1 >= 1999 && year1 < 2008) {
    c = year1 - d * 222;
  } else if (year1 >= 2008 && year1 < 2017) {
    c = year1 - d * 223;
  } else if (year1 >= 2017 && year1 < 2026) {
    c = year1 - d * 224;
  } else if (year1 >= 2026 && year1 < 2035) {
    c = year1 - d * 225;
  } else if (year1 >= 2035 && year1 < 2044) {
    c = year1 - d * 226;
  } else if (year1 >= 2044 && year1 < 2053) {
    c = year1 - d * 227;
  } else if (year1 >= 2053 && year1 < 2062) {
    c = year1 - d * 228;
  } else if (year1 >= 2062 && year1 < 2071) {
    c = year1 - d * 229;
  } else if (year1 >= 2071 && year1 < 2080) {
    c = year1 - d * 230;
  } else if (year1 >= 2080 && year1 < 2089) {
    c = year1 - d * 231;
  } else if (year1 >= 2089 && year1 < 2098) {
    c = year1 - d * 232;
  } else if (year1 >= 2098 && year1 < 2107) {
    c = year1 - d * 233;
  } else if (year1 >= 2107 && year1 < 2116) {
    c = year1 - d * 234;
  } else {
    c = 9999;
  }

  // round equal state
  const resultDataABC1 = a + b + c;
  const resultDataAB1 = a + b;
  const resultDataAC1 = a + c;
  const resultDataBC1 = b + c;

  function resultFilter(input) {
    if (input > 0 && input < 10) {
      return input;
    } else if (input >= 10 && input < 19) {
      return input - 9;
    } else if (input >= 19 && input < 28) {
      return input - 18;
    }
  }

  const roundedAB1 = resultFilter(resultDataAB1);
  const RoundedCB1 = resultFilter(resultDataBC1);
  const RoundedAC1 = resultFilter(resultDataAC1);
  const RoundedABC1 = resultFilter(resultDataABC1);

  document.getElementById(
    `dataResultDate1`
  ).innerHTML = `Date - ${date1} => ${a}`;
  document.getElementById(
    `dataResultMonth1`
  ).innerHTML = `Month - ${month1} => ${b}`;
  document.getElementById(
    `dataResultYear1`
  ).innerHTML = `Year - ${year1} => ${c}`;
  document.getElementById(
    `dataResultAll1`
  ).innerHTML = `Equals = ${RoundedABC1}`;
  document.getElementById(
    `dataResultDate1_Month1`
  ).innerHTML = `Month + date = ${roundedAB1}`;
  document.getElementById(
    `dataResultDate1_Year1`
  ).innerHTML = `Date + year = ${RoundedAC1}`;
  document.getElementById(
    `dataResultMonth1_Year1`
  ).innerHTML = `Year + month = ${RoundedCB1}`;

  function numberValueChecker(input) {
    switch (input) {
      case 1:
      case `1`:
        numberOf1s.push(1);
        break;
      case 2:
      case `2`:
        numberOf2s.push(2);
        break;
      case 3:
      case `3`:
        numberOf3s.push(3);
        break;
      case 4:
      case `4`:
        numberOf4s.push(4);
        break;
      case 5:
      case `5`:
        numberOf5s.push(5);
        break;
      case 6:
      case `6`:
        numberOf6s.push(6);
        break;
      case 7:
      case `7`:
        numberOf7s.push(7);
        break;
      case 8:
      case `8`:
        numberOf8s.push(8);
        break;
      case 9:
      case `9`:
        numberOf9s.push(9);
        break;
    }
  }

  function secondaryNumbers(input) {
    if (input.length === 2) {
      if (input[0] != 0 && input[1] != 0) {
        numberValueChecker(input[0]);
        numberValueChecker(input[1]);
      }
    } else if (input.length === 4) {
      const zeroSNumber = [];
      if (input[0] === 0) {
        zeroSNumber.push(0);
      }
      if (input[1] === 0) {
        zeroSNumber.push(0);
      }
      if (input[2] === 0) {
        zeroSNumber.push(0);
      }
      if (input[3] === 0) {
        zeroSNumber.push(0);
      }

      if (zeroSNumber.length < 3) {
        if (input[0] != 0) {
          numberValueChecker(input[0]);
        }
        if (input[1] != 0) {
          numberValueChecker(input[1]);
        }
        if (input[2] != 0) {
          numberValueChecker(input[2]);
        }
        if (input[3] != 0) {
          numberValueChecker(input[3]);
        }
      }
    }
  }

  numberValueChecker(a);
  numberValueChecker(b);
  numberValueChecker(c);
  numberValueChecker(RoundedABC1);
  numberValueChecker(roundedAB1);
  numberValueChecker(RoundedAC1);
  numberValueChecker(RoundedCB1);

  secondaryNumbers(date1);
  secondaryNumbers(month1);
  secondaryNumbers(year1);

  const numberOf1sLength = numberOf1s.length;
  const numberOf2sLength = numberOf2s.length;
  const numberOf3sLength = numberOf3s.length;
  const numberOf4sLength = numberOf4s.length;
  const numberOf5sLength = numberOf5s.length;
  const numberOf6sLength = numberOf6s.length;
  const numberOf7sLength = numberOf7s.length;
  const numberOf8sLength = numberOf8s.length;
  const numberOf9sLength = numberOf9s.length;

  function GraphicsLog(arrayName, arrayLength) {
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

    if (arrayName === `numberOf1s`) {
      if (arrayLength === 1) {
        graphic1.src = `../images/1_1.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_1);
      } else if (arrayLength === 2) {
        graphic1.src = `../images/1_2.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_2);
      } else if (arrayLength === 3) {
        graphic1.src = `../images/1_3.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_3);
      } else if (arrayLength === 4) {
        graphic1.src = `../images/1_4.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_4);
      } else if (arrayLength === 5) {
        graphic1.src = `../images/1_5.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_5);
      } else if (arrayLength === 6) {
        graphic1.src = `../images/1_6.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_6);
      } else if (arrayLength === 7) {
        graphic1.src = `../images/1_7.png`;
        loggedNumbers.push(1);
        loggedNumbers.push(1_7);
      }
    } else if (arrayName === `numberOf2s`) {
      if (arrayLength === 1) {
        graphic2.src = `../images/2_1.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_1);
      } else if (arrayLength === 2) {
        graphic2.src = `../../images/2_2.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_2);
      } else if (arrayLength === 3) {
        graphic2.src = `../images/2_3.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_3);
      } else if (arrayLength === 4) {
        graphic2.src = `../images/2_4.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_4);
      } else if (arrayLength === 5) {
        graphic2.src = `../images/2_5.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_5);
      } else if (arrayLength === 6) {
        graphic2.src = `../images/2_6.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_6);
      } else if (arrayLength === 7) {
        graphic2.src = `../images/2_7.png`;
        loggedNumbers.push(2);
        loggedNumbers.push(2_7);
      }
    } else if (arrayName === `numberOf3s`) {
      if (arrayLength === 1) {
        graphic3.src = `../images/3_1.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_1);
      } else if (arrayLength === 2) {
        graphic3.src = `../images/3_2.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_2);
      } else if (arrayLength === 3) {
        graphic3.src = `../images/3_3.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_3);
      } else if (arrayLength === 4) {
        graphic3.src = `../images/3_4.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_4);
      } else if (arrayLength === 5) {
        graphic3.src = `../images/3_5.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_5);
      } else if (arrayLength === 6) {
        graphic3.src = `../images/3_6.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_6);
      } else if (arrayLength === 7) {
        graphic3.src = `../images/3_7.png`;
        loggedNumbers.push(3);
        loggedNumbers.push(3_7);
      }
    } else if (arrayName === `numberOf4s`) {
      if (arrayLength === 1) {
        graphic4.src = `../images/4_1.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_1);
      } else if (arrayLength === 2) {
        graphic4.src = `../images/4_2.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_2);
      } else if (arrayLength === 3) {
        graphic4.src = `../images/4_3.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_3);
      } else if (arrayLength === 4) {
        graphic4.src = `../images/4_4.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_4);
      } else if (arrayLength === 5) {
        graphic4.src = `../images/4_5.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_5);
      } else if (arrayLength === 6) {
        graphic4.src = `../images/4_6.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_6);
      } else if (arrayLength === 7) {
        graphic4.src = `../images/4_7.png`;
        loggedNumbers.push(4);
        loggedNumbers.push(4_7);
      }
    } else if (arrayName === `numberOf5s`) {
      if (arrayLength === 1) {
        graphic5.src = `../images/5_1.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_1);
      } else if (arrayLength === 2) {
        graphic5.src = `../images/5_2.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_2);
      } else if (arrayLength === 3) {
        graphic5.src = `../images/5_3.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_3);
      } else if (arrayLength === 4) {
        graphic5.src = `../images/5_4.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_4);
      } else if (arrayLength === 5) {
        graphic5.src = `../images/5_5.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_5);
      } else if (arrayLength === 6) {
        graphic5.src = `../images/5_6.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_6);
      } else if (arrayLength === 7) {
        graphic5.src = `../images/5_7.png`;
        loggedNumbers.push(5);
        loggedNumbers.push(5_7);
      }
    } else if (arrayName === `numberOf6s`) {
      if (arrayLength === 1) {
        graphic6.src = `../images/6_1.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_1);
      } else if (arrayLength === 2) {
        graphic6.src = `../images/6_2.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_2);
      } else if (arrayLength === 3) {
        graphic6.src = `../images/6_3.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_3);
      } else if (arrayLength === 4) {
        graphic6.src = `../images/6_4.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_4);
      } else if (arrayLength === 5) {
        graphic6.src = `../images/6_5.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_5);
      } else if (arrayLength === 6) {
        graphic6.src = `../images/6_6.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_6);
      } else if (arrayLength === 7) {
        graphic6.src = `../images/6_7.png`;
        loggedNumbers.push(6);
        loggedNumbers.push(6_7);
      }
    } else if (arrayName === `numberOf7s`) {
      if (arrayLength === 1) {
        graphic7.src = `../images/7_1.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_1);
      } else if (arrayLength === 2) {
        graphic7.src = `../images/7_2.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_2);
      } else if (arrayLength === 3) {
        graphic7.src = `../images/7_3.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_3);
      } else if (arrayLength === 4) {
        graphic7.src = `../images/7_4.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_4);
      } else if (arrayLength === 5) {
        graphic7.src = `../images/7_5.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_5);
      } else if (arrayLength === 6) {
        graphic7.src = `../images/7_6.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_6);
      } else if (arrayLength === 7) {
        graphic7.src = `../images/7_7.png`;
        loggedNumbers.push(7);
        loggedNumbers.push(7_7);
      }
    } else if (arrayName === `numberOf8s`) {
      if (arrayLength === 1) {
        graphic8.src = `../images/8_1.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_1);
      } else if (arrayLength === 2) {
        graphic8.src = `../images/8_2.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_2);
      } else if (arrayLength === 3) {
        graphic8.src = `../images/8_3.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_3);
      } else if (arrayLength === 4) {
        graphic8.src = `../images/8_4.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_4);
      } else if (arrayLength === 5) {
        graphic8.src = `../images/8_5.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_5);
      } else if (arrayLength === 6) {
        graphic8.src = `../images/8_6.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_6);
      } else if (arrayLength === 7) {
        graphic8.src = `../images/8_7.png`;
        loggedNumbers.push(8);
        loggedNumbers.push(8_7);
      }
    } else if (arrayName === `numberOf9s`) {
      if (arrayLength === 1) {
        graphic9.src = `../images/9_1.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_1);
      } else if (arrayLength === 2) {
        graphic9.src = `../images/9_2.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_2);
      } else if (arrayLength === 3) {
        graphic9.src = `../images/9_3.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_3);
      } else if (arrayLength === 4) {
        graphic9.src = `../images/9_4.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_4);
      } else if (arrayLength === 5) {
        graphic9.src = `../images/9_5.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_5);
      } else if (arrayLength === 6) {
        graphic9.src = `../images/9_6.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_6);
      } else if (arrayLength === 7) {
        graphic9.src = `../images/9_7.png`;
        loggedNumbers.push(9);
        loggedNumbers.push(9_7);
      }
    }

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
  }

  GraphicsLog(`numberOf1s`, numberOf1sLength);
  GraphicsLog(`numberOf2s`, numberOf2sLength);
  GraphicsLog(`numberOf3s`, numberOf3sLength);
  GraphicsLog(`numberOf4s`, numberOf4sLength);
  GraphicsLog(`numberOf5s`, numberOf5sLength);
  GraphicsLog(`numberOf6s`, numberOf6sLength);
  GraphicsLog(`numberOf7s`, numberOf7sLength);
  GraphicsLog(`numberOf8s`, numberOf8sLength);
  GraphicsLog(`numberOf9s`, numberOf9sLength);

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

  console.log(loggedNumbers);

  headNumber.innerHTML = RoundedABC1;

  number1s.innerHTML = `Number of 1s - ${numberOf1sLength}`;
  number2s.innerHTML = `Number of 2s - ${numberOf2sLength}`;
  number3s.innerHTML = `Number of 3s - ${numberOf3sLength}`;
  number4s.innerHTML = `Number of 4s - ${numberOf4sLength}`;
  number5s.innerHTML = `Number of 5s - ${numberOf5sLength}`;
  number6s.innerHTML = `Number of 6s - ${numberOf6sLength}`;
  number7s.innerHTML = `Number of 7s - ${numberOf7sLength}`;
  number8s.innerHTML = `Number of 8s - ${numberOf8sLength}`;
  number9s.innerHTML = `Number of 9s - ${numberOf9sLength}`;
};

clearButton.onclick = function () {
  number1s.innerHTML = `No data`;
  number2s.innerHTML = `No data`;
  number3s.innerHTML = `No data`;
  number4s.innerHTML = `No data`;
  number5s.innerHTML = `No data`;
  number6s.innerHTML = `No data`;
  number7s.innerHTML = `No data`;
  number8s.innerHTML = `No data`;
  number9s.innerHTML = `No data`;

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

  graphic1.alt = `No data`;
  graphic2.alt = `No data`;
  graphic3.alt = `No data`;
  graphic4.alt = `No data`;
  graphic5.alt = `No data`;
  graphic6.alt = `No data`;
  graphic7.alt = `No data`;
  graphic8.alt = `No data`;
  graphic9.alt = `No data`;

  graphic1.title = `No data`;
  graphic2.title = `No data`;
  graphic3.title = `No data`;
  graphic4.title = `No data`;
  graphic5.title = `No data`;
  graphic6.title = `No data`;
  graphic7.title = `No data`;
  graphic8.title = `No data`;
  graphic9.title = `No data`;

  graphic1.src = ``;
  graphic2.src = ``;
  graphic3.src = ``;
  graphic4.src = ``;
  graphic5.src = ``;
  graphic6.src = ``;
  graphic7.src = ``;
  graphic8.src = ``;
  graphic9.src = ``;

  document.getElementById(`dataResultDate1`).innerHTML = `No data`;
  document.getElementById(`dataResultMonth1`).innerHTML = `No data`;
  document.getElementById(`dataResultYear1`).innerHTML = `No data`;
  document.getElementById(`dataResultAll1`).innerHTML = `No data`;
  document.getElementById(`dataResultDate1_Month1`).innerHTML = `No data`;
  document.getElementById(`dataResultDate1_Year1`).innerHTML = `No data`;
  document.getElementById(`dataResultMonth1_Year1`).innerHTML = `No data`;

  headNumber.innerHTML = `No data`;

  numberOf1s = [];
  numberOf2s = [];
  numberOf3s = [];
  numberOf4s = [];
  numberOf5s = [];
  numberOf6s = [];
  numberOf7s = [];
  numberOf8s = [];
  numberOf9s = [];

  loggedNumbers = [];
};

sendButton.onclick = function () {
  const nextLength = nextNumberToFill.length;

  if (nextLength === 0) {
    graphic1_First.alt = ``;
    graphic2_First.alt = ``;
    graphic3_First.alt = ``;
    graphic4_First.alt = ``;
    graphic5_First.alt = ``;
    graphic6_First.alt = ``;
    graphic7_First.alt = ``;
    graphic8_First.alt = ``;
    graphic9_First.alt = ``;

    graphic1_First.title = ``;
    graphic2_First.title = ``;
    graphic3_First.title = ``;
    graphic4_First.title = ``;
    graphic5_First.title = ``;
    graphic6_First.title = ``;
    graphic7_First.title = ``;
    graphic8_First.title = ``;
    graphic9_First.title = ``;

    if (loggedNumbers.includes(1_1)) {
      graphic1_First.src = `../images/1_1.png`;
    } else if (loggedNumbers.includes(1_2)) {
      graphic1_First.src = `../images/1_2.png`;
    } else if (loggedNumbers.includes(1_3)) {
      graphic1_First.src = `../images/1_3.png`;
    } else if (loggedNumbers.includes(1_4)) {
      graphic1_First.src = `../images/1_4.png`;
    } else if (loggedNumbers.includes(1_5)) {
      graphic1_First.src = `../images/1_5.png`;
    } else if (loggedNumbers.includes(1_6)) {
      graphic1_First.src = `../images/1_6.png`;
    } else if (loggedNumbers.includes(1_7)) {
      graphic1_First.src = `../images/1_7.png`;
    }
    if (loggedNumbers.includes(1)) {
      loggedNUMS1.push(1);
    }

    if (loggedNumbers.includes(2_1)) {
      graphic2_First.src = `../images/2_1.png`;
    } else if (loggedNumbers.includes(2_2)) {
      graphic2_First.src = `../images/2_2.png`;
    } else if (loggedNumbers.includes(2_3)) {
      graphic2_First.src = `../images/2_3.png`;
    } else if (loggedNumbers.includes(2_4)) {
      graphic2_First.src = `../images/2_4.png`;
    } else if (loggedNumbers.includes(2_5)) {
      graphic2_First.src = `../images/2_5.png`;
    } else if (loggedNumbers.includes(2_6)) {
      graphic2_First.src = `../images/2_6.png`;
    } else if (loggedNumbers.includes(2_7)) {
      graphic2_First.src = `../images/2_7.png`;
    }
    if (loggedNumbers.includes(2)) {
      loggedNUMS1.push(2);
    }

    if (loggedNumbers.includes(3_1)) {
      graphic3_First.src = `../images/3_1.png`;
    } else if (loggedNumbers.includes(3_2)) {
      graphic3_First.src = `../images/3_2.png`;
    } else if (loggedNumbers.includes(3_3)) {
      graphic3_First.src = `../images/3_3.png`;
    } else if (loggedNumbers.includes(3_4)) {
      graphic3_First.src = `../images/3_4.png`;
    } else if (loggedNumbers.includes(3_5)) {
      graphic3_First.src = `../images/3_5.png`;
    } else if (loggedNumbers.includes(3_6)) {
      graphic3_First.src = `../images/3_6.png`;
    } else if (loggedNumbers.includes(3_7)) {
      graphic3_First.src = `../images/3_7.png`;
    }
    if (loggedNumbers.includes(3)) {
      loggedNUMS1.push(3);
    }

    if (loggedNumbers.includes(4_1)) {
      graphic4_First.src = `../images/4_1.png`;
    } else if (loggedNumbers.includes(4_2)) {
      graphic4_First.src = `../images/4_2.png`;
    } else if (loggedNumbers.includes(4_3)) {
      graphic4_First.src = `../images/4_3.png`;
    } else if (loggedNumbers.includes(4_4)) {
      graphic4_First.src = `../images/4_4.png`;
    } else if (loggedNumbers.includes(4_5)) {
      graphic4_First.src = `../images/4_5.png`;
    } else if (loggedNumbers.includes(4_6)) {
      graphic4_First.src = `../images/4_6.png`;
    } else if (loggedNumbers.includes(4_7)) {
      graphic4_First.src = `../images/4_7.png`;
    }
    if (loggedNumbers.includes(4)) {
      loggedNUMS1.push(4);
    }

    if (loggedNumbers.includes(5_1)) {
      graphic5_First.src = `../images/5_1.png`;
    } else if (loggedNumbers.includes(5_2)) {
      graphic5_First.src = `../images/5_2.png`;
    } else if (loggedNumbers.includes(5_3)) {
      graphic5_First.src = `../images/5_3.png`;
    } else if (loggedNumbers.includes(5_4)) {
      graphic5_First.src = `../images/5_4.png`;
    } else if (loggedNumbers.includes(5_5)) {
      graphic5_First.src = `../images/5_5.png`;
    } else if (loggedNumbers.includes(5_6)) {
      graphic5_First.src = `../images/5_6.png`;
    } else if (loggedNumbers.includes(5_7)) {
      graphic5_First.src = `../images/5_7.png`;
    }
    if (loggedNumbers.includes(5)) {
      loggedNUMS1.push(5);
    }

    if (loggedNumbers.includes(6_1)) {
      graphic6_First.src = `../images/6_1.png`;
    } else if (loggedNumbers.includes(6_2)) {
      graphic6_First.src = `../images/6_2.png`;
    } else if (loggedNumbers.includes(6_3)) {
      graphic6_First.src = `../images/6_3.png`;
    } else if (loggedNumbers.includes(6_4)) {
      graphic6_First.src = `../images/6_4.png`;
    } else if (loggedNumbers.includes(6_5)) {
      graphic6_First.src = `../images/6_5.png`;
    } else if (loggedNumbers.includes(6_6)) {
      graphic6_First.src = `../images/6_6.png`;
    } else if (loggedNumbers.includes(6_7)) {
      graphic6_First.src = `../images/6_7.png`;
    }
    if (loggedNumbers.includes(6)) {
      loggedNUMS1.push(6);
    }

    if (loggedNumbers.includes(7_1)) {
      graphic7_First.src = `../images/7_1.png`;
    } else if (loggedNumbers.includes(7_2)) {
      graphic7_First.src = `../images/7_2.png`;
    } else if (loggedNumbers.includes(7_3)) {
      graphic7_First.src = `../images/7_3.png`;
    } else if (loggedNumbers.includes(7_4)) {
      graphic7_First.src = `../images/7_4.png`;
    } else if (loggedNumbers.includes(7_5)) {
      graphic7_First.src = `../images/7_5.png`;
    } else if (loggedNumbers.includes(7_6)) {
      graphic7_First.src = `../images/7_6.png`;
    } else if (loggedNumbers.includes(7_7)) {
      graphic7_First.src = `../images/7_7.png`;
    }
    if (loggedNumbers.includes(7)) {
      loggedNUMS1.push(7);
    }

    if (loggedNumbers.includes(8_1)) {
      graphic8_First.src = `../images/8_1.png`;
    } else if (loggedNumbers.includes(8_2)) {
      graphic8_First.src = `../images/8_2.png`;
    } else if (loggedNumbers.includes(8_3)) {
      graphic8_First.src = `../images/8_3.png`;
    } else if (loggedNumbers.includes(8_4)) {
      graphic8_First.src = `../images/8_4.png`;
    } else if (loggedNumbers.includes(8_5)) {
      graphic8_First.src = `../images/8_5.png`;
    } else if (loggedNumbers.includes(8_6)) {
      graphic8_First.src = `../images/8_6.png`;
    } else if (loggedNumbers.includes(8_7)) {
      graphic8_First.src = `../images/8_7.png`;
    }
    if (loggedNumbers.includes(8)) {
      loggedNUMS1.push(8);
    }

    if (loggedNumbers.includes(9_1)) {
      graphic9_First.src = `../images/9_1.png`;
    } else if (loggedNumbers.includes(9_2)) {
      graphic9_First.src = `../images/9_2.png`;
    } else if (loggedNumbers.includes(9_3)) {
      graphic9_First.src = `../images/9_3.png`;
    } else if (loggedNumbers.includes(9_4)) {
      graphic9_First.src = `../images/9_4.png`;
    } else if (loggedNumbers.includes(9_5)) {
      graphic9_First.src = `../images/9_5.png`;
    } else if (loggedNumbers.includes(9_6)) {
      graphic9_First.src = `../images/9_6.png`;
    } else if (loggedNumbers.includes(9_7)) {
      graphic9_First.src = `../images/9_7.png`;
    }
    if (loggedNumbers.includes(9)) {
      loggedNUMS1.push(9);
    }

    line1_First.className = `disabled`;
    line2_First.className = `disabled`;
    line3_First.className = `disabled`;
    line4_First.className = `disabled`;
    line5_First.className = `disabled`;
    line6_First.className = `disabled`;
    line7_First.className = `disabled`;
    line8_First.className = `disabled`;
    line9_First.className = `disabled`;
    line10_First.className = `disabled`;
    line11_First.className = `disabled`;
    line12_First.className = `disabled`;
    line13_First.className = `disabled`;
    line14_First.className = `disabled`;
    line15_First.className = `disabled`;
    line16_First.className = `disabled`;

    if (loggedNumbers.includes(1) && loggedNumbers.includes(2)) {
      line3_First.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(4)) {
      line1_First.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(5)) {
      line4_First.className = `matcher3_left_top_Small matcher3_left_top`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(5)) {
      line8_First.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(3)) {
      line10_First.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(5)) {
      line11_First.className = `matcher3_left_bottom_Small matcher3_left_bottom`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(6)) {
      line15_First.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(7)) {
      line2_First.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(5)) {
      line5_First.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(6)) {
      line12_First.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(8)) {
      line9_First.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(6) && loggedNumbers.includes(9)) {
      line16_First.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(8)) {
      line7_First.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(5)) {
      line6_First.className = `matcher3_right_top_Small matcher3_right_top`;
    }
    if (loggedNumbers.includes(8) && loggedNumbers.includes(9)) {
      line14_First.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(9) && loggedNumbers.includes(5)) {
      line13_First.className = `matcher3_right_bottom_Small matcher3_right_bottom`;
    }

    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(3)
    ) {
      loggedKeyNUMS1.push(123);
    }
    if (
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(6)
    ) {
      loggedKeyNUMS1.push(456);
    }
    if (
      loggedNumbers.includes(7) &&
      loggedNumbers.includes(8) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS1.push(789);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS1.push(147);
    }
    if (
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(8)
    ) {
      loggedKeyNUMS1.push(258);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(6) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS1.push(369);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS1.push(159);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS1.push(357);
    }

    headNumberFirst.innerHTML = headNumber.innerHTML;

    dateFirst.innerHTML = `${dateInput}
        ${monthInput}
        ${yearInput}`;
    nextNumberToFill.push(1);
  } else if (nextLength === 1) {
    graphic1_Second.alt = ``;
    graphic2_Second.alt = ``;
    graphic3_Second.alt = ``;
    graphic4_Second.alt = ``;
    graphic5_Second.alt = ``;
    graphic6_Second.alt = ``;
    graphic7_Second.alt = ``;
    graphic8_Second.alt = ``;
    graphic9_Second.alt = ``;

    graphic1_Second.title = ``;
    graphic2_Second.title = ``;
    graphic3_Second.title = ``;
    graphic4_Second.title = ``;
    graphic5_Second.title = ``;
    graphic6_Second.title = ``;
    graphic7_Second.title = ``;
    graphic8_Second.title = ``;
    graphic9_Second.title = ``;

    if (loggedNumbers.includes(1_1)) {
      graphic1_Second.src = `../images/1_1.png`;
    } else if (loggedNumbers.includes(1_2)) {
      graphic1_Second.src = `../images/1_2.png`;
    } else if (loggedNumbers.includes(1_3)) {
      graphic1_Second.src = `../images/1_3.png`;
    } else if (loggedNumbers.includes(1_4)) {
      graphic1_Second.src = `../images/1_4.png`;
    } else if (loggedNumbers.includes(1_5)) {
      graphic1_Second.src = `../images/1_5.png`;
    } else if (loggedNumbers.includes(1_6)) {
      graphic1_Second.src = `../images/1_6.png`;
    } else if (loggedNumbers.includes(1_7)) {
      graphic1_Second.src = `../images/1_7.png`;
    }
    if (loggedNumbers.includes(1)) {
      loggedNUMS2.push(1);
    }

    if (loggedNumbers.includes(2_1)) {
      graphic2_Second.src = `../images/2_1.png`;
    } else if (loggedNumbers.includes(2_2)) {
      graphic2_Second.src = `../images/2_2.png`;
    } else if (loggedNumbers.includes(2_3)) {
      graphic2_Second.src = `../images/2_3.png`;
    } else if (loggedNumbers.includes(2_4)) {
      graphic2_Second.src = `../images/2_4.png`;
    } else if (loggedNumbers.includes(2_5)) {
      graphic2_Second.src = `../images/2_5.png`;
    } else if (loggedNumbers.includes(2_6)) {
      graphic2_Second.src = `../images/2_6.png`;
    } else if (loggedNumbers.includes(2_7)) {
      graphic2_Second.src = `../images/2_7.png`;
    }
    if (loggedNumbers.includes(2)) {
      loggedNUMS2.push(2);
    }

    if (loggedNumbers.includes(3_1)) {
      graphic3_Second.src = `../images/3_1.png`;
    } else if (loggedNumbers.includes(3_2)) {
      graphic3_Second.src = `../images/3_2.png`;
    } else if (loggedNumbers.includes(3_3)) {
      graphic3_Second.src = `../images/3_3.png`;
    } else if (loggedNumbers.includes(3_4)) {
      graphic3_Second.src = `../images/3_4.png`;
    } else if (loggedNumbers.includes(3_5)) {
      graphic3_Second.src = `../images/3_5.png`;
    } else if (loggedNumbers.includes(3_6)) {
      graphic3_Second.src = `../images/3_6.png`;
    } else if (loggedNumbers.includes(3_7)) {
      graphic3_Second.src = `../images/3_7.png`;
    }
    if (loggedNumbers.includes(3)) {
      loggedNUMS2.push(3);
    }

    if (loggedNumbers.includes(4_1)) {
      graphic4_Second.src = `../images/4_1.png`;
    } else if (loggedNumbers.includes(4_2)) {
      graphic4_Second.src = `../images/4_2.png`;
    } else if (loggedNumbers.includes(4_3)) {
      graphic4_Second.src = `../images/4_3.png`;
    } else if (loggedNumbers.includes(4_4)) {
      graphic4_Second.src = `../images/4_4.png`;
    } else if (loggedNumbers.includes(4_5)) {
      graphic4_Second.src = `../images/4_5.png`;
    } else if (loggedNumbers.includes(4_6)) {
      graphic4_Second.src = `../images/4_6.png`;
    } else if (loggedNumbers.includes(4_7)) {
      graphic4_Second.src = `../images/4_7.png`;
    }
    if (loggedNumbers.includes(4)) {
      loggedNUMS2.push(4);
    }

    if (loggedNumbers.includes(5_1)) {
      graphic5_Second.src = `../images/5_1.png`;
    } else if (loggedNumbers.includes(5_2)) {
      graphic5_Second.src = `../images/5_2.png`;
    } else if (loggedNumbers.includes(5_3)) {
      graphic5_Second.src = `../images/5_3.png`;
    } else if (loggedNumbers.includes(5_4)) {
      graphic5_Second.src = `../images/5_4.png`;
    } else if (loggedNumbers.includes(5_5)) {
      graphic5_Second.src = `../images/5_5.png`;
    } else if (loggedNumbers.includes(5_6)) {
      graphic5_Second.src = `../images/5_6.png`;
    } else if (loggedNumbers.includes(5_7)) {
      graphic5_Second.src = `../images/5_7.png`;
    }
    if (loggedNumbers.includes(5)) {
      loggedNUMS2.push(5);
    }

    if (loggedNumbers.includes(6_1)) {
      graphic6_Second.src = `../images/6_1.png`;
    } else if (loggedNumbers.includes(6_2)) {
      graphic6_Second.src = `../images/6_2.png`;
    } else if (loggedNumbers.includes(6_3)) {
      graphic6_Second.src = `../images/6_3.png`;
    } else if (loggedNumbers.includes(6_4)) {
      graphic6_Second.src = `../images/6_4.png`;
    } else if (loggedNumbers.includes(6_5)) {
      graphic6_Second.src = `../images/6_5.png`;
    } else if (loggedNumbers.includes(6_6)) {
      graphic6_Second.src = `../images/6_6.png`;
    } else if (loggedNumbers.includes(6_7)) {
      graphic6_Second.src = `../images/6_7.png`;
    }
    if (loggedNumbers.includes(6)) {
      loggedNUMS2.push(6);
    }

    if (loggedNumbers.includes(7_1)) {
      graphic7_Second.src = `../images/7_1.png`;
    } else if (loggedNumbers.includes(7_2)) {
      graphic7_Second.src = `../images/7_2.png`;
    } else if (loggedNumbers.includes(7_3)) {
      graphic7_Second.src = `../images/7_3.png`;
    } else if (loggedNumbers.includes(7_4)) {
      graphic7_Second.src = `../images/7_4.png`;
    } else if (loggedNumbers.includes(7_5)) {
      graphic7_Second.src = `../images/7_5.png`;
    } else if (loggedNumbers.includes(7_6)) {
      graphic7_Second.src = `../images/7_6.png`;
    } else if (loggedNumbers.includes(7_7)) {
      graphic7_Second.src = `../images/7_7.png`;
    }
    if (loggedNumbers.includes(7)) {
      loggedNUMS2.push(7);
    }

    if (loggedNumbers.includes(8_1)) {
      graphic8_Second.src = `../images/8_1.png`;
    } else if (loggedNumbers.includes(8_2)) {
      graphic8_Second.src = `../images/8_2.png`;
    } else if (loggedNumbers.includes(8_3)) {
      graphic8_Second.src = `../images/8_3.png`;
    } else if (loggedNumbers.includes(8_4)) {
      graphic8_Second.src = `../images/8_4.png`;
    } else if (loggedNumbers.includes(8_5)) {
      graphic8_Second.src = `../images/8_5.png`;
    } else if (loggedNumbers.includes(8_6)) {
      graphic8_Second.src = `../images/8_6.png`;
    } else if (loggedNumbers.includes(8_7)) {
      graphic8_Second.src = `../images/8_7.png`;
    }
    if (loggedNumbers.includes(8)) {
      loggedNUMS2.push(8);
    }

    if (loggedNumbers.includes(9_1)) {
      graphic9_Second.src = `../images/9_1.png`;
    } else if (loggedNumbers.includes(9_2)) {
      graphic9_Second.src = `../images/9_2.png`;
    } else if (loggedNumbers.includes(9_3)) {
      graphic9_Second.src = `../images/9_3.png`;
    } else if (loggedNumbers.includes(9_4)) {
      graphic9_Second.src = `../images/9_4.png`;
    } else if (loggedNumbers.includes(9_5)) {
      graphic9_Second.src = `../images/9_5.png`;
    } else if (loggedNumbers.includes(9_6)) {
      graphic9_Second.src = `../images/9_6.png`;
    } else if (loggedNumbers.includes(9_7)) {
      graphic9_Second.src = `../images/9_7.png`;
    }
    if (loggedNumbers.includes(9)) {
      loggedNUMS2.push(9);
    }

    line1_Second.className = `disabled`;
    line2_Second.className = `disabled`;
    line3_Second.className = `disabled`;
    line4_Second.className = `disabled`;
    line5_Second.className = `disabled`;
    line6_Second.className = `disabled`;
    line7_Second.className = `disabled`;
    line8_Second.className = `disabled`;
    line9_Second.className = `disabled`;
    line10_Second.className = `disabled`;
    line11_Second.className = `disabled`;
    line12_Second.className = `disabled`;
    line13_Second.className = `disabled`;
    line14_Second.className = `disabled`;
    line15_Second.className = `disabled`;
    line16_Second.className = `disabled`;

    if (loggedNumbers.includes(1) && loggedNumbers.includes(2)) {
      line3_Second.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(4)) {
      line1_Second.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(5)) {
      line4_Second.className = `matcher3_left_top_Small matcher3_left_top`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(5)) {
      line8_Second.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(3)) {
      line10_Second.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(5)) {
      line11_Second.className = `matcher3_left_bottom_Small matcher3_left_bottom`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(6)) {
      line15_Second.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(7)) {
      line2_Second.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(5)) {
      line5_Second.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(6)) {
      line12_Second.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(8)) {
      line9_Second.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(6) && loggedNumbers.includes(9)) {
      line16_Second.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(8)) {
      line7_Second.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(5)) {
      line6_Second.className = `matcher3_right_top_Small matcher3_right_top`;
    }
    if (loggedNumbers.includes(8) && loggedNumbers.includes(9)) {
      line14_Second.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(9) && loggedNumbers.includes(5)) {
      line13_Second.className = `matcher3_right_bottom_Small matcher3_right_bottom`;
    }

    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(3)
    ) {
      loggedKeyNUMS2.push(123);
    }
    if (
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(6)
    ) {
      loggedKeyNUMS2.push(456);
    }
    if (
      loggedNumbers.includes(7) &&
      loggedNumbers.includes(8) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS2.push(789);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS2.push(147);
    }
    if (
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(8)
    ) {
      loggedKeyNUMS2.push(258);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(6) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS2.push(369);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS2.push(159);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS2.push(357);
    }

    headNumberSecond.innerHTML = headNumber.innerHTML;

    dateSecond.innerHTML = `${dateInput}
        ${monthInput}
        ${yearInput}`;
    nextNumberToFill.push(2);
  } else if (nextLength === 2) {
    graphic1_Third.alt = ``;
    graphic2_Third.alt = ``;
    graphic3_Third.alt = ``;
    graphic4_Third.alt = ``;
    graphic5_Third.alt = ``;
    graphic6_Third.alt = ``;
    graphic7_Third.alt = ``;
    graphic8_Third.alt = ``;
    graphic9_Third.alt = ``;

    graphic1_Third.title = ``;
    graphic2_Third.title = ``;
    graphic3_Third.title = ``;
    graphic4_Third.title = ``;
    graphic5_Third.title = ``;
    graphic6_Third.title = ``;
    graphic7_Third.title = ``;
    graphic8_Third.title = ``;
    graphic9_First.title = ``;

    if (loggedNumbers.includes(1_1)) {
      graphic1_Third.src = `../images/1_1.png`;
    } else if (loggedNumbers.includes(1_2)) {
      graphic1_Third.src = `../images/1_2.png`;
    } else if (loggedNumbers.includes(1_3)) {
      graphic1_Third.src = `../images/1_3.png`;
    } else if (loggedNumbers.includes(1_4)) {
      graphic1_Third.src = `../images/1_4.png`;
    } else if (loggedNumbers.includes(1_5)) {
      graphic1_Third.src = `../images/1_5.png`;
    } else if (loggedNumbers.includes(1_6)) {
      graphic1_Third.src = `../images/1_6.png`;
    } else if (loggedNumbers.includes(1_7)) {
      graphic1_Third.src = `../images/1_7.png`;
    }
    if (loggedNumbers.includes(1)) {
      loggedNUMS3.push(1);
    }

    if (loggedNumbers.includes(2_1)) {
      graphic2_Third.src = `../images/2_1.png`;
    } else if (loggedNumbers.includes(2_2)) {
      graphic2_Third.src = `../images/2_2.png`;
    } else if (loggedNumbers.includes(2_3)) {
      graphic2_Third.src = `../images/2_3.png`;
    } else if (loggedNumbers.includes(2_4)) {
      graphic2_Third.src = `../images/2_4.png`;
    } else if (loggedNumbers.includes(2_5)) {
      graphic2_Third.src = `../images/2_5.png`;
    } else if (loggedNumbers.includes(2_6)) {
      graphic2_Third.src = `../images/2_6.png`;
    } else if (loggedNumbers.includes(2_7)) {
      graphic2_Third.src = `../images/2_7.png`;
    }
    if (loggedNumbers.includes(2)) {
      loggedNUMS3.push(2);
    }

    if (loggedNumbers.includes(3_1)) {
      graphic3_Third.src = `../images/3_1.png`;
    } else if (loggedNumbers.includes(3_2)) {
      graphic3_Third.src = `../images/3_2.png`;
    } else if (loggedNumbers.includes(3_3)) {
      graphic3_Third.src = `../images/3_3.png`;
    } else if (loggedNumbers.includes(3_4)) {
      graphic3_Third.src = `../images/3_4.png`;
    } else if (loggedNumbers.includes(3_5)) {
      graphic3_Third.src = `../images/3_5.png`;
    } else if (loggedNumbers.includes(3_6)) {
      graphic3_Third.src = `../images/3_6.png`;
    } else if (loggedNumbers.includes(3_7)) {
      graphic3_Third.src = `../images/3_7.png`;
    }
    if (loggedNumbers.includes(3)) {
      loggedNUMS3.push(3);
    }

    if (loggedNumbers.includes(4_1)) {
      graphic4_Third.src = `../images/4_1.png`;
    } else if (loggedNumbers.includes(4_2)) {
      graphic4_Third.src = `../images/4_2.png`;
    } else if (loggedNumbers.includes(4_3)) {
      graphic4_Third.src = `../images/4_3.png`;
    } else if (loggedNumbers.includes(4_4)) {
      graphic4_Third.src = `../images/4_4.png`;
    } else if (loggedNumbers.includes(4_5)) {
      graphic4_Third.src = `../images/4_5.png`;
    } else if (loggedNumbers.includes(4_6)) {
      graphic4_Third.src = `../images/4_6.png`;
    } else if (loggedNumbers.includes(4_7)) {
      graphic4_Third.src = `../images/4_7.png`;
    }
    if (loggedNumbers.includes(4)) {
      loggedNUMS3.push(4);
    }

    if (loggedNumbers.includes(5_1)) {
      graphic5_Third.src = `../images/5_1.png`;
    } else if (loggedNumbers.includes(5_2)) {
      graphic5_Third.src = `../images/5_2.png`;
    } else if (loggedNumbers.includes(5_3)) {
      graphic5_Third.src = `../images/5_3.png`;
    } else if (loggedNumbers.includes(5_4)) {
      graphic5_Third.src = `../images/5_4.png`;
    } else if (loggedNumbers.includes(5_5)) {
      graphic5_Third.src = `../images/5_5.png`;
    } else if (loggedNumbers.includes(5_6)) {
      graphic5_Third.src = `../images/5_6.png`;
    } else if (loggedNumbers.includes(5_7)) {
      graphic5_Third.src = `../images/5_7.png`;
    }
    if (loggedNumbers.includes(5)) {
      loggedNUMS3.push(5);
    }

    if (loggedNumbers.includes(6_1)) {
      graphic6_Third.src = `../images/6_1.png`;
    } else if (loggedNumbers.includes(6_2)) {
      graphic6_Third.src = `../images/6_2.png`;
    } else if (loggedNumbers.includes(6_3)) {
      graphic6_Third.src = `../images/6_3.png`;
    } else if (loggedNumbers.includes(6_4)) {
      graphic6_Third.src = `../images/6_4.png`;
    } else if (loggedNumbers.includes(6_5)) {
      graphic6_Third.src = `../images/6_5.png`;
    } else if (loggedNumbers.includes(6_6)) {
      graphic6_Third.src = `../images/6_6.png`;
    } else if (loggedNumbers.includes(6_7)) {
      graphic6_Third.src = `../images/6_7.png`;
    }
    if (loggedNumbers.includes(6)) {
      loggedNUMS3.push(6);
    }

    if (loggedNumbers.includes(7_1)) {
      graphic7_Third.src = `../images/7_1.png`;
    } else if (loggedNumbers.includes(7_2)) {
      graphic7_Third.src = `../images/7_2.png`;
    } else if (loggedNumbers.includes(7_3)) {
      graphic7_Third.src = `../images/7_3.png`;
    } else if (loggedNumbers.includes(7_4)) {
      graphic7_Third.src = `../images/7_4.png`;
    } else if (loggedNumbers.includes(7_5)) {
      graphic7_Third.src = `../images/7_5.png`;
    } else if (loggedNumbers.includes(7_6)) {
      graphic7_Third.src = `../images/7_6.png`;
    } else if (loggedNumbers.includes(7_7)) {
      graphic7_Third.src = `../images/7_7.png`;
    }
    if (loggedNumbers.includes(7)) {
      loggedNUMS3.push(7);
    }

    if (loggedNumbers.includes(8_1)) {
      graphic8_Third.src = `../images/8_1.png`;
    } else if (loggedNumbers.includes(8_2)) {
      graphic8_Third.src = `../images/8_2.png`;
    } else if (loggedNumbers.includes(8_3)) {
      graphic8_Third.src = `../images/8_3.png`;
    } else if (loggedNumbers.includes(8_4)) {
      graphic8_Third.src = `../images/8_4.png`;
    } else if (loggedNumbers.includes(8_5)) {
      graphic8_Third.src = `../images/8_5.png`;
    } else if (loggedNumbers.includes(8_6)) {
      graphic8_Third.src = `../images/8_6.png`;
    } else if (loggedNumbers.includes(8_7)) {
      graphic8_Third.src = `../images/8_7.png`;
    }
    if (loggedNumbers.includes(8)) {
      loggedNUMS3.push(8);
    }

    if (loggedNumbers.includes(9_1)) {
      graphic9_Third.src = `../images/9_1.png`;
    } else if (loggedNumbers.includes(9_2)) {
      graphic9_Third.src = `../images/9_2.png`;
    } else if (loggedNumbers.includes(9_3)) {
      graphic9_Third.src = `../images/9_3.png`;
    } else if (loggedNumbers.includes(9_4)) {
      graphic9_Third.src = `../images/9_4.png`;
    } else if (loggedNumbers.includes(9_5)) {
      graphic9_Third.src = `../images/9_5.png`;
    } else if (loggedNumbers.includes(9_6)) {
      graphic9_Third.src = `../images/9_6.png`;
    } else if (loggedNumbers.includes(9_7)) {
      graphic9_Third.src = `../images/9_7.png`;
    }
    if (loggedNumbers.includes(9)) {
      loggedNUMS3.push(9);
    }

    line1_Third.className = `disabled`;
    line2_Third.className = `disabled`;
    line3_Third.className = `disabled`;
    line4_Third.className = `disabled`;
    line5_Third.className = `disabled`;
    line6_Third.className = `disabled`;
    line7_Third.className = `disabled`;
    line8_Third.className = `disabled`;
    line9_Third.className = `disabled`;
    line10_Third.className = `disabled`;
    line11_Third.className = `disabled`;
    line12_Third.className = `disabled`;
    line13_Third.className = `disabled`;
    line14_Third.className = `disabled`;
    line15_Third.className = `disabled`;
    line16_Third.className = `disabled`;

    if (loggedNumbers.includes(1) && loggedNumbers.includes(2)) {
      line3_Third.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(4)) {
      line1_Third.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(5)) {
      line4_Third.className = `matcher3_left_top_Small matcher3_left_top`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(5)) {
      line8_Third.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(3)) {
      line10_Third.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(5)) {
      line11_Third.className = `matcher3_left_bottom_Small matcher3_left_bottom`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(6)) {
      line15_Third.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(7)) {
      line2_Third.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(5)) {
      line5_Third.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(6)) {
      line12_Third.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(8)) {
      line9_Third.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(6) && loggedNumbers.includes(9)) {
      line16_Third.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(8)) {
      line7_Third.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(5)) {
      line6_Third.className = `matcher3_right_top_Small matcher3_right_top`;
    }
    if (loggedNumbers.includes(8) && loggedNumbers.includes(9)) {
      line14_Third.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(9) && loggedNumbers.includes(5)) {
      line13_Third.className = `matcher3_right_bottom_Small matcher3_right_bottom`;
    }

    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(3)
    ) {
      loggedKeyNUMS3.push(123);
    }
    if (
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(6)
    ) {
      loggedKeyNUMS3.push(456);
    }
    if (
      loggedNumbers.includes(7) &&
      loggedNumbers.includes(8) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS3.push(789);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS3.push(147);
    }
    if (
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(8)
    ) {
      loggedKeyNUMS3.push(258);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(6) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS3.push(369);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS3.push(159);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS3.push(357);
    }

    headNumberThird.innerHTML = headNumber.innerHTML;

    dateThird.innerHTML = `${dateInput}
        ${monthInput}
        ${yearInput}`;
    nextNumberToFill.push(3);
  } else if (nextLength === 3) {
    graphic1_Fourth.alt = ``;
    graphic2_Fourth.alt = ``;
    graphic3_Fourth.alt = ``;
    graphic4_Fourth.alt = ``;
    graphic5_Fourth.alt = ``;
    graphic6_Fourth.alt = ``;
    graphic7_Fourth.alt = ``;
    graphic8_Fourth.alt = ``;
    graphic9_Fourth.alt = ``;

    graphic1_Fourth.title = ``;
    graphic2_Fourth.title = ``;
    graphic3_Fourth.title = ``;
    graphic4_Fourth.title = ``;
    graphic5_Fourth.title = ``;
    graphic6_Fourth.title = ``;
    graphic7_Fourth.title = ``;
    graphic8_Fourth.title = ``;
    graphic9_Fourth.title = ``;

    if (loggedNumbers.includes(1_1)) {
      graphic1_Fourth.src = `../images/1_1.png`;
    } else if (loggedNumbers.includes(1_2)) {
      graphic1_Fourth.src = `../images/1_2.png`;
    } else if (loggedNumbers.includes(1_3)) {
      graphic1_Fourth.src = `../images/1_3.png`;
    } else if (loggedNumbers.includes(1_4)) {
      graphic1_Fourth.src = `../images/1_4.png`;
    } else if (loggedNumbers.includes(1_5)) {
      graphic1_Fourth.src = `../images/1_5.png`;
    } else if (loggedNumbers.includes(1_6)) {
      graphic1_Fourth.src = `../images/1_6.png`;
    } else if (loggedNumbers.includes(1_7)) {
      graphic1_Fourth.src = `../images/1_7.png`;
    }
    if (loggedNumbers.includes(1)) {
      loggedNUMS4.push(1);
    }

    if (loggedNumbers.includes(2_1)) {
      graphic2_Fourth.src = `../images/2_1.png`;
    } else if (loggedNumbers.includes(2_2)) {
      graphic2_Fourth.src = `../images/2_2.png`;
    } else if (loggedNumbers.includes(2_3)) {
      graphic2_Fourth.src = `../images/2_3.png`;
    } else if (loggedNumbers.includes(2_4)) {
      graphic2_Fourth.src = `../images/2_4.png`;
    } else if (loggedNumbers.includes(2_5)) {
      graphic2_Fourth.src = `../images/2_5.png`;
    } else if (loggedNumbers.includes(2_6)) {
      graphic2_Fourth.src = `../images/2_6.png`;
    } else if (loggedNumbers.includes(2_7)) {
      graphic2_Fourth.src = `../images/2_7.png`;
    }
    if (loggedNumbers.includes(2)) {
      loggedNUMS4.push(2);
    }

    if (loggedNumbers.includes(3_1)) {
      graphic3_Fourth.src = `../images/3_1.png`;
    } else if (loggedNumbers.includes(3_2)) {
      graphic3_Fourth.src = `../images/3_2.png`;
    } else if (loggedNumbers.includes(3_3)) {
      graphic3_Fourth.src = `../images/3_3.png`;
    } else if (loggedNumbers.includes(3_4)) {
      graphic3_Fourth.src = `../images/3_4.png`;
    } else if (loggedNumbers.includes(3_5)) {
      graphic3_Fourth.src = `../images/3_5.png`;
    } else if (loggedNumbers.includes(3_6)) {
      graphic3_Fourth.src = `../images/3_6.png`;
    } else if (loggedNumbers.includes(3_7)) {
      graphic3_Fourth.src = `../images/3_7.png`;
    }
    if (loggedNumbers.includes(3)) {
      loggedNUMS4.push(3);
    }

    if (loggedNumbers.includes(4_1)) {
      graphic4_Fourth.src = `../images/4_1.png`;
    } else if (loggedNumbers.includes(4_2)) {
      graphic4_Fourth.src = `../images/4_2.png`;
    } else if (loggedNumbers.includes(4_3)) {
      graphic4_Fourth.src = `../images/4_3.png`;
    } else if (loggedNumbers.includes(4_4)) {
      graphic4_Fourth.src = `../images/4_4.png`;
    } else if (loggedNumbers.includes(4_5)) {
      graphic4_Fourth.src = `../images/4_5.png`;
    } else if (loggedNumbers.includes(4_6)) {
      graphic4_Fourth.src = `../images/4_6.png`;
    } else if (loggedNumbers.includes(4_7)) {
      graphic4_Fourth.src = `../images/4_7.png`;
    }
    if (loggedNumbers.includes(4)) {
      loggedNUMS4.push(4);
    }

    if (loggedNumbers.includes(5_1)) {
      graphic5_Fourth.src = `../images/5_1.png`;
    } else if (loggedNumbers.includes(5_2)) {
      graphic5_Fourth.src = `../images/5_2.png`;
    } else if (loggedNumbers.includes(5_3)) {
      graphic5_Fourth.src = `../images/5_3.png`;
    } else if (loggedNumbers.includes(5_4)) {
      graphic5_Fourth.src = `../images/5_4.png`;
    } else if (loggedNumbers.includes(5_5)) {
      graphic5_Fourth.src = `../images/5_5.png`;
    } else if (loggedNumbers.includes(5_6)) {
      graphic5_Fourth.src = `../images/5_6.png`;
    } else if (loggedNumbers.includes(5_7)) {
      graphic5_Fourth.src = `../images/5_7.png`;
    }
    if (loggedNumbers.includes(5)) {
      loggedNUMS4.push(5);
    }

    if (loggedNumbers.includes(6_1)) {
      graphic6_Fourth.src = `../images/6_1.png`;
    } else if (loggedNumbers.includes(6_2)) {
      graphic6_Fourth.src = `../images/6_2.png`;
    } else if (loggedNumbers.includes(6_3)) {
      graphic6_Fourth.src = `../images/6_3.png`;
    } else if (loggedNumbers.includes(6_4)) {
      graphic6_Fourth.src = `../images/6_4.png`;
    } else if (loggedNumbers.includes(6_5)) {
      graphic6_Fourth.src = `../images/6_5.png`;
    } else if (loggedNumbers.includes(6_6)) {
      graphic6_Fourth.src = `../images/6_6.png`;
    } else if (loggedNumbers.includes(6_7)) {
      graphic6_Fourth.src = `../images/6_7.png`;
    }
    if (loggedNumbers.includes(6)) {
      loggedNUMS4.push(6);
    }

    if (loggedNumbers.includes(7_1)) {
      graphic7_Fourth.src = `../images/7_1.png`;
    } else if (loggedNumbers.includes(7_2)) {
      graphic7_Fourth.src = `../images/7_2.png`;
    } else if (loggedNumbers.includes(7_3)) {
      graphic7_Fourth.src = `../images/7_3.png`;
    } else if (loggedNumbers.includes(7_4)) {
      graphic7_Fourth.src = `../images/7_4.png`;
    } else if (loggedNumbers.includes(7_5)) {
      graphic7_Fourth.src = `../images/7_5.png`;
    } else if (loggedNumbers.includes(7_6)) {
      graphic7_Fourth.src = `../images/7_6.png`;
    } else if (loggedNumbers.includes(7_7)) {
      graphic7_Fourth.src = `../images/7_7.png`;
    }
    if (loggedNumbers.includes(7)) {
      loggedNUMS4.push(7);
    }

    if (loggedNumbers.includes(8_1)) {
      graphic8_Fourth.src = `../images/8_1.png`;
    } else if (loggedNumbers.includes(8_2)) {
      graphic8_Fourth.src = `../images/8_2.png`;
    } else if (loggedNumbers.includes(8_3)) {
      graphic8_Fourth.src = `../images/8_3.png`;
    } else if (loggedNumbers.includes(8_4)) {
      graphic8_Fourth.src = `../images/8_4.png`;
    } else if (loggedNumbers.includes(8_5)) {
      graphic8_Fourth.src = `../images/8_5.png`;
    } else if (loggedNumbers.includes(8_6)) {
      graphic8_Fourth.src = `../images/8_6.png`;
    } else if (loggedNumbers.includes(8_7)) {
      graphic8_Fourth.src = `../images/8_7.png`;
    }
    if (loggedNumbers.includes(8)) {
      loggedNUMS4.push(8);
    }

    if (loggedNumbers.includes(9_1)) {
      graphic9_Fourth.src = `../images/9_1.png`;
    } else if (loggedNumbers.includes(9_2)) {
      graphic9_Fourth.src = `../images/9_2.png`;
    } else if (loggedNumbers.includes(9_3)) {
      graphic9_Fourth.src = `../images/9_3.png`;
    } else if (loggedNumbers.includes(9_4)) {
      graphic9_Fourth.src = `../images/9_4.png`;
    } else if (loggedNumbers.includes(9_5)) {
      graphic9_Fourth.src = `../images/9_5.png`;
    } else if (loggedNumbers.includes(9_6)) {
      graphic9_Fourth.src = `../images/9_6.png`;
    } else if (loggedNumbers.includes(9_7)) {
      graphic9_Fourth.src = `../images/9_7.png`;
    }
    if (loggedNumbers.includes(9)) {
      loggedNUMS4.push(9);
    }

    line1_Fourth.className = `disabled`;
    line2_Fourth.className = `disabled`;
    line3_Fourth.className = `disabled`;
    line4_Fourth.className = `disabled`;
    line5_Fourth.className = `disabled`;
    line6_Fourth.className = `disabled`;
    line7_Fourth.className = `disabled`;
    line8_Fourth.className = `disabled`;
    line9_Fourth.className = `disabled`;
    line10_Fourth.className = `disabled`;
    line11_Fourth.className = `disabled`;
    line12_Fourth.className = `disabled`;
    line13_Fourth.className = `disabled`;
    line14_Fourth.className = `disabled`;
    line15_Fourth.className = `disabled`;
    line16_Fourth.className = `disabled`;

    if (loggedNumbers.includes(1) && loggedNumbers.includes(2)) {
      line3_Fourth.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(4)) {
      line1_Fourth.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(1) && loggedNumbers.includes(5)) {
      line4_Fourth.className = `matcher3_left_top_Small matcher3_left_top`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(5)) {
      line8_Fourth.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(2) && loggedNumbers.includes(3)) {
      line10_Fourth.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(5)) {
      line11_Fourth.className = `matcher3_left_bottom_Small matcher3_left_bottom`;
    }
    if (loggedNumbers.includes(3) && loggedNumbers.includes(6)) {
      line15_Fourth.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(7)) {
      line2_Fourth.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(4) && loggedNumbers.includes(5)) {
      line5_Fourth.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(6)) {
      line12_Fourth.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(5) && loggedNumbers.includes(8)) {
      line9_Fourth.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(6) && loggedNumbers.includes(9)) {
      line16_Fourth.className = `matcher1Small matcher1`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(8)) {
      line7_Fourth.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(7) && loggedNumbers.includes(5)) {
      line6_Fourth.className = `matcher3_right_top_Small matcher3_right_top`;
    }
    if (loggedNumbers.includes(8) && loggedNumbers.includes(9)) {
      line14_Fourth.className = `matcher2Small matcher2`;
    }
    if (loggedNumbers.includes(9) && loggedNumbers.includes(5)) {
      line13_Fourth.className = `matcher3_right_bottom_Small matcher3_right_bottom`;
    }

    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(3)
    ) {
      loggedKeyNUMS4.push(123);
    }
    if (
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(6)
    ) {
      loggedKeyNUMS4.push(456);
    }
    if (
      loggedNumbers.includes(7) &&
      loggedNumbers.includes(8) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS4.push(789);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(4) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS4.push(147);
    }
    if (
      loggedNumbers.includes(2) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(8)
    ) {
      loggedKeyNUMS4.push(258);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(6) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS4.push(369);
    }
    if (
      loggedNumbers.includes(1) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(9)
    ) {
      loggedKeyNUMS4.push(159);
    }
    if (
      loggedNumbers.includes(3) &&
      loggedNumbers.includes(5) &&
      loggedNumbers.includes(7)
    ) {
      loggedKeyNUMS4.push(357);
    }

    headNumberFourth.innerHTML = headNumber.innerHTML;

    dateFourth.innerHTML = `${dateInput}
        ${monthInput}
        ${yearInput}`;
    nextNumberToFill.push(4);
  } else if (nextLength >= 4) {
    alert(
      `You have already filled all the spots. Try again when you clear all the section 2 data!`
    );
  }
};

finalBTN.onclick = function () {
  // Fifth - BORN + YEAR

  line1_Fifth.className = ``;
  line2_Fifth.className = ``;
  line3_Fifth.className = ``;
  line4_Fifth.className = ``;
  line5_Fifth.className = ``;
  line6_Fifth.className = ``;
  line7_Fifth.className = ``;
  line8_Fifth.className = ``;
  line9_Fifth.className = ``;
  line10_Fifth.className = ``;
  line11_Fifth.className = ``;
  line12_Fifth.className = ``;
  line13_Fifth.className = ``;
  line14_Fifth.className = ``;
  line15_Fifth.className = ``;
  line16_Fifth.className = ``;

  graphic1_Fifth.alt = ``;
  graphic2_Fifth.alt = ``;
  graphic3_Fifth.alt = ``;
  graphic4_Fifth.alt = ``;
  graphic5_Fifth.alt = ``;
  graphic6_Fifth.alt = ``;
  graphic7_Fifth.alt = ``;
  graphic8_Fifth.alt = ``;
  graphic9_Fifth.alt = ``;

  graphic1_Fifth.title = ``;
  graphic2_Fifth.title = ``;
  graphic3_Fifth.title = ``;
  graphic4_Fifth.title = ``;
  graphic5_Fifth.title = ``;
  graphic6_Fifth.title = ``;
  graphic7_Fifth.title = ``;
  graphic8_Fifth.title = ``;
  graphic9_Fifth.title = ``;

  headNumberFifth.innerHTML =
    Number(headNumberFirst.innerHTML) + Number(headNumberSecond.innerHTML);

  if (Number(headNumberFifth.innerHTML) > 9) {
    headNumberFifth.innerHTML =
      Number(headNumberFirst.innerHTML) +
      Number(headNumberSecond.innerHTML) -
      9;
  }

  if (loggedKeyNUMS1.includes(123)) {
    graphic1_Fifth.src = `../images/1.png`;
    graphic2_Fifth.src = `../images/2.png`;
    graphic3_Fifth.src = `../images/3.png`;

    line3_Fifth.className = `matcher2`;
    line10_Fifth.className = `matcher2`;
  } else if (loggedKeyNUMS2.includes(123)) {
    graphic1_Fifth.src = `../images/1.png`;
    graphic2_Fifth.src = `../images/2.png`;
    graphic3_Fifth.src = `../images/3.png`;

    line3_Fifth.className = `matcher2`;
    line10_Fifth.className = `matcher2`;
  }

  if (loggedKeyNUMS1.includes(456)) {
    graphic4_Fifth.src = `../images/4.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic6_Fifth.src = `../images/6.png`;

    line5_Fifth.className = `matcher2`;
    line12_Fifth.className = `matcher2`;
  } else if (loggedKeyNUMS2.includes(456)) {
    graphic4_Fifth.src = `../images/4.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic6_Fifth.src = `../images/6.png`;

    line5_Fifth.className = `matcher2`;
    line12_Fifth.className = `matcher2`;
  }

  if (loggedKeyNUMS1.includes(789)) {
    graphic7_Fifth.src = `../images/7.png`;
    graphic8_Fifth.src = `../images/8.png`;
    graphic9_Fifth.src = `../images/9.png`;

    line7_Fifth.className = `matcher2`;
    line14_Fifth.className = `matcher2`;
  } else if (loggedKeyNUMS2.includes(789)) {
    graphic7_Fifth.src = `../images/7.png`;
    graphic8_Fifth.src = `../images/8.png`;
    graphic9_Fifth.src = `../images/9.png`;

    line7_Fifth.className = `matcher2`;
    line14_Fifth.className = `matcher2`;
  }

  if (loggedKeyNUMS1.includes(147)) {
    graphic1_Fifth.src = `../images/1.png`;
    graphic4_Fifth.src = `../images/4.png`;
    graphic7_Fifth.src = `../images/7.png`;

    line1_Fifth.className = `matcher1`;
    line2_Fifth.className = `matcher1`;
  } else if (loggedKeyNUMS2.includes(147)) {
    graphic1_Fifth.src = `../images/1.png`;
    graphic4_Fifth.src = `../images/4.png`;
    graphic7_Fifth.src = `../images/7.png`;

    line1_Fifth.className = `matcher1`;
    line2_Fifth.className = `matcher1`;
  }

  if (loggedKeyNUMS1.includes(258)) {
    graphic2_Fifth.src = `../images/2.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic8_Fifth.src = `../images/8.png`;

    line8_Fifth.className = `matcher1`;
    line9_Fifth.className = `matcher1`;
  } else if (loggedKeyNUMS2.includes(258)) {
    graphic2_Fifth.src = `../images/2.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic8_Fifth.src = `../images/8.png`;

    line8_Fifth.className = `matcher1`;
    line9_Fifth.className = `matcher1`;
  }

  if (loggedKeyNUMS1.includes(369)) {
    graphic3_Fifth.src = `../images/3.png`;
    graphic6_Fifth.src = `../images/6.png`;
    graphic9_Fifth.src = `../images/9.png`;

    line15_Fifth.className = `matcher1`;
    line16_Fifth.className = `matcher1`;
  } else if (loggedKeyNUMS2.includes(369)) {
    graphic3_Fifth.src = `../images/3.png`;
    graphic6_Fifth.src = `../images/6.png`;
    graphic9_Fifth.src = `../images/9.png`;

    line15_Fifth.className = `matcher1`;
    line16_Fifth.className = `matcher1`;
  }

  if (loggedKeyNUMS1.includes(159)) {
    graphic1_Fifth.src = `../images/1.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic9_Fifth.src = `../images/9.png`;

    line4_Fifth.className = `matcher3_left_top`;
    line13_Fifth.className = `matcher3_right_bottom`;
  } else if (loggedKeyNUMS2.includes(159)) {
    graphic1_Fifth.src = `../images/1.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic9_Fifth.src = `../images/9.png`;

    line4_Fifth.className = `matcher3_left_top`;
    line13_Fifth.className = `matcher3_right_bottom`;
  }

  if (loggedKeyNUMS1.includes(357)) {
    graphic3_Fifth.src = `../images/3.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic7_Fifth.src = `../images/7.png`;

    line6_Fifth.className = `matcher3_right_top`;
    line11_Fifth.className = `matcher3_left_bottom`;
  } else if (loggedKeyNUMS2.includes(357)) {
    graphic3_Fifth.src = `../images/3.png`;
    graphic5_Fifth.src = `../images/5.png`;
    graphic7_Fifth.src = `../images/7.png`;

    line6_Fifth.className = `matcher3_right_top`;
    line11_Fifth.className = `matcher3_left_bottom`;
  }

  if (loggedNUMS1.includes(1)) {
    graphic1_Fifth.src = `../images/1.png`;
    loggedNUMS5.push(1);
  } else if (loggedNUMS2.includes(1)) {
    graphic1_Fifth.src = `../images/1.png`;
    loggedNUMS5.push(1);
  }

  if (loggedNUMS1.includes(2)) {
    graphic2_Fifth.src = `../images/2.png`;
    loggedNUMS5.push(2);
  } else if (loggedNUMS2.includes(2)) {
    graphic2_Fifth.src = `../images/2.png`;
    loggedNUMS5.push(2);
  }

  if (loggedNUMS1.includes(3)) {
    graphic3_Fifth.src = `../images/3.png`;
    loggedNUMS5.push(3);
  } else if (loggedNUMS2.includes(3)) {
    graphic3_Fifth.src = `../images/3.png`;
    loggedNUMS5.push(3);
  }

  if (loggedNUMS1.includes(4)) {
    graphic4_Fifth.src = `../images/4.png`;
    loggedNUMS5.push(4);
  } else if (loggedNUMS2.includes(4)) {
    graphic4_Fifth.src = `../images/4.png`;
    loggedNUMS5.push(4);
  }

  if (loggedNUMS1.includes(5)) {
    graphic5_Fifth.src = `../images/5.png`;
    loggedNUMS5.push(5);
  } else if (loggedNUMS2.includes(5)) {
    graphic5_Fifth.src = `../images/5.png`;
    loggedNUMS5.push(5);
  }

  if (loggedNUMS1.includes(6)) {
    graphic6_Fifth.src = `../images/6.png`;
    loggedNUMS5.push(6);
  } else if (loggedNUMS2.includes(6)) {
    graphic6_Fifth.src = `../images/6.png`;
    loggedNUMS5.push(6);
  }

  if (loggedNUMS1.includes(7)) {
    graphic7_Fifth.src = `../images/7.png`;
    loggedNUMS5.push(7);
  } else if (loggedNUMS2.includes(7)) {
    graphic7_Fifth.src = `../images/7.png`;
    loggedNUMS5.push(7);
  }

  if (loggedNUMS1.includes(8)) {
    graphic8_Fifth.src = `../images/8.png`;
    loggedNUMS5.push(8);
  } else if (loggedNUMS2.includes(8)) {
    graphic8_Fifth.src = `../images/8.png`;
    loggedNUMS5.push(8);
  }

  if (loggedNUMS1.includes(9)) {
    graphic9_Fifth.src = `../images/9.png`;
    loggedNUMS5.push(9);
  } else if (loggedNUMS2.includes(9)) {
    graphic9_Fifth.src = `../images/9.png`;
    loggedNUMS5.push(9);
  }

  if (
    loggedNUMS5.includes(1) &&
    loggedNUMS5.includes(2) &&
    loggedNUMS5.includes(3) &&
    line3_Fifth.className === `` &&
    line10_Fifth.className === ``
  ) {
    line3_Fifth.className = `matcher2 special`;
    line10_Fifth.className = `matcher2 special`;
  }
  if (
    loggedNUMS5.includes(4) &&
    loggedNUMS5.includes(5) &&
    loggedNUMS5.includes(6) &&
    line5_Fifth.className === `` &&
    line12_Fifth.className === ``
  ) {
    line5_Fifth.className = `matcher2 special`;
    line12_Fifth.className = `matcher2 special`;
  }
  if (
    loggedNUMS5.includes(7) &&
    loggedNUMS5.includes(8) &&
    loggedNUMS5.includes(9) &&
    line7_Fifth.className === `` &&
    line14_Fifth.className === ``
  ) {
    line7_Fifth.className = `matcher2 special`;
    line14_Fifth.className = `matcher2 special`;
  }
  if (
    loggedNUMS5.includes(1) &&
    loggedNUMS5.includes(4) &&
    loggedNUMS5.includes(7) &&
    line1_Fifth.className === `` &&
    line2_Fifth.className === ``
  ) {
    line1_Fifth.className = `matcher1 special`;
    line2_Fifth.className = `matcher1 special`;
  }
  if (
    loggedNUMS5.includes(2) &&
    loggedNUMS5.includes(5) &&
    loggedNUMS5.includes(8) &&
    line8_Fifth.className === `` &&
    line9_Fifth.className === ``
  ) {
    line8_Fifth.className = `matcher1 special`;
    line9_Fifth.className = `matcher1 special`;
  }
  if (
    loggedNUMS5.includes(3) &&
    loggedNUMS5.includes(6) &&
    loggedNUMS5.includes(9) &&
    line15_Fifth.className === `` &&
    line16_Fifth.className === ``
  ) {
    line15_Fifth.className = `matcher1 special`;
    line16_Fifth.className = `matcher1 special`;
  }
  if (
    loggedNUMS5.includes(1) &&
    loggedNUMS5.includes(5) &&
    loggedNUMS5.includes(9) &&
    line4_Fifth.className === `` &&
    line13_Fifth.className === ``
  ) {
    line4_Fifth.className = `matcher3_left_top special`;
    line13_Fifth.className = `matcher3_right_bottom special`;
  }
  if (
    loggedNUMS5.includes(3) &&
    loggedNUMS5.includes(5) &&
    loggedNUMS5.includes(7) &&
    line6_Fifth.className === `` &&
    line11_Fifth.className === ``
  ) {
    line6_Fifth.className = `matcher3_right_top special`;
    line11_Fifth.className = `matcher3_left_bottom special`;
  }

  console.log(loggedNUMS1);
  console.log(loggedNUMS2);
  console.log(loggedNUMS5);

  if (
    loggedNUMS5.includes(1) &&
    loggedNUMS5.includes(2) &&
    line3_Fifth.className == ``
  ) {
    line3_Fifth.className = `matcher2`;
  }
  if (
    loggedNUMS5.includes(1) &&
    loggedNUMS5.includes(4) &&
    line1_Fifth.className == ``
  ) {
    line1_Fifth.className = `matcher1`;
  }
  if (
    loggedNUMS5.includes(1) &&
    loggedNUMS5.includes(5) &&
    line4_Fifth.className == ``
  ) {
    line4_Fifth.className = `matcher3_left_top`;
  }
  if (
    loggedNUMS5.includes(2) &&
    loggedNUMS5.includes(5) &&
    line8_Fifth.className == ``
  ) {
    line8_Fifth.className = `matcher1`;
  }
  if (
    loggedNUMS5.includes(2) &&
    loggedNUMS5.includes(3) &&
    line10_Fifth.className == ``
  ) {
    line10_Fifth.className = `matcher2`;
  }
  if (
    loggedNUMS5.includes(3) &&
    loggedNUMS5.includes(5) &&
    line11_Fifth.className == ``
  ) {
    line11_Fifth.className = `matcher3_left_bottom`;
  }
  if (
    loggedNUMS5.includes(3) &&
    loggedNUMS5.includes(6) &&
    line15_Fifth.className == ``
  ) {
    line15_Fifth.className = `matcher1`;
  }
  if (
    loggedNUMS5.includes(4) &&
    loggedNUMS5.includes(7) &&
    line2_Fifth.className == ``
  ) {
    line2_Fifth.className = `matcher1`;
  }
  if (
    loggedNUMS5.includes(4) &&
    loggedNUMS5.includes(5) &&
    line5_Fifth.className == ``
  ) {
    line5_Fifth.className = `matcher2`;
  }
  if (
    loggedNUMS5.includes(5) &&
    loggedNUMS5.includes(6) &&
    line12_Fifth.className == ``
  ) {
    line12_Fifth.className = `matcher2`;
  }
  if (
    loggedNUMS5.includes(5) &&
    loggedNUMS5.includes(8) &&
    line9_Fifth.className == ``
  ) {
    line9_Fifth.className = `matcher1`;
  }
  if (
    loggedNUMS5.includes(6) &&
    loggedNUMS5.includes(9) &&
    line16_Fifth.className == ``
  ) {
    line16_Fifth.className = `matcher1`;
  }
  if (
    loggedNUMS5.includes(7) &&
    loggedNUMS5.includes(8) &&
    line7_Fifth.className == ``
  ) {
    line7_Fifth.className = `matcher2`;
  }
  if (
    loggedNUMS5.includes(7) &&
    loggedNUMS5.includes(5) &&
    line6_Fifth.className == ``
  ) {
    line6_Fifth.className = `matcher3_right_top`;
  }
  if (
    loggedNUMS5.includes(8) &&
    loggedNUMS5.includes(9) &&
    line14_Fifth.className == ``
  ) {
    line14_Fifth.className = `matcher2`;
  }
  if (
    loggedNUMS5.includes(9) &&
    loggedNUMS5.includes(5) &&
    line13_Fifth.className == ``
  ) {
    line13_Fifth.className = `matcher3_right_bottom`;
  }
};
