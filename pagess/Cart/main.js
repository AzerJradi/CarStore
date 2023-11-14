let allCArdsGettedHTML = document.querySelector(".cardShopCar")
let dataGettedFromLocalStroge = JSON.parse(localStorage.getItem("carSaved")) 
console.log(dataGettedFromLocalStroge);
let allCardGetted = dataGettedFromLocalStroge.map(item =>(
  `
  <div class="cardShopCar">
<div class="card">
    <img src="../../${item.img}" alt="" class="imgg">
    <h2>${item.name}</h2>
    <span> ${item.prix} </span>
    <div class="quant">
        <button class="minus">-</button>
        <input type="number" value="1">
        <button class="plus">+</button>
        <button class="del">X</button>
    </div>
</div>
</div>
  `  
))
allCArdsGettedHTML.innerHTML=allCardGetted.join("")



// delete button
let delBtn = document.querySelectorAll(".del");
for (let i = 0; i < delBtn.length; i++) {
  delBtn[i].addEventListener("click", function () {
    myobjgetted.splice([i],1)
    let myobj = JSON.stringify(myobjgetted);
    localStorage.setItem("myObj", myobj);
    location.reload()
  });
}



let plusBtn = document.querySelectorAll(".plus");
let minusBtn = document.querySelectorAll(".minus");
// plus btn
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    let inputField = this.parentNode.querySelector("input");
    let currentValue = parseInt(inputField.value);
    inputField.value = currentValue + 1;
    
  });

  // minus btn
  minusBtn[i].addEventListener("click", function () {
    let inputField = this.parentNode.querySelector("input");
    let currentValue = parseInt(inputField.value);
    if (currentValue > 1) {
      inputField.value = currentValue - 1;
    }
  });
}