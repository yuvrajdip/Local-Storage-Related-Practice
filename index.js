// console.log(`duck`); // checking

const getElementId = (id) => {
  const value = document.getElementById(id).value ;
  document.getElementById(id).value = ``;
  return value;
}

// todo get Item from Local Storage function
const getItemFromLS = () => { //! 8th function
  let cart = {};
  if( localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    return cart;
  }
  return cart;
}

// todo save Item to Local Storage fucntion
const saveItemToLS = (product , quantity) => {
  const cart = getItemFromLS('cart'); //! 8th function
  cart[product] = quantity;
  localStorage.setItem('cart',JSON.stringify(cart));
}

// todo add Product function

//! 3rd function
const addProduct = () => {
  const product = getElementId('prod-name'); //! 4th function
  const quantity = getElementId('prod-quantity'); //! 4th function
  
  // todo display product on UI
  addProductToDisplay(product,quantity); //! 5th function
  // todo save product to Local Storage
  saveItemToLS(product, quantity); //! 6th function
}

const addProductToDisplay =(product, quantity)=>{
  const productContainer = document.getElementById('product-container');
  const li = document.createElement(`li`);
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
}

const displayStoredProducts = () => {
  const cart = getItemFromLS();

  for(const product in cart){ // todo object er property travers korte for in use kora hoi
    const quantity = cart[product];
    //* console.log(product, quantity);
    addProductToDisplay(product,quantity); //! 2nd executed function
  }
}

displayStoredProducts(); //! 1st executed function