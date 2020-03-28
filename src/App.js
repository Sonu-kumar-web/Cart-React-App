import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

// function App() {
class App extends React.Component{

  // For Navbar 
  constructor () {
    super();
    this.state = {
    products: [
        {
        price: 99,
        title: 'Watch',
        qty: 1,
        img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80',
        id: 1
        },
        {
        price: 999,
        title: 'Mobile Phone',
        qty: 10,
        img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
        id: 2
        },
        {
        price: 999,
        title: 'Laptop',
        qty: 4,
        img: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        id: 3
        }
    ]
    }
}

handleIncreaseQuantity = (product) => {
    console.log('Hey please increase the quantity of product', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products
    });
}

handleDecreaseQuantity = (product) => {
    console.log('hey please decrease the quantity of product', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -=1;
    this.setState({
        products
    });
}

handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !==id);  // [{}]
    this.setState({
        products : items
    });
}
  // Count total number of items in cart
  getCartCount = () => {
    const { products } = this.state;
    let count=0;
    products.forEach((product) => {
      count +=product.qty;
    });
    return count;
  }

  // Total price of items 
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        < Navbar count={this.getCartCount()} />
        < Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
    
}

export default App;
