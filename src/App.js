import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from "firebase";
// function App() {
class App extends React.Component{

  // For Navbar 
  constructor () {
    super();
    this.state = {
    products: [],
    loading: true
    };
}

// Mounting phase
componentDidMount() {
  // firebase
  // .firestore()
  // .collection("products")
  // .get()
  // .then(snapshot => {
  //   const products =snapshot.docs.map(doc => {
  //     const data = doc.data();
  //     data["id"]=doc.id;
  //     return data;
  //   });
  //   this.setState({ 
  //     products, 
  //     loading: false 
  //   });
  // });

  // Add onSnapshot listener for direct reflect the change without refresh
  firebase
  .firestore()
  .collection("products")
  .onSnapshot((snapshot) => {
    const products =snapshot.docs.map(doc => {
      const data = doc.data();
      data["id"]=doc.id;
      return data;
    });
    this.setState({ 
      products, 
      loading: false 
    });
  });
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
      if(product.qty>0){
        cartTotal = cartTotal + product.qty * product.price
      }
      return '';
    })
    return cartTotal;
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        < Navbar count={this.getCartCount()} />
        < Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        { loading && <h1>Loading products...</h1> }
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
    
}

export default App;
