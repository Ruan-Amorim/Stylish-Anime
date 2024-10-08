
import {ArrayPreviewAnime, ArrayInfoAnimes, ArrayInfoPersonagens} from "./dados.js";
import { CondicaoPersonagen, CondicaoPesquisa, observerInfoAnime } from "./Helpers/index.js";


var ulContainerPlayerAnimes = window.document.getElementById("ulContainerPlayerAnimes");
var bloco1 = window.document.getElementById("bloco1");

// PEGANDO OBJETOS HTML DA SECTION INFORMAÇÃO DE ANIMES

var pesquisaAnime = window.document.getElementById("pesquisaAnime");
var pesquisaAnimeCl = window.document.getElementById("pesquisaAnimeCl");

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
        if (window.innerWidth <= 500) {
            li.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[x].imagemPC)}")`;
        } else {
            li.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[x].imagemPC)}")`;
        }
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
}

function loading() {
    ulContainerPlayerAnimes.innerHTML = ''
    geradorPreviewAnime();
    if (window.innerWidth <= 500) {
        bloco1.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[0].imagemPC)}")`;
    } else {
        bloco1.style.backgroundImage = `url("${encodeURI(ArrayPreviewAnime[0].imagemPC)}")`;
    }
    updateInfoAnime(ArrayPreviewAnime[0].nome);
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

    gerandoInfoAnime(anime);
}
// ESCOLHENDO ANIMES RANDOMICAMENTE
function randomAnime() {
    return Math.floor(Math.random() * ArrayPreviewAnime.length);
}

window.infoAnimeRandom = function infoAnimeRandom() {
    let number;
    let random = randomAnime();

    if (random == number) {
        infoAnimeRandom();
    } else {
        number = random;
        updateInfoAnime(ArrayPreviewAnime[random].nome);
    }
}
//  GERANDO E FAZENDO O UPDATE NO BLOCO DE INFORMAÇÃO DE ANIMES
export var numberPersonagens = 0;
function gerandoInfoAnime(anime) {

    var containerPrincipal = window.document.getElementById("containerTwo");
    containerPrincipal.innerHTML = '';
    let arrowLeft = document.createElement("i");
    arrowLeft.id = "arrowLeft";
    arrowLeft.className = "fas fa-arrow-circle-left fa-xs";
    arrowLeft.addEventListener('click', () => { 
        containerPrincipal.scrollBy({
            top: 0,
            left: -window.innerWidth,
            behavior: "smooth",
        });
     });
    let arrowRight = document.createElement("i");
    arrowRight.id = "arrowRight";
    arrowRight.className = "fas fa-arrow-circle-right fa-xs";
    arrowRight.addEventListener('click', () => {
        containerPrincipal.scrollBy({
            top: 0,
            left: window.innerWidth,
            behavior: "smooth",
        });
     });
    
    containerPrincipal.appendChild(arrowLeft);
    containerPrincipal.appendChild(arrowRight);

    numberPersonagens = 0;

    for (let x = 0; x < ArrayInfoPersonagens[anime].nome_personagem.length; x++) {
        numberPersonagens += 1;
        let container = document.createElement("section");
        container.className = `containerInfoPersonagens`;

        let cartao = document.createElement("div");
        cartao.className = "infoPersonagem";
        
        let caixaTextoInfoAnime = document.createElement("div");
        caixaTextoInfoAnime.className = "caixaTextoInfoAnime";

        let tituloInfoPersonagem = document.createElement("h2");
        tituloInfoPersonagem.className = "tituloInfoPersonagem";

        let textoInfoPersonagem = document.createElement("p");
        textoInfoPersonagem.className = "textoInfoPersonagem";
        
        let imagePersonagem = document.createElement("img");
        imagePersonagem.className = "imagePersonagem";
        
        let circle01 = document.createElement("div");
        circle01.className = "circle circle01";
        let circle02 = document.createElement("div");
        circle02.className = "circle circle02";
        let circle03 = document.createElement("div");
        circle03.className = "circle circle03";
        let circle04 = document.createElement("div");
        circle04.className = "circle circle04";
        
        tituloInfoPersonagem.style.background = `linear-gradient(to left, ${ArrayInfoPersonagens[anime].color_personagem[x]})`;
        tituloInfoPersonagem.style.webkitBackgroundClip = "text";
        tituloInfoPersonagem.style.color = "transparent";
        circle01.style.background = `linear-gradient(to top, ${ArrayInfoPersonagens[anime].color_personagem[x]})`;
        circle02.style.background = `linear-gradient(to top, ${ArrayInfoPersonagens[anime].color_personagem[x]})`;
        circle03.style.background = `linear-gradient(to top, ${ArrayInfoPersonagens[anime].color_personagem[x]})`;
        circle04.style.background = `linear-gradient(to top, ${ArrayInfoPersonagens[anime].color_personagem[x]})`;

        tituloInfoPersonagem.innerText = ArrayInfoPersonagens[anime].nome_personagem[x];
        textoInfoPersonagem.innerText = ArrayInfoPersonagens[anime].texto_personagem[x];
        imagePersonagem.src = ArrayInfoPersonagens[anime].img_personagem[x];

        
        caixaTextoInfoAnime.appendChild(tituloInfoPersonagem);
        caixaTextoInfoAnime.appendChild(textoInfoPersonagem);
        

        CondicaoPersonagen(anime, x, imagePersonagem);// Condiçãoes e ajustes conforme o Personagem ou anime

        cartao.appendChild(caixaTextoInfoAnime);
        cartao.appendChild(imagePersonagem);
        cartao.appendChild(circle01);
        cartao.appendChild(circle02);
        cartao.appendChild(circle03);
        cartao.appendChild(circle04);
        container.appendChild(cartao);
        containerPrincipal.appendChild(container);
    }
}
function gerandoanimePesquisaRapida() {
    let containerPC = window.document.getElementById("animesPesquisa");
    let containerCL = window.document.getElementById("pesquisaAnimeCl");

    for (let x = 0; x < ArrayPreviewAnime.length; x++) {
        CondicaoPesquisa(ArrayPreviewAnime[x].nome, containerCL, containerPC);// Condiçãoes para diferênciar celular de pc
    }
}

window.addEventListener('keydown', function verificaçaoAnime(event) {
    switch (event.key) {
        case 'Enter':
            if (window.innerWidth <= 600) {
                updateInfoAnime(pesquisaAnimeCl.value);
            } else {
                updateInfoAnime(pesquisaAnime.value);
            }
            break;
        default:
            break;
    }
});

// ANIMAÇÕES USANDO IntersectionObserver

// Cria um observador para monitorar quando os elementos entram na tela
function startAnimation() {
    if (window.innerWidth < 500) {
        document.getElementById("blocoInfoAnime").style.display = "block";
        document.getElementById("dadoAnimeRandom").style.display = "block";
        document.getElementById("caixaDoProtagonista").style.display = "inline-block";
        document.getElementById("grade01").style.display = "block";
        document.getElementById("grade02").style.display = "block";
    } else {
        observerInfoAnime.observe(document.getElementById("containerBlocoInfoAnime"));
    }
}
  
loading();
startAnimation();
gerandoanimePesquisaRapida();
updateInfoAnime(ArrayPreviewAnime[0].nome);
