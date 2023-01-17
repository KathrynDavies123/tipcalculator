let tippercentage = 0;
let billamount = 0;
let numberofpeople = 0;

let billamountinput = document.querySelector("#billamount");
let numberofpeopleinput = document.querySelector("#numberofpeople");
let radios = document.querySelectorAll("input[type=radio]");
let customamountinput = document.querySelector("#customamountinput");

let tipamountoutput = document.querySelector("#tipamount");
let totalamountoutput = document.querySelector("#totalamount");

let calculateTotal = () => {
  let tipamount = (billamount * tippercentage) / numberofpeople;
  let totalamount = billamount / numberofpeople + tipamount;
  if (numberofpeople !== 0) {
    tipamountoutput.innerText = tipamount;
    totalamountoutput.innerText = totalamount;
  }
  else {
    tipamountoutput.innerText = 0;
    totalamountoutput.innerText = 0;
  }
};

billamountinput.addEventListener("input", function () {
  billamount = billamountinput.value;
  calculateTotal();
});

numberofpeopleinput.addEventListener("input", function () {
  if (numberofpeopleinput.value !== "") {
    numberofpeople = numberofpeopleinput.value;
  }
  else {
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

let resetbutton = document.querySelector("#resetbutton");

resetbutton.addEventListener("click", function () {
  location.reload();
});
