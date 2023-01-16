import React, { Component } from 'react';

class Cart extends Component {
  state = {
    carItems: [],
  };

  componentDidMount() {
    this.pegaItem();
  }

  pegaItem = () => {
    const getCarItens = JSON.parse(localStorage.getItem('CART_ITEMS'));
    this.setState({
      carItems: getCarItens,
    });
  };

  render() {
    const { carItems } = this.state;
    return (
      (carItems ? (
        <div>
          <h2 data-testid="shopping-cart-product-name">{carItems.title}</h2>
          <p>{carItems.price}</p>
          <p data-testid="shopping-cart-product-quantity">1</p>
        </div>)
        : (
          <div>
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          </div>
        )
      )
    );
  }
}

export default Cart;
