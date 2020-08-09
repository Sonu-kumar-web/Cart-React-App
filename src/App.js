import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";
// function App() {
class App extends React.Component {
   // For Navbar
   constructor() {
      super();
      this.state = {
         products: [],
         loading: true,
      };
      this.db = firebase.firestore();
   }

   // Mounting phase
   componentDidMount() {
      this.db
         .collection("products")

         .onSnapshot((snapshot) => {
            const products = snapshot.docs.map((doc) => {
               const data = doc.data();
               data["id"] = doc.id;
               return data;
            });
            this.setState({
               products,
               loading: false,
            });
         });
   }

   handleIncreaseQuantity = (product) => {
      console.log("Hey please increase the quantity of product", product);
      const { products } = this.state;
      const index = products.indexOf(product);

      // Increase product in firebase
      const docRef = this.db.collection("products").doc(products[index].id);
      docRef
         .update({ qty: products[index].qty + 1 })
         .then(() => {
            console.log("Document updated successfully");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   handleDecreaseQuantity = (product) => {
      console.log("hey please decrease the quantity of product", product);
      const { products } = this.state;
      const index = products.indexOf(product);
      if (products[index].qty === 0) {
         return;
      }

      // Decrease product in firebase
      // Find the reference of a document
      const docRef = this.db.collection("products").doc(products[index].id);
      docRef
         .update({ qty: products[index].qty - 1 })
         .then(() => {
            console.log("Document updated successfully");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   handleDeleteProduct = (id) => {
      // Find the reference of a document
      const docRef = this.db.collection("products").doc(id);

      docRef
         .delete()
         .then(() => {
            console.log("Deleted successfully");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   // Count total number of items in cart
   getCartCount = () => {
      const { products } = this.state;
      let count = 0;
      products.forEach((product) => {
         count += product.qty;
      });
      return count;
   };

   // Total price of items
   getCartTotal = () => {
      const { products } = this.state;
      let cartTotal = 0;
      products.map((product) => {
         if (product.qty > 0) {
            cartTotal = cartTotal + product.qty * product.price;
         }
         return "";
      });
      return cartTotal;
   };

   // Adding products in firebase
   addProduct = () => {
      this.db
         .collection("products")
         .add({
            img: "",
            price: 900,
            qty: 3,
            title: "Washing Machine",
         })
         .then((docRef) => {
            docRef.get().then((snapshot) => {
               console.log("product has been added ", snapshot.data());
            });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   render() {
      const { products, loading } = this.state;
      return (
         <div className="App">
            <Navbar count={this.getCartCount()} />

            <Cart
               products={products}
               onIncreaseQuantity={this.handleIncreaseQuantity}
               onDecreaseQuantity={this.handleDecreaseQuantity}
               onDeleteProduct={this.handleDeleteProduct}
            />
            {loading && <h1>Loading products...</h1>}
            <div style={{ padding: 10, fontSize: 20 }}>
               TOTAL: {this.getCartTotal()}{" "}
            </div>
         </div>
      );
   }
}

export default App;
