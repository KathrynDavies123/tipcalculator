let tippercentage = 0;
let billamount = 0;
let numberofpeople = 0;

let billamountinput = document.querySelector("#bill-amount");
let numberofpeopleinput = document.querySelector("#number-of-people");
let radios = document.querySelectorAll("input[type=radio]");
let customamountinput = document.querySelector(".custom-amount-input");

let tipamountoutput = document.querySelector(".tip-amount");
let totalamountoutput = document.querySelector(".total-amount");

let zeroerrormsg = document.querySelector(".zero-error");

let resetbutton = document.querySelector(".reset-button");

let calculateTotal = () => {
  let tipamount = (billamount * tippercentage) / numberofpeople;
  let totalamount = billamount / numberofpeople + tipamount;
  if (numberofpeople !== 0) {
    tipamountoutput.innerText = `$${tipamount.toFixed(2)}`;
    totalamountoutput.innerText = `$${totalamount.toFixed(2)}`;
    numberofpeopleinput.classList.remove("zero");
    zeroerrormsg.style.display = "none";
  } else {
    tipamountoutput.innerText = 0;
    totalamountoutput.innerText = 0;
    numberofpeopleinput.classList.add("zero");
    zeroerrormsg.style.display = "block";
  }
  resetbutton.disabled = false;
};

billamountinput.addEventListener("input", function () {
  billamount = billamountinput.value;
  calculateTotal();
});

numberofpeopleinput.addEventListener("input", function () {
  if (numberofpeopleinput.value !== "") {
    numberofpeople = numberofpeopleinput.value;
  } else {
    numberofpeople = 0;
  }
  calculateTotal();
});

radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    tippercentage = radio.value;
    customamountinput.value = "";
    calculateTotal();
  });
});

customamountinput.addEventListener("input", function () {
  tippercentage = customamountinput.value / 100;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
    }
  }
  calculateTotal();
});

resetbutton.addEventListener("click", function () {
  location.reload();
});
