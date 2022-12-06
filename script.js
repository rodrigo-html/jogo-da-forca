const nomeSorteado = document.getElementById('nomeSorteado')
var texto = document.getElementById('texto')
const btmenu = document.getElementById('btmenu')
const base = document.getElementById('base')
const menu = document.getElementById('menu')
const opNome = document.getElementById('opnome')
const opCidade = document.getElementById('opcidade')
const opAnimal = document.getElementById('opanimal')
const opFruta = document.getElementById('opfruta')
const opVeiculo = document.getElementById('opveiculo')
const letraErrada = document.getElementById('letraErrada')
const enviar = document.getElementById('enviar')
var palavra = [document.getElementById('letra1'),document.getElementById('letra2'),document.getElementById('letra3'),document.getElementById('letra4'),document.getElementById('letra5'),document.getElementById('letra6'),document.getElementById('letra7'),document.getElementById('letra8'),document.getElementById('letra9'),document.getElementById('letra10'),document.getElementById('letra11'),document.getElementById('letra12')]
var erro = [document.getElementById('erro1'),document.getElementById('erro2'),document.getElementById('erro3'),document.getElementById('erro4'),document.getElementById('erro5'),document.getElementById('erro6')]
var backErro = []
var back = []
var palavraSort = []
var letra
var quebraPalavra
var palavraEscolhida
var aleatorio
var relogio = document.getElementById('relogio')
var loop
var jogando
var ind
var rep
var repet = 0
function iniciaMenu(){
    location.reload()
}

function veiculo(){
    nomeSorteado.innerHTML = 'VEICULO'
    ind = 0
    jogando = true
    menu.style.display = "none"
    base.style.display = "block"
    palavraSort = ['GOL','FIAT','SANDERO','STRADA','TORO','FORD','MUSTANG','VELOSTER','KWID','MOBI','VECTRA','SIENA','PRISMA','FAN','TITAN','FALCON','MERCEDES','BMW','JAGUAR','RENALT','TIGO','VOLKSWAGEN','NIVUS']
    aleatorio = Math.floor(Math.random()*palavraSort.length)
    palavraEscolhida = palavraSort[aleatorio]
    quebraPalavra = palavraEscolhida.match(/[^]/ig)
    for(x=0;x<quebraPalavra.length;x++){
        palavra[x].style.border = '1px solid black'
    }
    loop = setInterval(iniciarelogio, 1000)
}

function animal(){
    nomeSorteado.innerHTML = 'ANIMAL'
    ind = 0
    jogando = true
    menu.style.display = "none"
    base.style.display = "block"
    palavraSort = ['ELEFANTE','CAVALO','LEAO','TIGRE','TATU','CAPIVARA','GIRAFA','COELHO','CACHORRO','GATO','PANTERA','LEOPARDO','ANTA','BURRO','ZEBRA','PAPAGAIO','MACACO','AGUIA']
    aleatorio = Math.floor(Math.random()*palavraSort.length)
    palavraEscolhida = palavraSort[aleatorio]
    quebraPalavra = palavraEscolhida.match(/[^]/ig)
    for(x=0;x<quebraPalavra.length;x++){
        palavra[x].style.border = '1px solid black'
    }
    loop = setInterval(iniciarelogio, 1000)
}

function fruta(){
    nomeSorteado.innerHTML = 'FRUTA'
    ind = 0
    jogando = true
    menu.style.display = "none"
    base.style.display = "block"
    palavraSort = ['GOIABA','PERA','ABACAXI','BANANA','MELANCIA','UVA','CAQUI','CACAU','AMEIXA','GRAVIOLA','CONDE','ABACATE']
    aleatorio = Math.floor(Math.random()*palavraSort.length)
    palavraEscolhida = palavraSort[aleatorio]
    quebraPalavra = palavraEscolhida.match(/[^]/ig)
    for(x=0;x<quebraPalavra.length;x++){
        palavra[x].style.border = '1px solid black'
    }
    loop = setInterval(iniciarelogio, 1000)
}

function cidade(){
    nomeSorteado.innerHTML = 'CIDADE'
    ind = 0
    jogando = true
    menu.style.display = "none"
    base.style.display = "block"
    palavraSort = ['MIRACATU','REGISTRO','MARINGA','CURITIBA','JUQUIA','PIAUI','PERNAMBUCO','ITU','GOIANIA','SOROCABA','SERGIPE','RONDONIA','SANTOS','PERUIBE','GUARUJA','LONDRINA','CASCAVEL','FLORESTA','COLOMBO','PINHAIS','ARACAJU','APARECIDA','BARRETOS','BOTUCATU','CHAPECO','CIANORTE','FAXINAL','FIGUEIRA','FORTALEZA']
    aleatorio = Math.floor(Math.random()*palavraSort.length)
    palavraEscolhida = palavraSort[aleatorio]
    quebraPalavra = palavraEscolhida.match(/[^]/ig)
    for(x=0;x<quebraPalavra.length;x++){
        palavra[x].style.border = '1px solid black'
    }
    loop = setInterval(iniciarelogio, 1000)
}

function nome(){
    nomeSorteado.innerHTML = 'NOME'
    ind = 0
    jogando = true
    menu.style.display = "none"
    base.style.display = "block"
    palavraSort = ['RODRIGO','MARIA','ANA','ISABELA','ROBSON','JULIO','JULIA','MIGUEL','MARCOS','PAULO','VITORIA','ANDRE','ROSANGELA','ANTONIO','MATHEUS','BEATRIZ','LUCAS','JULIANO','FERNANDO','HUGO','GABRIEL','ISADORA','BERNARDO','WELLINGTON','FABIO','ADEMAR','ADRIANA','ALINE','BRUNA','CARLA','DAIANA','EDUARDO','EVERTON','HENRIQUE','ROGERIO']
    aleatorio = Math.floor(Math.random()*palavraSort.length)
    palavraEscolhida = palavraSort[aleatorio]
    quebraPalavra = palavraEscolhida.match(/[^]/ig)
    for(x=0;x<quebraPalavra.length;x++){
        palavra[x].style.border = '1px solid black'
    }
    loop = setInterval(iniciarelogio, 1000)
}

function iniciarelogio(){
    if(ind==0){
        ind++
        relogio.value = ind
    }else if(ind>0){
        ind++
        relogio.value = ind
    }
    if(ind==10){
        backErro.push('X')
        erro[backErro.length-1].innerHTML="X"
        ind = 0
    }
    verificaVitoria()
}

function verificaLetra(){
    texto = document.getElementById('texto')
    var texto1 = texto.value
    var res = texto1.toUpperCase()
    var letraNao = palavraEscolhida.search(res)
    if(jogando){
        if(back.indexOf(res)>=0){
                texto.value = ""
            }else{
        for(x=0;x<13;x++){
            if(res==quebraPalavra[x]){
                palavra[x].innerHTML = res
                back.push(res)
                ind = 0
                
            }
        }
        }
        if(letraNao<0){
            backErro.push('X')
            erro[backErro.length-1].innerHTML="X"
            letraErrada.innerHTML += res + " , "
            ind = 0
        }
        if(res==""){
            alert('Digite uma letra')
        }

        texto.value = ""
        verificaVitoria()
    }    
}

function verificaVitoria(){
    if(back.length==quebraPalavra.length){
        jogando = false
        clearInterval(loop)
        telaWin()
    }
    if(backErro.length>=6){
        for(x=0;x<quebraPalavra.length;x++){
            if(palavra[x].innerHTML==""){
                palavra[x].innerHTML=quebraPalavra[x] 
            }
        }
        jogando = false
        clearInterval(loop)
        gameOver1()
    }
}

function gameOver1(){
    var gameOver = document.getElementById('gameOver')
    if(repet < 300){
        gameOver.style.display = 'flex'
    }else{
        gameOver.style.display = 'none'
        cancelAnimationFrame(rep)
    }
    repet++
    rep = requestAnimationFrame(gameOver1)
}
function telaWin(){
    var win = document.getElementById('youWin')
    if(repet < 300){
        win.style.display = "flex"
    }else{
        win.style.display = "none"
        cancelAnimationFrame(rep1)
    }
    repet++
    rep1 = requestAnimationFrame(telaWin)
}

opNome.addEventListener('click', nome)
opCidade.addEventListener('click',cidade)
opAnimal.addEventListener('click', animal)
opFruta.addEventListener('click', fruta)
opVeiculo.addEventListener('click',veiculo)
enviar.addEventListener('click', verificaLetra)
texto.addEventListener('keydown',function(){
    tecla = event.key
    if(tecla=="Enter"){
        verificaLetra()
    }
})
btmenu.addEventListener('click', iniciaMenu)