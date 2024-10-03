import { ArrayInfoPersonagens } from "../dados.js";
import { numberPersonagens } from "../main.js";


export const CondicaoPersonagen = (anime, x, imagePersonagem) => {

    let nomePersonLista = ArrayInfoPersonagens[anime].nome_personagem[x];

    switch (anime) {
        case "Kimetsu No Yaiba":
            imagePersonagem.style.margin = "0 0";
            if (nomePersonLista == 'Nezuko Kamado') {
                if (window.innerWidth <= 480) {
                    imagePersonagem.style.maxWidth = "100%";
                    imagePersonagem.style.right = "-15%";
                } else {
                    imagePersonagem.style.maxWidth = "80%";
                    imagePersonagem.style.right = "-15%";
                }
            } else if (nomePersonLista == 'Tanjiro Kamado') {
                if (window.innerWidth <= 480) {
                    imagePersonagem.style.right = "-5%";
                } else {
                    imagePersonagem.style.right = "-3%";
                }
            } else if (nomePersonLista == 'Kyojuro Rengoku') {
                if (window.innerWidth <= 480) {
                    imagePersonagem.style.maxWidth = "100%";
                } else {
                    imagePersonagem.style.margin = "2.5% 0";
                    imagePersonagem.style.maxWidth = "55%";
                    imagePersonagem.style.maxHeight = "90%";
                }
            }
            break;
        case "Konosuba": 
            if (nomePersonLista != 'Kazuma') {
                imagePersonagem.style.margin = "0 0";
            } else if (nomePersonLista == 'Megumin') {
                imagePersonagem.style.maxWidth = "100%";
            }
            break;
        case "Mushoku Tensei":
            imagePersonagem.style.margin = "0 0";
            break;
        case "Re: Zero":
            imagePersonagem.style.margin = "0 7.5%";
            if (nomePersonLista == 'Subaru Natsuki' || nomePersonLista == 'Roswaal L Mathers' || nomePersonLista == 'Crusch Karsten') {
                imagePersonagem.style.margin = "5% 0";
                imagePersonagem.style.maxHeight = "80%";
            }
            break;
        case "Boku no Hero":
            if (window.innerWidth >= 600) {
                imagePersonagem.style.margin = "5% 0";
                imagePersonagem.style.height = "85%";
                imagePersonagem.style.maxWidth = "60%";
                imagePersonagem.style.top = "auto";
                imagePersonagem.style.bottom = "0";
            }
            if (nomePersonLista == 'All Might') {
                if (window.innerWidth >= 600) {
                    imagePersonagem.style.right = "-2.5%";
                }   
                imagePersonagem.style.transform = "scaleX(-1)";
            } else if (nomePersonLista == 'Tomura Shigaraki' ) {
                if (window.innerWidth >= 600) {
                    imagePersonagem.style.right = "-2.5%";
                }
            }
            break;
        case "Dr. Stone":
            if (nomePersonLista == 'Tsukasa Shishio') {
                imagePersonagem.style.margin = "0 0";
            } else if (nomePersonLista == 'Kohaku') {
                imagePersonagem.style.margin = "0 0";
                imagePersonagem.style.transform = "scaleX(-1)";
            } else {
                imagePersonagem.style.margin = "0 7.5%";
            }
            break;
        case "Black Clover":
            if (nomePersonLista == 'Asta' || nomePersonLista == 'Magna swing' ) {
                if (window.innerWidth >= 600) {
                    imagePersonagem.style.height = "85%";
                    imagePersonagem.style.margin = "0";
                    imagePersonagem.style.top = "auto";
                    imagePersonagem.style.bottom = "2.5%";
                    imagePersonagem.style.maxWidth = "60%";
                } else {
                    imagePersonagem.style.maxWidth = "100%";
                }
            } else {
                imagePersonagem.style.margin = "0 5%";
            }
            break;
        default:
            break;
    }
} 

// Este Arrow function adiciona opções de palavras na tag datalist do html, fazendo uma ferramenta de pesquisa facil. Não sendo a princial.

export const CondicaoPesquisa = (nomeAnime, ContainerCL, ContainerPC) => {
    let anime = document.createElement("option");
    let tela = window.innerWidth;
    anime.value = nomeAnime;
    anime.setAttribute('onclick', `updateInfoAnime(${nomeAnime})`); 

    if (tela <= 600) {
        ContainerCL.appendChild(anime)
    } else {
        ContainerPC.appendChild(anime);
    }
}
// Esta função verifica se um objeto especifico ou varios objetos, neste caso em especifico esta observando se um objeto esta visivel no centro da tela e depois execultando uma ação para fazer uma animação.
export const observerInfoAnime = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        switch (entry.target.id) {
            case "containerBlocoInfoAnime":
                if (entry.isIntersecting) {
                    document.getElementById("blocoInfoAnime").style.display = "flex";
                    document.getElementById("pesquisaAnime").style.display = "block";
                    document.getElementById("dadoAnimeRandom").style.display = "block";
                    document.getElementById("caixaDoProtagonista").style.display = "flex";
                    document.getElementById("grade01").style.display = "block";
                    document.getElementById("grade02").style.display = "block";
                  } else {
                    document.getElementById("blocoInfoAnime").style.display = "none";
                    document.getElementById("pesquisaAnime").style.display = "none";
                    document.getElementById("dadoAnimeRandom").style.display = "none";
                    document.getElementById("caixaDoProtagonista").style.display = "none";
                    document.getElementById("grade01").style.display = "none";
                    document.getElementById("grade02").style.display = "none";
                  }
                break;
            default:
                break;
        }
      
    });
  }, {
    threshold: 0.5, // O elemento deve estar 50% visível para acionar
    rootMargin: '0px 0px -10% 0px' // Margem ajustada para detecção mais precisa
  });