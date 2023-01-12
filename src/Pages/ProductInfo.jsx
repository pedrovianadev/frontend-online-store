import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ProductInfo extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const { handleCategoriesProducts, id } = this.props;
    const fetch = handleCategoriesProducts(id);
    this.setState({
      data: fetch,
    });
    return fetch;
  }

  render() {
    const { data } = this.state;
    const { id } = this.props;
    return (
      <>
        { console.log(id) }
        <div>
          Oi.
        </div>
      </>
    );
  }
}

export default ProductInfo;

ProductInfo.propTypes = {
  id: PropTypes.string.isRequired,
  handleCategoriesProducts: PropTypes.func.isRequired,
};
