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
            <img src="src/assets/Upload-amico.png" alt="" />
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



      <Contactme />
      <Footer />

    </div>

  )
}

export default Sobre