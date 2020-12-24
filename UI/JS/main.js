let eachCart = document.querySelectorAll('.add-cart');

let books = [
    {
        title: 'Self Portrait',
        author: 'Van Gogh',
        price: 20000,
        inCart: 0,
        tag: 'self-portrait'
    },
    {
        title: 'The River Between',
        author: 'Ngugi',
        price: 25000,
        inCart: 0,
        tag: 'river-between'
    },
    {
        title: 'Star Wars',
        author: 'George Lucas',
        price: 20000,
        inCart: 0,
        tag: 'star-wars'
    },
    {
        title: 'Color of Water',
        author: 'James McBride',
        price: 20000,
        inCart: 0,
        tag: 'color-water'
    },
    {
        title: 'Oliver Twist',
        author: 'Charles Dickens',
        price: 18000,
        inCart: 0,
        tag: 'oliver-twist'
    },
  /*   {
        title: 'Gods Bits of Wood',
        author: 'Ousmane Sembene',
        price: 30000,
        inCart: 0,
        tag: 'ousmane-sembene'
    }, */
 /*    {
        title: 'Sons and Lovers',
        author: 'D H Lawrence',
        price: 28000,
        inCart: 0,
        tag: 'sons-lovers'
    }, */
    {
        title: 'Kosiya Kifefe',
        author: 'Aurthur Gakwandi',
        price: 42000,
        inCart: 0,
        tag: 'kosiya-kifefe'
    }


];

function onCartNumbersLoad() {
    
    let pdtNumber = localStorage.getItem('numbersBought');

    if(pdtNumber) {
        document.querySelector('.cart span').textContent = pdtNumber;
    }
}

for (let i = 0; i < eachCart.length; i++) {
    eachCart[i].addEventListener('click', () => {
        numberCarts(books[i]);
        totalCost(books[i]); 
    })
}

function numberCarts (book) {

    let pdtNumber = localStorage.getItem('numbersBought');
   
    pdtNumber = parseInt(pdtNumber);
    
    if(pdtNumber) {
        localStorage.setItem('numbersBought', pdtNumber + 1)
        document.querySelector('.cart span').textContent = pdtNumber + 1;
    } else {
        localStorage.setItem('numbersBought', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(book);
    
}

function setItems(book) {
    let cartItems = localStorage.getItem('booksInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[book.title] == undefined) {
            cartItems = {
                ...cartItems,
                [book.title]: book
            }
        }
        cartItems[book.title].inCart += 1;
    } else {
        book.inCart = 1;
        cartItems = {
            [book.title]: book
        }
    }
           
    localStorage.setItem("booksInCart", JSON.stringify(cartItems));
}

function totalCost(sumProduct) {
    
    let cartCost = localStorage.getItem('totalCost');

    
    console.log("My Cartcost is", cartCost);


    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + sumProduct.price)  
    } else {
        localStorage.setItem("totalCost", sumProduct.price);
    }
   // console.log("The product price is", sumProduct.price)

}

function displayCart() {
    let cartItems = localStorage.getItem("booksInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart-books");

    let finalCost = localStorage.getItem("totalCost");
    console.log(cartItems)
    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
        productContainer.innerHTML +=  `
         <div class="books-cart">
            <i class="fa fa-window-close" aria-hidden="true"></i>
            <img src="/UI/MEDIA/${item.tag}.jpg" class="book-design">
            <span class="author">${item.author}</span>
        </div>
        <div class="book-cart-price">${item.price}</div>
        <div class="book-cart-quantity">
            <i class="fa fa-arrow-circle-left decrease" aria-hidden="true"></i>
            <span>${item.inCart}</span>
            <i class="fa fa-arrow-circle-right increase" aria-hidden="true"></i>
        </div>
        <div class = "cart-total">
            ${item.inCart * item.price}
        </div>
        `
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                UGX${finalCost}
            </h4>
        </div>       
        `
        productContainer.innerHTML += `
        <div class="footer">
        <p>Edu Look-Book: Team 3 @2020</p>
        </div>
        `
    }
}

onCartNumbersLoad();
displayCart();
