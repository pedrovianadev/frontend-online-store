import { Component } from 'react';
import PropTypes from 'prop-types';

class BttnCartInfoPage extends Component {
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
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(price, title) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default BttnCartInfoPage;

BttnCartInfoPage.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
