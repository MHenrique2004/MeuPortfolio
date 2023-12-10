import React from 'react'
import NavBar from './NavBar'
import './Styles/Home.css'
import TextReveal from './TextReveal'
import TextRevealOnce from './TextRevealOnce'


function Home() {
  return (
    <div>
     
      <NavBar />

      <div className="container-home">
 
        <section className='Apresentacao'>
          <div className="apresentar">
            <TextRevealOnce>
            <h1>Desenvolvedor Front-End</h1>
            <div className="paragrafo-home">
              <h2>Olá, meu nome é Maurício Henrique e eu sou um Dev Web.</h2>
            </div>
            </TextRevealOnce>
             <TextRevealOnce><div className="botoes">
             
              <a href="/Contato"><button className='Botao-apresenta1'>Me Contate!</button></a>
              <a href="https://drive.google.com/file/d/177zut8aBP2t-EpISviZ3lWDtiezw3WK8/view?usp=sharing">
                <button className='Botao-apresenta2'>Curriculum Vitae</button>
                </a>
                
            </div></TextRevealOnce>
          </div>
          <div className="imagemaolado">
            <TextRevealOnce>
            <img src="https://i.imgur.com/H3SnHah.png" alt="" draggable='false' />
            </TextRevealOnce>
          </div>
        </section>

        <section className="sobremim-home">
          <div className="controle-sobremim">
            <TextReveal>
            <div className="Sobre-mim-Paragrafo">
              <h3>Sobre Mim</h3>
            </div>
            </TextReveal>
            <div className="Sobre-mim-content">
              <TextReveal>
              <h2>Como desenvolvedor eu desejo criar páginas com design surpreendente e
                interativas para o conforto visual do usuário e sites com uma performance
                que também seja excelente.</h2>
              <br />
              <h2>Atualmente faço projetos com ReactJS e tenho algumas outras habilidades que 
                podem ser checadas no meu <a href="https://drive.google.com/file/d/177zut8aBP2t-EpISviZ3lWDtiezw3WK8/view?usp=sharing">Resumo</a>.</h2>
             </TextReveal>
              <div className="botoes-sobremim">
                <TextReveal>
                <a href="/Sobre"><button className='Botao-apresenta1'>Leia Mais</button></a>
                </TextReveal>
              </div>
            </div>
          </div>
        </section>
        <section className="MeusProjetos-home">
          <div className="controle-MeusProjetos">
            <TextReveal>
            <div className="MeusProjetos-Paragrafo">
              <h3>Meus Projetos</h3>
            </div>
            </TextReveal>
            <div className="MeusProjetos-content">
              <div className="cima">
                
                <div className="card">
                  <TextReveal>
                  <div className="imagemcardprojeto"><img src="https://i.imgur.com/rpXv5Kn.jpg" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>VR Veículos Catálogo</h2>
                    <p id='ProjetoDesc'>Catálogo desenvolvido para o cliente "VR Veículos" com a equipe de dev. freelancer
                    PD-TECH.</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://www.catalogovrveiculos.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                  </TextReveal>
                </div>
                <div className="card">
                  <TextReveal>
                  <div className="imagemcardprojeto"><img src="https://i.imgur.com/zwQWaq6.png" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>Lista de Tarefas</h2>
                    <p id='ProjetoDesc'>WEB APP para fazer anotações, lista de metas e etc... feito com reactjs.</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://mhenrique2004.github.io/To-Do-List/"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                  </TextReveal>
                </div>
              </div>
              <div className="cima" id='baixo'>
                <div className="card">
                  <TextReveal>
                  <div className="imagemcardprojeto"><img src="https://i.imgur.com/rVL9CXj.png" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>Landing Page Thaís</h2>
                    <p id='ProjetoDesc'>Landing Page desenvolvida para a sócia da empresa Pegada Digital para captação de clientes.</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://www.thaismelopd.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                  </TextReveal>
                </div>
                <div className="card">
                  <TextReveal>
                  <div className="imagemcardprojeto"><img src="https://i.imgur.com/ips2Sqj.png" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>WeatherApp</h2>
                    <p id='ProjetoDesc'>WEB APP usado para consulta de temperatura e afins usando uma api pública de clima.</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://mhenrique2004.github.io/Temperatura/"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                  </TextReveal>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Contactme">
          <div className="Contactme-div">
            <div className="Contactme-Paragrafo">
              <h3>Me Contate</h3>
            </div>
            <div className="Contactme-content">
              <h2>Alguma ideia que precise de mim para transformar em realidade? Entre em contato!</h2>
              <div className="gmail">
                <h1 id='email'>mhenriquesouza983@gmail.com</h1>
              </div>
              <div className="redessociais">
                <a href="https://www.instagram.com/__.henrique2004/"><button id='RedeSocialButton'>Instagram</button></a>
                <p>-</p>
                <a href="https://www.linkedin.com/in/maurício-henrique-560461264"><button id='RedeSocialButton'>LinkedIn</button></a>
                <p>-</p>
                <a href="https://github.com/MHenrique2004"><button id='RedeSocialButton'>GitHub</button></a>
                <p>-</p>
                <a href="mailto:mhenriquesouza983@gmail.com"><button id='RedeSocialButton'>E-Mail</button></a>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <footer className='rodape'>
            <div className="footer-bottom">

              <p>©Maurício Henrique, 2023 </p>

              <div className="footer-menu">

                <ul className="f-menu">

                  <li><a id='RedeSocialButton' href="https://storyset.com">Illustrations By <b>StorySet</b></a></li>

                </ul>

              </div>

            </div>

          </footer>
      </div>
      </div>
  )
}

export default Home