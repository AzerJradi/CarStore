var AddToCart= document.getElementsByClassName("add");
for (let i=0; i<AddToCart.length ; i++){
    AddToCart[i].addEventListener("click",function(){
        var message = confirm("added to the cart");
        console.log(message );
})
}
