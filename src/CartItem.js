import React from "react";

// Change into function
const CartItem = (props) => {
   // DeStructuring
   const { price, title, qty } = props.product;

   // DeStructuring
   const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct,
   } = props;

   const userVerification = () => {
      let password = prompt(
         `Please enter the password to remove ${product.title} from your cart.`
      );
      if (password === "Sonu11") {
         onDeleteProduct(product.id);
      } else {
         return;
      }
   };

   return (
      <div className="cart-item">
         <div className="left-block">
            <img style={styles.images} src={product.img} alt="" />
         </div>
         <div className="right-block">
            <div style={{ fontSize: 25 }}> {title} </div>
            <div style={{ color: "#777" }}>Rs. {price} </div>
            <div style={{ color: "#777" }}>Qty: {qty} </div>
            <div className="cart-item-actions">
               <img
                  alt="increase"
                  className="action-icons"
                  src="https://image.flaticon.com/icons/svg/1828/1828926.svg"
                  onClick={() => onIncreaseQuantity(product)}
               />
               <img
                  alt="decrease"
                  className="action-icons"
                  src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                  // Decrease qty by props
                  onClick={() => onDecreaseQuantity(product)}
               />
               <img
                  alt="delete"
                  className="action-icons"
                  src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                  // onClick={() => onDeleteProduct(product.id)}
                  onClick={userVerification}
               />
            </div>
         </div>
      </div>
   );
};

const styles = {
   images: {
      height: 130,
      width: 130,
      borderRadius: 4,
      background: "#ccc",
   },
};

export default CartItem;
