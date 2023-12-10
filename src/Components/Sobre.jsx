import React from 'react'
import NavBar from './NavBar'
import Contactme from './Contactme'
import Footer from './Footer'
import './Styles/Sobre.css'
import TextRevealOnce from './TextRevealOnce'
import TextReveal from './TextReveal'





function Sobre() {
  return (
    <div>

      <NavBar />

      <section className="Contato-Page">
        <div className="ConteudoContato">
          <div className="Titulo-Contato">
            <TextRevealOnce>
              <h1 id='Titulo-Conteudo-Contato'>Sobre</h1>
            </TextRevealOnce>
          </div>
          <div className="Paragrafo-Conteudo-Contato">
            <TextRevealOnce>
              <h3>Eu sou um desenvolvedor focado em programação WEB e vivo no Brasil.
                Sou um estudante e amo programação!</h3>
            </TextRevealOnce>
          </div>
          <div className="Info-Conteudo-Contato">
            <TextRevealOnce>
              <p>Sou um estudante dedicado que transita desde o design de
                experiência do usuário (UX/UI) até a
                implementação prática no front-end.
                Especializado em transformar conceitos visuais em
                códigos envolventes, busco a simplicidade no design e
                mantenho uma constante disposição para explorar e aprender
                mais sobre o vasto mundo do front-end. Com foco na satisfação
                do cliente, meu trabalho envolve a coleta meticulosa de detalhes visuais,
                traduzindo-os em interfaces impactantes e funcionais.</p>
            </TextRevealOnce>
          </div>
        </div>
      </section>
      <section className="imagem-sobre-page">
        <div className="imagem-sobre-pagina">
          <TextReveal>
            <img src="https://i.imgur.com/1iGQvaU.png" alt="" />
          </TextReveal>
        </div>
      </section>
      <section className="sobremim-page">
        <div className="controle-sobremim-page">
          <div className="Sobre-mim-page-h3">
            <TextReveal>
              <h3>Experiência Prof.</h3>
            </TextReveal>
          </div>
          <div className="cards-sobremim">
            <div className="card-Sobremim">
              <TextReveal>
                <div className="textos-sobremim-home">
                  <h2 id='TituloEXPERIENCIA'>Desenvolvedor Freelancer PDTECH</h2>
                  <p id='EXperienciadesc'>Pegada Digital TECH, Recife - Pernambuco </p>
                </div>
                <div className="DataDuracao">
                  <p id="Data">
                    Maio 2023 - Presente
                  </p>
                </div>
              </TextReveal>
            </div>
            <div className="card-Sobremim">
              <TextReveal>
                <div className="textos-sobremim-home">
                  <h2 id='TituloEXPERIENCIA'>Desenvolvedor Freelancer</h2>
                  <p id='EXperienciadesc'>Remoto, Presencial</p>
                </div>
                <div className="DataDuracao">
                  <p id="Data">
                    Jan 2023 - Presente
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>

        </div>
      </section>
      <section className="sobremim-page">
        <div className="controle-sobremim-page">
          <div className="Sobre-mim-page-h3">
            <TextReveal>
              <h3>Formações</h3>
            </TextReveal>
          </div>
          <div className="cards-sobremim">
            <div className="card-Sobremim">
              <TextReveal>
                <div className="textos-sobremim-home">
                  <h2 id='TituloEXPERIENCIA'>Análise e Des. de Sistemas</h2>
                </div>
                <div className="DataDuracao">
                  <p id="Data">
                    Faço o curso de Análise e Desenvolvimento de Sistemas
                    no Centro Universitário Brasileiro(UNIBRA) com conclusão em 2024.
                  </p>
                </div>
              </TextReveal>
            </div>
            <div className="card-Sobremim">
              <TextReveal>
                <div className="textos-sobremim-home">
                  <h2 id='TituloEXPERIENCIA'>Engenheiro de Dados</h2>
                </div>
                <div className="DataDuracao">
                  <p id="Data">
                    Fiz um curso de alguns dias através da plataforma ADA
                    com a bolsa de estudos do Santander Coders 2023
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>

        </div>
      </section>
      <section className="sobremim-page">
        <div className="controle-sobremim-page">
          <div className="Sobre-mim-page-h3">
            <TextReveal>
              <h3>Skills</h3>
            </TextReveal>
          </div>
          <div className="cards-sobremim">
            <div className="card-Sobremim">
              <TextReveal>
                <div className="textos-sobremim-home">
                  <h2 id='TituloEXPERIENCIA'>Hard Skills</h2>
                </div>
                <div className="DataDuracao">
                  <div id="Data">
                    <div className="imagenshardskill"><img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="logo python" />
                      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="logo JavaScript" />
                      <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="logo HTML5" />
                      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="logo CSS3" />
                      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo REACT" />
                      <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="logo GIT" />
                      <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" alt="logo FRAMER" />
                      <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="logo NPM" />
                      <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="logo VITE" />
                      <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="logo MYSQL" />
                      <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="REACT ROUTER" />
                      <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="LOGO PHP" />
                      <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="logo TRELLO" />
                    </div>
                  </div>
                </div>
              </TextReveal>
            </div>
            <div className="card-Sobremim">
              <TextReveal>
                <div className="textos-sobremim-home">
                  <h2 id='TituloEXPERIENCIA'>Em Estudo</h2>
                </div>
                <div className="DataDuracao">
                  <div id="Data">
                    <div className="imagenshardskill"><img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="logo docker" />
                      <img src="https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=Salesforce&logoColor=white" alt="logo salesforce" />
                      <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="logo AWS" />
                    </div>
                  </div>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>



      <Contactme />
      <Footer />

    </div>

  )
}

export default Sobre
