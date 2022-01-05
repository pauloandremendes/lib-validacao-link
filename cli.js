const pegaAquivo = require('./index');
const validaUrls = require('./http-validacao');

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaAquivo(caminhoDoArquivo[2]);
    if(caminho[3] === 'validar') {  
        console.log('Link validados', await validaUrls(resultado));
    } else {
    console.log('Lista de links', resultado);
    }
}

processaTexto(caminho);