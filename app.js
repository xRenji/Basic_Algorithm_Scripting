const form = document.getElementById("form");
const title = document.getElementById("title");
const algorithm = document.getElementById("algorithm");
let flag = true;
let output = "";
// First: Celsius to Fahreneit
function celsius(num) {
  flag = checkNumber(num);
  if (flag == false) {
    return "Not applicable";
  }
  let fahrenheit = num;
  return (fahrenheit * 9) / 5 + 32;
}
// Second: Factorialize
function factorialize(num) {
  let result = num;
  flag = checkNumber(num);
  if (flag == false) {
    result = "Not applicable";
  }

  if (num == 0) {
    return 1;
  } else {
    for (let i = 1; i < num; i++) {
      result *= num - i;
    }
  }

  return result;
}

//Third: Reverse a String
function reverseString(str) {
  let arr = str.split("");
  let reverseArr = arr.reverse();
  let reverseStr = reverseArr.join("");

  return reverseStr;
}

// Fourth: find the longest word in a string
function longest(str) {
  let result = 0;
  let arr = str.split(" ");
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > result) {
      word = arr[i];
      result = arr[i].length;
    }
  }
  return `${word} of ${result} letters`;
}

// Fifth: title case words in a sentence
function titleCase(str) {
  str = str.toLowerCase();
  let arr = str.split(" ");
  arr = arr.map(function (value) {
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
  });
  return arr.join(" ");
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(algorithm.value);
  switch (algorithm.value) {
    case "first":
      output = celsius(title.value);
      break;
    case "second":
      output = factorialize(title.value);
      break;
    case "third":
      output = reverseString(title.value);
      break;
    case "fourth":
      output = longest(title.value);
      break;
    case "fifth":
      output = titleCase(title.value);
      break;
  }

  document.getElementById("output").innerHTML = `${output}`;
});

//Error handling

function checkNumber(value) {
  if (isNaN(value)) {
    showError(title, `${value} is not a number.`);
    return false;
  } else {
    return true;
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
