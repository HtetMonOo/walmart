export const appendApiKey = link => `https://walmart.p.rapidapi.com/${link}?rapidapi-key=d8e4eb1d90msh937fd6c80779df9p167f6ejsn7713cc4b23a7`;

export const buildUrl = rawUrl => {
    if (rawUrl.indexOf("https://www.walmart.com")) { return `https://www.walmart.com${rawUrl}`; }
    else { return rawUrl; }
}