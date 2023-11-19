let data = [
    { id: 1, img: "../imagess/Porsche_911.jpg", name: "Porshe 911", prix: "$590,000" },
    { id: 2, img: "../imagess/Porsche_718.jpg", name: "Porsche 718", prix: "$63,000" },
    { id: 3, img: "../imagess/Porsche_Cayenne.jpg", name: "Cayenne", prix: "$80,000" },
    { id: 4, img: "../imagess/Porsche_Panamera.jpg", name: "Panamera", prix: "$122,000" },
    { id: 5, img: "../imagess/Porsche_Taycan.jpg", name: "Taycan", prix: "$86,000" }
];
let allCards = document.querySelector(".allCards");
let allCardMapped = data.map(el => {
    return `
       
            <div class="card">
                <div class="imgpro">
                    <img src="${el.img}" alt="" width="100%" height="200px">
                </div>
                <div class="title">
                    <h1>${el.name}</h1>
                    <span>${el.prix}</span>
                </div>
                <div class="addtocart">
                    <button key=${el.id} class="addBTN" >Add to cart</button>
                    <img class="fvrt" src="./mercedes/favrt.png" alt="">
                </div>
            </div>
        
    `;
});
allCards.insertAdjacentHTML('afterbegin', allCardMapped.join(''));
let btnAdd = document.querySelectorAll(".addBTN")
console.log(btnAdd);
let allData =[]
if (JSON.parse(localStorage.getItem("carSaved")) ){
    allData = JSON.parse(localStorage.getItem("carSaved"))}
for(let i=0; i<btnAdd.length;i++){
    btnAdd[i].addEventListener("click",function(){
       
         let keyGetted = btnAdd[i].getAttribute("key")
        
        let dataSendedToLocal = data.filter(el=>el.id == keyGetted )[0]
        
      allData = [...allData, dataSendedToLocal]
     let myTable = JSON.stringify(allData)
      localStorage.setItem("carSaved", myTable)
     
    })
}