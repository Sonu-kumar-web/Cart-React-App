import React from 'react';

class CartItem extends React.Component{
    // Set state 
    // constructor(){
    //     super();
    //     this.state={
    //         price: 999,
    //         title: 'Mobile phone',
    //         qty: 1,
    //         img: ''
    //     }

        // Method 2 for increase
        // this.increaseQuantity = this.increaseQuantity.bind(this);

        // this.testing();
    // }

    // Method 1 for increase
    // increaseQuantity () {
    //     console.log('this', this.state);
    // }

    // Method 3 For increase
    // increaseQuantity = () => {
        // console.log('this', this.state);

        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 - if previous state required then use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty +1
    //         }
    //     });
    // }

    // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //   setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }

    // decreaseQuantity = () =>{
    //     this.setState((prevState) => {
    //         const {qty}=this.state;
    //         if(qty === 0){
    //             return;
    //         }
    //         return{
    //             qty: prevState.qty -1
    //         }
    //     });
    // }

    render(){
        // const { price, title, qty } = this.state;

        // for props 
        console.log('this.props', this.props);
        const { price, title, qty }= this.props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = this.props;

        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img  style={ styles.images } alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }} > {title} </div>
                    <div style={{ color: '#777' }} >Rs. {price} </div>
                    <div style={{ color: '#777' }} >Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* copy icon address from https://www.flaticon.com/ and paste in src */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828926.svg" 

                            // for Method 1
                            // onClick={this.increaseQuantity.bind(this)}

                            // For method 2 and 3
                            // onClick={this.increaseQuantity}
                            
                            // Increase qty by props
                            // onClick = { () => this.props.onIncreaseQuantity(this.props.product)}
                            onClick = { () => onIncreaseQuantity(product)}

                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                            // onClick= {this.decreaseQuantity}
                            
                            // Decrease qty by props
                            // onClick = { () => this.props.onDecreaseQuantity(this.props.product)}
                            onClick = { () => onDecreaseQuantity(product)}
                            />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                            onClick={() => onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    images: {
        height: 130,
        width: 130,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;