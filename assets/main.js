const texto = document.getElementById("typewrite");


function digitacao(elemento){
    let index = 0;
    const elementoOriginal = elemento.textContent.trim();
    elemento.textContent = "";

    function escrever(){
        if (index < elementoOriginal.length)
        {
            elemento.textContent += elementoOriginal.charAt(index);
            index++
            setTimeout(escrever, 100)
        } else 
        {
           setTimeout(apagar, 3000);
        }
    }

    function apagar() {
        if (elemento.textContent.length > 0) {
            elemento.textContent = elemento.textContent.slice(0, -1);
            setTimeout(apagar, 50);
        } else 
        {
            index = 0
            setTimeout(escrever, 1000)
        }
    }

     elemento.textContent = "";
     escrever();
}

document.addEventListener('DOMContentLoaded', () => {

    const paginaAtual = window.location.pathname.split('/').pop().toLowerCase();
    const paginaInicial = (paginaAtual === '' || paginaAtual === 'index.html');
    
    if (paginaInicial) {
        const headerLogo = document.querySelector('h1.logo');

        if (headerLogo) {
            
            headerLogo.style.opacity = '0';

            setTimeout(() => {
                headerLogo.classList.add('animacao');
            }, 500);
        }

        const navItems = document.querySelectorAll('.nav-item');

        if (navItems.length > 0) {
            navItems.forEach((item, index) => {
                item.style.opacity = '0'
                

                setTimeout(() => {
                    item.classList.add('animacao')
                }, 900 + (index * 200))

            })
            
        }

        const saudacao = document.querySelector('.apresentacaoPrimeiroTexto')

        if(saudacao) {

            saudacao.style.opacity = '0';

            setTimeout(() => {
                saudacao.classList.add('animacao')
            }, 2100);

        }

        const meuNomeApresentacao = document.querySelector('.meuNome');

        if(meuNomeApresentacao) {

            meuNomeApresentacao.style.opacity = '0';

            setTimeout(() => {
                meuNomeApresentacao.classList.add('animacao')
            }, 2300);
        }

        const profissaoApresentacao = document.querySelector('.profissao');

        if(profissaoApresentacao) {

            profissaoApresentacao.style.opacity = '0';

            setTimeout(() => {
                profissaoApresentacao.classList.add('animacao')
            }, 2500);
        }

        const redesSociais = document.querySelectorAll('.redes-sociais-items');

        if (redesSociais.length > 0) {
            redesSociais.forEach((item, index) => {
                item.style.opacity = '0'
                

                setTimeout(() => {
                    item.classList.add('animacao')
                }, 2500 + (index * 200))

            })
            
        }

        const botaoCurriculo = document.querySelector('.botao-inicio-apresentacao');

        if(botaoCurriculo) {

            botaoCurriculo.style.opacity = '0';

            setTimeout(() => {
                botaoCurriculo.classList.add('animacao')
            }, 2700);
        }

        const fotoInicio = document.querySelector('.foto-perfil');

        if(fotoInicio) {

            fotoInicio.style.opacity = '0';

            setTimeout(() => {
                fotoInicio.classList.add('animacao')
            }, 2900);
        }

    }
    
    
    digitacao(texto);

    function manipularRolagemHeader() {
        const header = document.querySelector('header');

        const rolagemMinima = 50;

        if (window.scrollY < rolagemMinima) {
            header.classList.add('header-top')
        } else {
            header.classList.remove('header-top')
        }
    }

    manipularRolagemHeader();

    window.addEventListener('scroll', manipularRolagemHeader);

    
        const linksDeRolagem = document.querySelectorAll('.seta-baixo-scroll, .nav-item a');
        const alturaDoHeader = 80;

        linksDeRolagem.forEach(link => {
            if (link.getAttribute('href') && link.getAttribute('href').startsWith('#') && link.getAttribute('href').length > 1) {

                link.addEventListener('click', function(event) {
                    event.preventDefault();

                    const idAlvo = this.getAttribute('href');
                    const elementoAlvo = document.querySelector(idAlvo);

                    if (elementoAlvo) {
                        window.scrollTo({
                            top: elementoAlvo.offsetTop - alturaDoHeader,
                            behavior: 'smooth'
                        })
                    }
                });
            }
        });
});