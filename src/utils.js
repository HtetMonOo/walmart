export const appendApiKey = link => `https://apidojo-forever21-v1.p.rapidapi.com/${link}?rapidapi-key=d8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7`;

export const getProducts = (link, category) => `https://apidojo-forever21-v1.p.rapidapi.com/${link}?rapidapi-key=d8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7&category=${category}`;

export const buildUrl = rawUrl => `https//www.forever21.com.images/default_330/${rawUrl}`;