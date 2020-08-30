let resultado = 0;
let contHit = 0;
let contStand = 0;
let valorCartaDealer1;
let resultadoDealer = 0;
let saldo = 100;
let aposta = 0;
let okBet

function darCartas() {

    const saldoJogador = document.getElementById("saldo")
    const cartaDealer1 = document.getElementById("cartaDealer1");
    const cartaDealer2 = document.getElementById("cartaDealer2");
    const cartaMao1 = document.getElementById("cartaJogador1");
    const cartaMao2 = document.getElementById("cartaJogador2");
    const inputAposta = document.getElementById("apostas");
    const betBotao = document.getElementById("betBotao");
    let pontosJogador = document.getElementById("pontoJogador");
    let cartaMais1 = document.getElementById("cartaMais1");
    let cartaMais2 = document.getElementById("cartaMais2");
    let cartaMais3 = document.getElementById("cartaMais3");
    let cartaMais4 = document.getElementById("cartaMais4");
    let pontoDealer = document.getElementById("pontoDealer");
    const bet = document.getElementById("apostas")
    if (okBet) {
        resultadoDealer = 0;
        contStand = 0;
        contHit = 0;

        saldoJogador.innerHTML = saldo;

        cartaDealer1.style.marginLeft = "28%"
        cartaDealer2.style.marginLeft = "35%"
        cartaDealer3.style.marginLeft = "35%"
        cartaDealer4.style.marginLeft = "35%"
        cartaDealer3.style.height = "0%"
        cartaDealer4.style.height = "0%"
        cartaDealer3.style.display = "none"
        cartaDealer4.style.display = "none"

        pontoDealer.style.display = "none"

        cartaMao1.style.marginLeft = "28%"
        cartaMao2.style.marginLeft = "35%"

        cartaMais1.style.marginLeft = "35%"
        cartaMais2.style.marginLeft = "35%"
        cartaMais3.style.marginLeft = "35%"
        cartaMais4.style.marginLeft = "35%"
        cartaMais1.style.height = "0%"
        cartaMais2.style.height = "0%"
        cartaMais3.style.height = "0%"
        cartaMais4.style.height = "0%"
        cartaMais1.style.display = "none"
        cartaMais2.style.display = "none"
        cartaMais3.style.display = "none"
        cartaMais4.style.display = "none"


        let c1 = "../img/2H.png";
        let c2 = "../img/3H.png";
        let c3 = "../img/4H.png";
        let c4 = "../img/5H.png";
        let c5 = "../img/6H.png";
        let c6 = "../img/7H.png";
        let c7 = "../img/8H.png";
        let c8 = "../img/9H.png";
        let c9 = "../img/10H.png";
        let c10 = "../img/JH.png";
        let c11 = "../img/QH.png";
        let c12 = "../img/KH.png";
        let c13 = "../img/AH.png";
        let c14 = "../img/2C.png";
        let c15 = "../img/3C.png";
        let c16 = "../img/4C.png";
        let c17 = "../img/5C.png";
        let c18 = "../img/6C.png";
        let c19 = "../img/7C.png";
        let c20 = "../img/8C.png";
        let c21 = "../img/9C.png";
        let c22 = "../img/10C.png";
        let c23 = "../img/JC.png";
        let c24 = "../img/QC.png";
        let c25 = "../img/KC.png";
        let c26 = "../img/AC.png";
        let c27 = "../img/2S.png";
        let c28 = "../img/3S.png";
        let c29 = "../img/4S.png";
        let c30 = "../img/5S.png";
        let c31 = "../img/6S.png";
        let c32 = "../img/7S.png";
        let c33 = "../img/8S.png";
        let c34 = "../img/9S.png";
        let c35 = "../img/10S.png";
        let c36 = "../img/JS.png";
        let c37 = "../img/QS.png";
        let c38 = "../img/KS.png";
        let c39 = "../img/AS.png";
        let c40 = "../img/2D.png";
        let c41 = "../img/3D.png";
        let c42 = "../img/4D.png";
        let c43 = "../img/5D.png";
        let c44 = "../img/6D.png";
        let c45 = "../img/7D.png";
        let c46 = "../img/8D.png";
        let c47 = "../img/9D.png";
        let c48 = "../img/10D.png";
        let c49 = "../img/JD.png";
        let c50 = "../img/QD.png";
        let c51 = "../img/KD.png";
        let c52 = "../img/AD.png";

        var vetorCartaDealer1 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        var vetorCartaMao1 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        var vetorCartaMao2 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];


        pontosJogador.style.display = "inline";
        cartaDealer2.style.display = "inline";
        cartaDealer1.style.display = "inline";
        cartaMao1.style.display = "inline";
        cartaMao2.style.display = "inline";


        let randomDealer1 = Math.floor(Math.random() * 51) + 1;
        let randomMao1 = Math.floor(Math.random() * 51) + 1;
        let randomMao2 = Math.floor(Math.random() * 51) + 1;

        cartaDealer1.style.backgroundImage = "url(" + vetorCartaDealer1[randomDealer1] + ")";
        cartaMao1.style.backgroundImage = "url(" + vetorCartaMao1[randomMao1] + ")";
        cartaMao2.style.backgroundImage = "url(" + vetorCartaMao2[randomMao2] + ")";
        cartaDealer2.style.backgroundImage = "url(../img/blue_back.png)";

        c1 = 2;
        c2 = 3;
        c3 = 4;
        c4 = 5;
        c5 = 6;
        c6 = 7;
        c7 = 8;
        c8 = 9;
        c9 = 10;
        c10 = 10;
        c11 = 10;
        c12 = 10;
        c13 = 11;;
        c14 = 2;
        c15 = 3;
        c16 = 4;
        c17 = 5;
        c18 = 6;
        c19 = 7;
        c20 = 8;
        c21 = 9;
        c22 = 10;
        c23 = 10;
        c24 = 10;
        c25 = 10;
        c26 = 11;
        c27 = 2;
        c28 = 3;
        c29 = 4;
        c30 = 5;
        c31 = 6;
        c32 = 7;
        c33 = 8;
        c34 = 9;
        c35 = 10;
        c36 = 10;
        c37 = 10;
        c38 = 10;
        c39 = 11;
        c40 = 2;
        c41 = 3;
        c42 = 4;
        c43 = 5;
        c44 = 6;
        c45 = 7;
        c46 = 8;
        c47 = 9;
        c48 = 10;
        c49 = 10;
        c50 = 10;
        c51 = 10;
        c52 = 11;

        vetorCartaDealer1 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        vetorCartaMao1 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        vetorCartaMao2 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];


        valorCartaDealer1 = vetorCartaDealer1[randomDealer1];
        resultado = vetorCartaMao1[randomMao1] + vetorCartaMao2[randomMao2];

        if (resultado == 21) {
            saldo += aposta + (aposta / 2);
        }

        pontosJogador.innerHTML = resultado;
        contHit = 0;
    }
}

function hit() {
    let pontosJogador = document.getElementById("pontoJogador");
    let cartaMais1 = document.getElementById("cartaMais1");
    let cartaMais2 = document.getElementById("cartaMais2");
    let cartaMais3 = document.getElementById("cartaMais3");
    let cartaMais4 = document.getElementById("cartaMais4");
    const cartaMao1 = document.getElementById("cartaJogador1");
    const cartaMao2 = document.getElementById("cartaJogador2");

    let c1 = "../img/2H.png"
    let c2 = "../img/3H.png"
    let c3 = "../img/4H.png"
    let c4 = "../img/5H.png"
    let c5 = "../img/6H.png"
    let c6 = "../img/7H.png"
    let c7 = "../img/8H.png"
    let c8 = "../img/9H.png"
    let c9 = "../img/10H.png"
    let c10 = "../img/JH.png"
    let c11 = "../img/QH.png"
    let c12 = "../img/KH.png"
    let c13 = "../img/AH.png"
    let c14 = "../img/2C.png"
    let c15 = "../img/3C.png"
    let c16 = "../img/4C.png"
    let c17 = "../img/5C.png"
    let c18 = "../img/6C.png"
    let c19 = "../img/7C.png"
    let c20 = "../img/8C.png"
    let c21 = "../img/9C.png"
    let c22 = "../img/10C.png"
    let c23 = "../img/JC.png"
    let c24 = "../img/QC.png"
    let c25 = "../img/KC.png"
    let c26 = "../img/AC.png"
    let c27 = "../img/2S.png"
    let c28 = "../img/3S.png"
    let c29 = "../img/4S.png"
    let c30 = "../img/5S.png"
    let c31 = "../img/6S.png"
    let c32 = "../img/7S.png"
    let c33 = "../img/8S.png"
    let c34 = "../img/9S.png"
    let c35 = "../img/10S.png"
    let c36 = "../img/JS.png"
    let c37 = "../img/QS.png"
    let c38 = "../img/KS.png"
    let c39 = "../img/AS.png"
    let c40 = "../img/2D.png"
    let c41 = "../img/3D.png"
    let c42 = "../img/4D.png"
    let c43 = "../img/5D.png"
    let c44 = "../img/6D.png"
    let c45 = "../img/7D.png"
    let c46 = "../img/8D.png"
    let c47 = "../img/9D.png"
    let c48 = "../img/10D.png"
    let c49 = "../img/JD.png"
    let c50 = "../img/QD.png"
    let c51 = "../img/KD.png"
    let c52 = "../img/AD.png"

    if (okBet) {
        contHit++

        let vetorCartaMais1 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        let vetorCartaMais2 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        let vetorCartaMais3 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
        let vetorCartaMais4 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];

        let randomCartaMais1 = Math.floor(Math.random() * 51) + 1
        let randomCartaMais2 = Math.floor(Math.random() * 51) + 1
        let randomCartaMais3 = Math.floor(Math.random() * 51) + 1
        let randomCartaMais4 = Math.floor(Math.random() * 51) + 1

        if (resultado < 21) {
            if (contHit == 1) {
                cartaMais1.style.backgroundImage = "url(" + vetorCartaMais1[randomCartaMais1] + ")";
                cartaMais1.style.display = "inline"
                setTimeout(function() {
                    cartaMais1.style.height = "20%"
                }, 500)
                cartaMao2.style.marginLeft = "28%"
                cartaMao1.style.marginLeft = "21%"
            } else if (contHit == 2) {
                cartaMais2.style.backgroundImage = "url(" + vetorCartaMais2[randomCartaMais2] + ")";
                cartaMais2.style.display = "inline"
                setTimeout(function() {
                    cartaMais2.style.height = "20%"
                }, 500);
                cartaMais1.style.marginLeft = "28%"
                cartaMao2.style.marginLeft = "21%"
                cartaMao1.style.marginLeft = "14%"
            } else if (contHit == 3) {
                cartaMais3.style.backgroundImage = "url(" + vetorCartaMais3[randomCartaMais3] + ")";
                cartaMais3.style.display = "inline"
                setTimeout(function() {
                    cartaMais3.style.height = "20%"
                }, 500);
                cartaMais2.style.marginLeft = "28%"
                cartaMais1.style.marginLeft = "21%"
                cartaMao2.style.marginLeft = "14%"
                cartaMao1.style.marginLeft = "7%"
            } else if (contHit == 4) {
                cartaMais4.style.backgroundImage = "url(" + vetorCartaMais4[randomCartaMais4] + ")";
                cartaMais4.style.display = "inline"
                setTimeout(function() {
                    cartaMais4.style.height = "20%"
                }, 500);
                cartaMais3.style.marginLeft = "28%"
                cartaMais2.style.marginLeft = "21%"
                cartaMais1.style.marginLeft = "14%"
                cartaMao2.style.marginLeft = "7%"
                cartaMao1.style.marginLeft = "0%"
            }


            c1 = 2
            c2 = 3
            c3 = 4
            c4 = 5
            c5 = 6
            c6 = 7
            c7 = 8
            c8 = 9
            c9 = 10
            c10 = 10
            c11 = 10
            c12 = 10
            if (resultado + 11 > 21) {
                c13 = 1
            } else {
                c13 = 11
            }
            c14 = 2
            c15 = 3
            c16 = 4
            c17 = 5
            c18 = 6
            c19 = 7
            c20 = 8
            c21 = 9
            c22 = 10
            c23 = 10
            c24 = 10
            c25 = 10
            if (resultado + 11 > 21) {
                c26 = 1
            } else {
                c26 = 11
            }
            c27 = 2
            c28 = 3
            c29 = 4
            c30 = 5
            c31 = 6
            c32 = 7
            c33 = 8
            c34 = 9
            c35 = 10
            c36 = 10
            c37 = 10
            c38 = 10
            if (resultado + 11 > 21) {
                c39 = 1
            } else {
                c39 = 11
            }
            c40 = 2
            c41 = 3
            c42 = 4
            c43 = 5
            c44 = 6
            c45 = 7
            c46 = 8
            c47 = 9
            c48 = 10
            c49 = 10
            c50 = 10
            c51 = 10
            if (resultado + 11 > 21) {
                c52 = 1
            } else {
                c52 = 11
            }

            vetorCartaMais1 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
            vetorCartaMais2 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
            vetorCartaMais3 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
            vetorCartaMais4 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];

            if (contHit == 1) {
                resultado += vetorCartaMais1[randomCartaMais1]
            } else if (contHit == 2) {
                resultado += vetorCartaMais1[randomCartaMais2]
            } else if (contHit == 3) {
                resultado += vetorCartaMais1[randomCartaMais3]
            } else if (contHit == 4) {
                resultado += vetorCartaMais1[randomCartaMais4]
            }

            pontosJogador.innerHTML = resultado

            if (resultado > 21) {
                setTimeout(function() {
                    stand();
                }, 2000);
            }
        } else {
            contHit = 0;
        }
    }
}

function stand() {

    const cartaDealer1 = document.getElementById("cartaDealer1");
    const cartaDealer2 = document.getElementById("cartaDealer2");
    const cartaDealer3 = document.getElementById("cartaDealer3");
    const cartaDealer4 = document.getElementById("cartaDealer4");
    const cartaDealer5 = document.getElementById("cartaDealer5");
    const cartaDealer6 = document.getElementById("cartaDealer6");
    let pontoDealer = document.getElementById("pontoDealer");
    const boxMensagemResultado = document.getElementById("resultadoFinal")
    const mensagemResultado = document.getElementById("mensagemResultado")


    let c1 = "../img/2H.png";
    let c2 = "../img/3H.png";
    let c3 = "../img/4H.png";
    let c4 = "../img/5H.png";
    let c5 = "../img/6H.png";
    let c6 = "../img/7H.png";
    let c7 = "../img/8H.png";
    let c8 = "../img/9H.png";
    let c9 = "../img/10H.png";
    let c10 = "../img/JH.png";
    let c11 = "../img/QH.png";
    let c12 = "../img/KH.png";
    let c13 = "../img/AH.png";
    let c14 = "../img/2C.png";
    let c15 = "../img/3C.png";
    let c16 = "../img/4C.png";
    let c17 = "../img/5C.png";
    let c18 = "../img/6C.png";
    let c19 = "../img/7C.png";
    let c20 = "../img/8C.png";
    let c21 = "../img/9C.png";
    let c22 = "../img/10C.png";
    let c23 = "../img/JC.png";
    let c24 = "../img/QC.png";
    let c25 = "../img/KC.png";
    let c26 = "../img/AC.png";
    let c27 = "../img/2S.png";
    let c28 = "../img/3S.png";
    let c29 = "../img/4S.png";
    let c30 = "../img/5S.png";
    let c31 = "../img/6S.png";
    let c32 = "../img/7S.png";
    let c33 = "../img/8S.png";
    let c34 = "../img/9S.png";
    let c35 = "../img/10S.png";
    let c36 = "../img/JS.png";
    let c37 = "../img/QS.png";
    let c38 = "../img/KS.png";
    let c39 = "../img/AS.png";
    let c40 = "../img/2D.png";
    let c41 = "../img/3D.png";
    let c42 = "../img/4D.png";
    let c43 = "../img/5D.png";
    let c44 = "../img/6D.png";
    let c45 = "../img/7D.png";
    let c46 = "../img/8D.png";
    let c47 = "../img/9D.png";
    let c48 = "../img/10D.png";
    let c49 = "../img/JD.png";
    let c50 = "../img/QD.png";
    let c51 = "../img/KD.png";
    let c52 = "../img/AD.png";

    var vetorCartaDealer2 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
    var vetorCartaDealer3 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
    var vetorCartaDealer4 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
    var vetorCartaDealer5 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
    var vetorCartaDealer6 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];

    let randomDealer2 = Math.floor(Math.random() * 51) + 1;
    let randomDealer3 = Math.floor(Math.random() * 51) + 1;
    let randomDealer4 = Math.floor(Math.random() * 51) + 1;
    let randomDealer5 = Math.floor(Math.random() * 51) + 1;
    let randomDealer6 = Math.floor(Math.random() * 51) + 1;

    if (okBet) {
        if (resultadoDealer <= 16 && resultadoDealer <= resultado && resultado <= 21 || contStand == 0) {

            contStand++;

            if (contStand == 1) {
                cartaDealer2.style.backgroundImage = "url(" + vetorCartaDealer2[randomDealer2] + ")";
            } else if (contStand == 2) {
                cartaDealer3.style.backgroundImage = "url(" + vetorCartaDealer3[randomDealer3] + ")";
                cartaDealer3.style.display = "inline"
                setTimeout(function() {
                    cartaDealer3.style.height = "20%"
                }, 500);
                cartaDealer2.style.marginLeft = "28%"
                cartaDealer1.style.marginLeft = "21%"
            } else if (contStand == 3) {
                cartaDealer4.style.backgroundImage = "url(" + vetorCartaDealer4[randomDealer4] + ")";
                cartaDealer4.style.display = "inline"
                setTimeout(function() {
                    cartaDealer4.style.height = "20%"
                }, 500);
                cartaDealer3.style.marginLeft = "28%"
                cartaDealer2.style.marginLeft = "21%"
                cartaDealer1.style.marginLeft = "14%"
            } else if (contStand == 4) {
                cartaDealer5.style.backgroundImage = "url(" + vetorCartaDealer5[randomDealer5] + ")";
                cartaDealer5.style.display = "inline"
                setTimeout(function() {
                    cartaDealer5.style.height = "20%"
                }, 500);
                cartaDealer4.style.marginLeft = "28%"
                cartaDealer3.style.marginLeft = "21%"
                cartaDealer2.style.marginLeft = "14%"
                cartaDealer1.style.marginLeft = "7%"
            } else if (contStand == 5) {
                cartaDealer6.style.backgroundImage = "url(" + vetorCartaDealer6[randomDealer6] + ")";
                cartaDealer6.style.display = "inline"
                setTimeout(function() {
                    cartaDealer6.style.height = "20%"
                }, 500);
                cartaDealer5.style.marginLeft = "28%"
                cartaDealer4.style.marginLeft = "21%"
                cartaDealer3.style.marginLeft = "14%"
                cartaDealer2.style.marginLeft = "7%"
                cartaDealer1.style.marginLeft = "0%"
            }

            c1 = 2;
            c2 = 3;
            c3 = 4;
            c4 = 5;
            c5 = 6;
            c6 = 7;
            c7 = 8;
            c8 = 9;
            c9 = 10;
            c10 = 10;
            c11 = 10;
            c12 = 10;
            c13 = 11;
            c14 = 2;
            c15 = 3;
            c16 = 4;
            c17 = 5;
            c18 = 6;
            c19 = 7;
            c20 = 8;
            c21 = 9;
            c22 = 10;
            c23 = 10;
            c24 = 10;
            c25 = 10;
            c26 = 11;
            c27 = 2;
            c28 = 3;
            c29 = 4;
            c30 = 5;
            c31 = 6;
            c32 = 7;
            c33 = 8;
            c34 = 9;
            c35 = 10;
            c36 = 10;
            c37 = 10;
            c38 = 10;
            c39 = 11;
            c40 = 2;
            c41 = 3;
            c42 = 4;
            c43 = 5;
            c44 = 6;
            c45 = 7;
            c46 = 8;
            c47 = 9;
            c48 = 10;
            c49 = 10;
            c50 = 10;
            c51 = 10;
            c52 = 11;

            pontoDealer.style.display = "inline";

            vetorCartaDealer2 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
            vetorCartaDealer3 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];
            vetorCartaDealer4 = ["erro", c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52];

            if (contStand == 1) {
                resultadoDealer = vetorCartaDealer2[randomDealer2] + valorCartaDealer1;
            } else if (contStand == 2) {
                resultadoDealer += vetorCartaDealer3[randomDealer3]
            } else if (contStand == 3) {
                resultadoDealer += vetorCartaDealer4[randomDealer4]
            }

            pontoDealer.innerHTML = resultadoDealer;
            setTimeout(function() {
                stand();
            }, 2000);
        } else {
            if (resultado > resultadoDealer && resultado < 22 || resultadoDealer > 21) {
                saldo += parseInt(aposta);
                boxMensagemResultado.style.display = "inline"
                mensagemResultado.innerHTML = "VITORIA"
                okBet = false
            } else if (resultado == resultadoDealer) {
                saldo = saldo;
                boxMensagemResultado.style.display = "inline"
                mensagemResultado.innerHTML = "EMPATE"
                okBet = false;
            } else {
                saldo -= aposta;
                boxMensagemResultado.style.display = "inline"
                mensagemResultado.innerHTML = "DERROTA"
                okBet = false
            }
        }
    }
    console.log(resultado)
    contHit = 0;
}

function bet() {
    const bet = document.getElementById("apostas")
    if (bet.value > 100) {
        bet.value = 100
    } else if (bet.value < 5) {
        bet.value = 5
    }

    if (bet.value > saldo) {
        alert('ta pobre amigo')
    } else {
        aposta = bet.value;
        bet.disabled = "true";
        okBet = true;
    }
}

function proximaPartida() {
    const saldoJogador = document.getElementById("saldo")
    const cartaDealer1 = document.getElementById("cartaDealer1");
    const cartaDealer2 = document.getElementById("cartaDealer2");
    const cartaMao1 = document.getElementById("cartaJogador1");
    const cartaMao2 = document.getElementById("cartaJogador2");
    const inputAposta = document.getElementById("apostas");
    const betBotao = document.getElementById("betBotao");
    let pontosJogador = document.getElementById("pontoJogador");
    let cartaMais1 = document.getElementById("cartaMais1");
    let cartaMais2 = document.getElementById("cartaMais2");
    let cartaMais3 = document.getElementById("cartaMais3");
    let cartaMais4 = document.getElementById("cartaMais4");
    let pontoDealer = document.getElementById("pontoDealer");
    const cartaDealer3 = document.getElementById("cartaDealer3");
    const cartaDealer4 = document.getElementById("cartaDealer4");
    const bet = document.getElementById("apostas")
    const boxMensagemResultado = document.getElementById("resultadoFinal")

    boxMensagemResultado.style.display = "none";
    cartaMais1.style.display = "none";
    cartaMais2.style.display = "none";
    cartaMais3.style.display = "none";
    cartaMais4.style.display = "none";
    cartaDealer1.style.display = "none";
    cartaDealer2.style.display = "none";
    cartaMao1.style.display = "none";
    cartaMao2.style.display = "none";
    pontosJogador.style.display = "none";
    pontoDealer.style.display = "none";
    cartaDealer3.style.display = "none"
    cartaDealer4.style.display = "none"
    bet.removeAttribute('disabled');
    saldoJogador.innerHTML = saldo;
}