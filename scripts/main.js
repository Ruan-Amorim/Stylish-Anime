
import {ArrayPreviewAnime, ArrayInfoAnimes} from "./dados.js";


var ulContainerPlayerAnimes = window.document.getElementById("ulContainerPlayerAnimes");
var bloco1 = window.document.getElementById("bloco1");

// PEGANDO OBJETOS HTML DA SECTION INFORMAÇÃO DE ANIMES
var imagem_capa_infoAnimes = window.document.getElementById("imgCapaGride01");
var nome_imagem_capa_infoAnimes = window.document.getElementById("nomeImg");
var nome_anime_infoAnimes = window.document.getElementById("nomeAnimeInfoAnimes");
var estreou_infoAnimes = window.document.getElementById("estreouInfoAnimes");
var fonte_infoAnimes = window.document.getElementById("fonteInfoAnimes");
var genero_infoAnimes = window.document.getElementById("generoInfoAnimes");
var temas_infoAnimes = window.document.getElementById("temasInfoAnimes");
var produtores_infoAnimes = window.document.getElementById("produtoresInfoAnimes");
var estudios_infoAnimes = window.document.getElementById("estudiosInfoAnimes");

var titulo_caixa_principal_texto_infoAnimes = window.document.getElementById("tituloCaixaPrincipalTexto");
var texto_sinopse_texto_infoAnimes = window.document.getElementById("textoSinopse");
var texto_score_infoAnimes = window.document.getElementById("textScore");
var texto_users_infoAnimes = window.document.getElementById("textUsers");
var image_protagonista_infoAnimes = window.document.getElementById("imageProtagonista");
var nome_protagonista_infoAnimes = window.document.getElementById("nomeProtagonista");
var texto_do_protagonista_infoAnimes = window.document.getElementById("textoDoProtagonista");


function geradorPreviewAnime() {
    for (let x = 0; x < ArrayPreviewAnime.length; x++) {
        let li = document.createElement("li");
        li.id = `anime-${x}`;
        li.innerHTML = `
            <h2>${ArrayPreviewAnime[x].nome}</h2>
            <p>${ArrayPreviewAnime[x].sinopse}</p>`;
        li.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[x].imagemPC)}")`;
        li.setAttribute('onclick', `AnimeClick("${ArrayPreviewAnime[x].nome}")`); 
    
        ulContainerPlayerAnimes.appendChild(li);
    }
};

window.AnimeClick = function AnimeClick(Anime){
    // Remove o primeiro elemento e o armazena em uma variável
    let firstElement = ArrayPreviewAnime.shift();

    // Adiciona o elemento removido ao final da array
    ArrayPreviewAnime.push(firstElement);

    loading();
    updateInfoAnime(Anime);
}

function loading() {
    ulContainerPlayerAnimes.innerHTML = ''
    geradorPreviewAnime();
    bloco1.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[0].imagemPC)}")`;
}

window.updateInfoAnime = function updateInfoAnime(anime) {
    imagem_capa_infoAnimes.style.backgroundImage = `url("${ArrayInfoAnimes[anime].image_capa}")`;
    nome_imagem_capa_infoAnimes.innerText = ArrayInfoAnimes[anime].nome_capa;
    nome_anime_infoAnimes.innerText = ArrayInfoAnimes[anime].nome_anime;
    estreou_infoAnimes.innerText = ArrayInfoAnimes[anime].estrou;
    genero_infoAnimes.innerText = ArrayInfoAnimes[anime].genero;
    fonte_infoAnimes.innerText = ArrayInfoAnimes[anime].fonte;
    produtores_infoAnimes.innerText = ArrayInfoAnimes[anime].produtores;
    temas_infoAnimes.innerText = ArrayInfoAnimes[anime].temas;
    estudios_infoAnimes.innerText = ArrayInfoAnimes[anime].estudios;

    titulo_caixa_principal_texto_infoAnimes.innerText = ArrayInfoAnimes[anime].titulo;
    texto_sinopse_texto_infoAnimes.innerHTML = ArrayInfoAnimes[anime].sinopse;
    texto_score_infoAnimes.innerText = ArrayInfoAnimes[anime].score;
    texto_users_infoAnimes.innerText = ArrayInfoAnimes[anime].users;
    image_protagonista_infoAnimes.style.backgroundImage = `url("${ArrayInfoAnimes[anime].image_protagonista}")`;
    nome_protagonista_infoAnimes.innerText = ArrayInfoAnimes[anime].nome_protagonista;
    texto_do_protagonista_infoAnimes.innerHTML = ArrayInfoAnimes[anime].texto_protagonista;
}

geradorPreviewAnime();
updateInfoAnime(ArrayPreviewAnime[0].nome);