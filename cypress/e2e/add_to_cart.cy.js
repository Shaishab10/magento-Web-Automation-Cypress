import LoginPage from "../pages/LoginPage";
import AddToCart from "../pages/AddToCart";

describe('Add to cart', () => {

  const loginPage = new LoginPage();
  const addToCart = new AddToCart();


  beforeEach(()=>{

    loginPage.userLogin("testuser73@gmail.com","qWERTY12");

  })

  it('Product succesfully added to cart', () => {
    
    addToCart.addCart();
    addToCart.validAssertion();


  })
})