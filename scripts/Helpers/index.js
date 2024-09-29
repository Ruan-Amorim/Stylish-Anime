import { ArrayInfoPersonagens } from "../dados.js";


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