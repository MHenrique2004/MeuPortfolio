import React from 'react'
import NavBar from './NavBar'
import Contactme from './Contactme'
import Footer from './Footer'

function Projetos() {
  return (
    <div>
      <NavBar />

      <section className="Contato-Page">
        <div className="ConteudoContato">
          <div className="Titulo-Contato">
            <h1 id='Titulo-Conteudo-Contato'>Projetos</h1>
          </div>
          <div className="Paragrafo-Conteudo-Contato">
            <h3>Aqui estão meus projetos, os quais tenho orgulho por ter feito e/ou participado
              de seu desenvolvimento!</h3>
          </div>
          <div className="Info-Conteudo-Contato">
            <p>Eu faço códigos para edificar uma página bonita. É difícil para mim apontar qual melhor projeto dessa lista, então irei listar-los abaixo. Apesar disso todos eles têm algo de
              especial para mim a medida que dediquei meu tempo para os dar a vida!</p>
          </div>
        </div>
      </section>
      <section className="MeusProjetos-home">
        <div className="controle-MeusProjetos">
          <div className="MeusProjetos-Paragrafo">
            <h3>Meus Projetos</h3>
          </div>
          <div className="MeusProjetos-content">
            <div className="cima">
              <div className="card">
                <div className="imagemcardprojeto"><img src="src/assets/ImagensProjetos/logo-vr-1.jpg" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>VR Veículos Catálogo</h2>
                  <p id='ProjetoDesc'>Catálogo desenvolvido para o cliente "VR Veículos" com a equipe de dev. freelancer PD-TECH.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://www.catalogovrveiculos.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src/assets/ImagensProjetos/todolist.png" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>Lista de Tarefas</h2>
                  <p id='ProjetoDesc'>WEB APP para fazer anotações, lista de metas e etc... feito com ReactJS.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://mhenrique2004.github.io/To-Do-List/"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
            </div>
            <div className="cima" id='baixo'>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src/assets/ImagensProjetos/foto-sobre-projeto.png" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>Landing Page Thaís</h2>
                  <p id='ProjetoDesc'>Landing Page desenvolvida para a sócia da empresa Pegada Digital para captação de clientes.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://thaismelopd.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src/assets/ImagensProjetos/Temperatura.png" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>WeatherApp</h2>
                  <p id='ProjetoDesc'>WEB APP usado para consulta de temperatura e afins usando uma api pública de clima.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://mhenrique2004.github.io/Temperatura/"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
            </div>
            <div className="cima" id='baixo'>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src\assets\ImagensProjetos\logo.png" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>Place Serviços</h2>
                  <p id='ProjetoDesc'>WEB APP desenvolvido para a Place Serviços, para agilizar a atividade de gerar dados financeiros
                  de licitações para construções.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://github.com/MHenrique2004/InterWebTerceiroPeriodo"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src\assets\ImagensProjetos\GastoSábio.png" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>Gasto Sábio</h2>
                  <p id='ProjetoDesc'>Desenvolvido durante o TCC da faculdade, se trata de um web app de controle de finanças.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://mhenrique2004.github.io/Startup-Financeiro/"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
            </div>
            <div className="cima" id='baixo'>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src\assets\ImagensProjetos\logoalphafit.png" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>Alphafit</h2>
                  <p id='ProjetoDesc'>Landing Page(ainda não terminada) para uma academia próxima a minha residência
                  , quando estava começando a programar em ReactJS.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://mhenrique2004.github.io/Alphafit/"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
              <div className="card">
                <div className="imagemcardprojeto"><img src="src\assets\ImagensProjetos\logo-vr-1.jpg" alt="" /></div>
                <div className="textos-projetos-home">
                  <h2 id='ProjetoNome'>Landing Page VR Veículos</h2>
                  <p id='ProjetoDesc'>Desenvolvido pela equipe de desenvolvedores da PD-TECH para o cliente VR Veículos,
                  também para captações de clientes e briefing do seu negócio.</p>
                </div>
                <div className="botaoprojeto-home">
                  <a href="https://github.com/MHenrique2004/landing-page-vr"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contactme />
      <Footer />

    </div>
  )
}

export default Projetos