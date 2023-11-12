let allCArdsGettedHTML = document.querySelector(".allCArsGetted")

let dataGettedFromLocalStroge = JSON.parse(localStorage.getItem("carSaved")) 
console.log(dataGettedFromLocalStroge);

let allCardGetted = dataGettedFromLocalStroge.map(item =>(
    `
    <div class="cardShopCar">
            <img src="../../${item.img}" alt="">
            <h2> ${item.name} </h2>
            <div class="quant">
                <button>-</button>
                <input type="number" value="1">
                <button>+</button>
            </div>
            <h4> ${item.prix} </h4>
            <div class="deleBTN">
                <button>X</button>
            </div>
        </div>
    `
))

allCArdsGettedHTML.innerHTML=allCardGetted.join("")

/*

<div class="cardShopCar">
            <img src="../logo car.png" alt="">
            <h2>Azer</h2>
            <div class="quant">
                <button>-</button>
                <input type="number" value="1">
                <button>+</button>
            </div>
            <h4>1900</h4>
            <div class="deleBTN">
                <button>X</button>
            </div>
        </div>




*/