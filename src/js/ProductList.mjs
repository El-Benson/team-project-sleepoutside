export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    const htmlStrings = list.map(this.productCardTemplate).join('');
    this.listElement.innerHTML = htmlStrings;
  }

  productCardTemplate(product) {
    return `
      <li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
          <img src="${product.Image}" alt="${product.Name}" />
          <h3 class="card__brand">${product.Brand}</h3>
          <h2 class="card__name">${product.Name}</h2>
          <p class="product-card__price">$${product.Price.toFixed(2)}</p>
        </a>
      </li>
    `;
  }
}
