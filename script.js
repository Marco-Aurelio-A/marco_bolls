let bola = document.querySelector('#bola');
let _body = document.querySelector('body');
let min = -1;
let max = 1;
let spd = 5;

let vspd = 0;
let hspd = 0;

let Hdir = 1;
let Wdir = 1;

let colorCountRed = 200;
let colorCountGreen = 0;
let colorCountBlue = 0;
let escolherCor = ['red', 'green', 'blue'];

let angle = 0;
let tamanho = Window.innerHeight/10;

bola.style.height = tamanho;
bola.style.width = tamanho;

//#region

function Mudarcor()
{

    let vlr = Math.floor(Math.random() * (2.9 - 0) + 0);
    let escolha = String(escolherCor[vlr]);

    String(escolha);

    //_body.innerHTML = vlr;

    if (escolha == 'red')
    {
        colorCountGreen = 0;
        colorCountBlue = 0;
        colorCountRed = 200;
    }
    else
    if (escolha == 'green')
    {
        colorCountGreen = 200;
        colorCountBlue = 0;
        colorCountRed = 0; 
    }
    else
    if (escolha == 'blue')
    {
        colorCountGreen = 0;
        colorCountBlue = 200;
        colorCountRed = 0;
    }

}

function Dir()
{

    Hdir = (Math.random() * (max - min) + min);
    Wdir = (Math.random() * (max - min) + min);

    Mudarcor();

}

function mover()
{

    vspd += Hdir*spd;
    hspd += Wdir*spd;

    if (vspd <= 0)
    {
        Hdir = 1;
        vspd = 0;
        Dir();
    }

    if(vspd >= window.innerHeight - tamanho)
    {
        Hdir = -1;
        vspd = window.innerHeight - tamanho;
        Dir();
    }

    
    if (hspd <= 0)
    {
        Wdir = 1;
        hspd = 0;
        Dir();
    }

    if(hspd >= window.innerWidth - tamanho)
    {
        Wdir = -1;
        hspd = window.innerWidth - tamanho;
        Dir();
    }

    bola.style.top = vspd;
    bola.style.left = hspd;

    document.querySelector('p').innerHTML = 'x = ' + String(hspd) + '<br>' + 'y = ' + String(vspd) + '<br>' + 'Hdir = ' + Hdir + '<br>' + 'Wdir = ' + Wdir;

    setTimeout(function()
    {
        mover();
    }, 8);

}

mover();
Dir();

//#endregion]

function Loop()
{

    if (colorCountGreen < 200 && colorCountRed > 0 && colorCountBlue == 0)
    {

        colorCountRed--;
        colorCountGreen++;

    }
    else
    if (colorCountBlue < 200 && colorCountGreen > 0 && colorCountRed == 0)
    {

        colorCountGreen--;
        colorCountBlue++;

    }
    else
    if (colorCountBlue > 0 && colorCountRed < 200 && colorCountGreen == 0)
    {

        colorCountBlue--;
        colorCountRed++;

    }

    if (Hdir != 0 && Wdir != 0)
    {
        angle += Wdir + Hdir;
    }

    bola.style.transform = 'rotate(' + angle + 'deg)';

    _body.style.background = 'linear-gradient(black, rgb(' + colorCountRed + ', ' + colorCountGreen + ', ' + colorCountBlue + '))';

    _body.style.color = 'white';

        setTimeout(function()
        {
            Loop();
        }, 10);

}

Loop();