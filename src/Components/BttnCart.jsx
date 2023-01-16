import { Component } from 'react';
import PropTypes from 'prop-types';

class BttnCart extends Component {
  addToCart = (price, title) => {
    const item = { price, title };
    localStorage.setItem('CART_ITEMS', JSON.stringify(item));
  };

  render() {
    const { price, title } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ () => this.addToCart(price, title) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default BttnCart;

BttnCart.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
