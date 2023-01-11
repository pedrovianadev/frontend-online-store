export async function getCategories() {
  const urlBase = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(urlBase);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID=${query}`;
  const response = await fetch(urlCategory);
  const data = await response.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
