const fetch = require('node-fetch');

async function checaStatus(arrayUrl){
    const arrayStatus = await Promise.all(arrayUrl.map(async url => {
        const res = await fetch(url);
        return res.status;
    }))
    return arrayStatus;
}

function geraArrayUrl(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validaUrls(arrayLinks){
    const links = geraArrayUrl(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

module.exports = validaUrls;