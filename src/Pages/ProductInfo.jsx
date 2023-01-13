import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { getProductById } from '../services/api'


class ProductInfo extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const { Product: productId } = this.props.match.params;
    const fetch = await getProductById(productId);
    this.setState({
      data: fetch,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <section>
        { console.log(data) }
        { data
            ? (
        <>
        <div>
              <div>
                <h3>
                  {data.title} <br></br> R${data.price}
                </h3>
              </div>
              <div>
                <img src={data.thumbnail} alt="Product " />
              </div>
            </div>
              </>
        ) : ''}
      </section>
    );
  }
}

export default ProductInfo;

ProductInfo.propTypes = {
  match: PropTypes.shape().isRequired,
};
