import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from '../Components/Products';

class Home extends React.Component {
  state = {
    query: '',
    results: {},
  };

  handleSearchText = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSearch = async () => {
    const { query } = this.state;
    const productData = await getProductsFromCategoryAndQuery(query);
    this.setState({ results: productData.results });
  };

  render() {
    const { results } = this.state;
    return (
      <section>
        <div>
          <label htmlFor="search">
            Pesquisa:
            <input
              type="text"
              id="search"
              onChange={ this.handleSearchText }
              data-testid="query-input"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleSearch }
            data-testid="query-button"
          >
            Pesquisar
          </button>
          <Link to="/Cart" data-testid="shopping-cart-button">
            Carrinho de compras
          </Link>
        </div>
        <div>
          {results.length > 0
            ? (
              results
                .map((
                  {
                    price,
                    title,
                    thumbnail },
                  index,
                ) => (
                  <Products
                    data-testid="product"
                    key={ index }
                    price={ price }
                    title={ title }
                    thumbnail={ thumbnail }
                  />
                ))
            ) : <h3>Nenhum produto foi encontrado</h3> }
        </div>
      </section>
    );
  }
}

export default Home;
