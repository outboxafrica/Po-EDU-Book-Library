console.log(" this function")
function libFunction(){

    console.log("Inside a function")
    let libBook = document.getElementById("book");
    let bookAuthor = document.getElementById("author");
    let bookPrice = document.getElementById("price");
    console.log(libBook);
    console.log(bookAuthor);
    console.log(bookPrice);

    let samePage = document.getElementById("trendy")
    console.log(samePage);

    samePage.append(libBook);
    samePage.appendChild(bookAuthor);
    samePage.appendChild(bookPrice);
    let cartShow = document.getElementById("cart-page");

    console.log(cartShow);
    cartShow.appendChild(libBook);

};






/* libCart.addEventListener("click", function(){
    let myTitle = document.getElementsByClassName("price-only");
    let myPrice = document.getElementsByClassName("word-only");

    let newPage = document.getElementsByClassName("cart-view");
    newPage.appendChild(myTitle);
});
 */
/* libCart.addEventListener("click", libFunction);

function libFunction() {
    let myTitle = document.getElementsByClassName("price-only");
    let myPrice = document.getElementsByClassName("word-only");

    let newPage = document.getElementsByClassName("cart-view");
    newPage.appendChild(myTitle);
    newPage.appendChild(myPrice);
} */
