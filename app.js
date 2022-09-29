const billInput = document.getElementById("bill");
const peopleCount = document.getElementById("person");
const customTip = document.getElementById("custom");
const tip = document.querySelector(".left");
const reset = document.querySelector(".reset");
const tipSele = document.querySelector(".select");
const tipAmount = document.getElementById("tipAmount").children[1];
const total = document.getElementById("total").children[1];
let tipCheck = document.getElementsByName("one");

tip.addEventListener("input", getValueOfBill);
reset.addEventListener("click", resetBtn);

function getValueOfBill(event) {
  let cost = "";
  let people = "";
  let tipping = "";
  target = event.target;
  cost = billInput.value;
  people = peopleCount.value;

  // select tip%
  tipCheck = document.getElementsByName("one");
  tipCheck.forEach((selectTip) => {
    if (selectTip.checked) {
      tipping = selectTip.value;
    }
  });

  // tip% for custom
  if (customTip.value !== "") {
    tipping = customTip.value;
  }

  // people can't be zero style setting
  if (people === "0") {
    document.getElementById("zero-person").style.display = "block";
    document.getElementById("person").style.border = "3px solid tomato";
  } else {
    document.getElementById("zero-person").style.display = "none";
    document.getElementById("person").style.border = "none";
  }

  // finished input and than show value
  if (cost >= "0" && people > "0") {
    tipForEach = Math.round(cost * (tipping / "100") * "100") / "100";
    totalForEach = Math.round((cost / people) * "100") / "100";
    tipAmount.textContent = tipForEach;
    total.textContent = totalForEach + tipForEach;
  }
}

// click btn to rest all
function resetBtn(event) {
  target = event.target;
  if (target.classList == "reset") {
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";
    billInput.value = "";
    peopleCount.value = "";
    customTip.value = "";
    tipCheck.forEach((selectTip) => {
      if (selectTip.checked) {
        selectTip.checked = false;
      }
    });
  }
}
