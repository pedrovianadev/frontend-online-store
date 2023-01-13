import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ProductInfo extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const { match: { params } } = this.props;
    const { id: productId } = params;
    const fetch = await getProductById(productId);
    this.setState({
      data: fetch,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <section>
        { }
        { data !== {}
          ? (
            <div>
              <div>
                <Link to="/Cart" data-testid="shopping-cart-button">
                  Carrinho de compras
                </Link>
              </div>
              <div data-testid="product-detail-price">
                <h3 data-testid="product-detail-name">
                  {data.title}
                  {' '}
                  <br />
                  {' '}
                  R$
                  {data.price}
                </h3>
              </div>
              <div data-testid="product-detail-image">
                <img src={ data.thumbnail } alt="Product " />
              </div>
              <div data-testid="shopping-cart-button">
                <p>Atributo</p>
              </div>
              <button type="button" data-testid="product-add-to-cart">
                Adiciona ao carrinho
              </button>
            </div>
          ) : ''}
      </section>
    );
  }
}

export default ProductInfo;

ProductInfo.propTypes = {
  match: PropTypes.shape().isRequired,
};
