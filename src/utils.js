export const appendApiKey = link => `https://apidojo-forever21-v1.p.rapidapi.com/${link}?rapidapi-key=d8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7`;

export const getProducts = category => `https://apidojo-forever21-v1.p.rapidapi.com/products/list?rapidapi-key=d8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7&category=${category}&page=1&pagesize=60`;

export const buildUrl = rawUrl => `https://www.forever21.com/images/default_330/${rawUrl}`;