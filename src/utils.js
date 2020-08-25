export const appendApiKey = link => `https://apidojo-forever21-v1.p.rapidapi.com/${link}?rapidapi-key=f8a61add09mshd5222a5a5b1345dp1f2be7jsnc3299914d521`;

export const getProducts = category => `https://apidojo-forever21-v1.p.rapidapi.com/products/list?rapidapi-key=f8a61add09mshd5222a5a5b1345dp1f2be7jsnc3299914d521&category=${category}&page=1&pagesize=60`;

export const buildUrl = rawUrl => `https://www.forever21.com/images/default_330/${rawUrl}`;

export const searchProducts = query => `https://apidojo-forever21-v1.p.rapidapi.com/products/search?rapidapi-key=f8a61add09mshd5222a5a5b1345dp1f2be7jsnc3299914d521&query=${query}`