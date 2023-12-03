import React from 'react'
import NavBar from './NavBar'
import './Styles/Home.css'

function Home() {
  return (
    <div>
      <NavBar />

      <div className="container-home">
        <section className='Apresentacao'>
          <div className="apresentar">
            <h1>Desenvolvedor Front-End</h1>
            <div className="paragrafo-home">
              <h2>Olá, meu nome é Maurício Henrique e eu sou um Dev Web.</h2>
            </div>
            <div className="botoes">
              <a href="/Contato"><button className='Botao-apresenta1'>Me Contate!</button></a>
              <a href=""><button className='Botao-apresenta2'>Curriculum Vitae</button></a>
            </div>
          </div>
          <div className="imagemaolado">
            <img src="src/assets/Hand-coding-rafiki.svg" alt="" draggable='false' />
          </div>
        </section>
        <section className="sobremim-home">
          <div className="controle-sobremim">
            <div className="Sobre-mim-Paragrafo">
              <h3>Sobre Mim</h3>
            </div>
            <div className="Sobre-mim-content">
              <h2>Como desenvolvedor eu desejo criar páginas com design surpreendente e
                interativas para o conforto visual do usuário e sites com uma performance
                que também seja excelente.</h2>
              <div className="botoes-sobremim">
                <a href="/Sobre"><button className='Botao-apresenta1'>Leia Mais</button></a>
              </div>
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
                  <div className="imagemcardprojeto"><img src="https://picsum.photos/1" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>VR Veículos Catálogo</h2>
                    <p id='ProjetoDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas r numquam?</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://www.catalogovrveiculos.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                </div>
                <div className="card">
                  <div className="imagemcardprojeto"><img src="https://picsum.photos/1" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>VR Veículos Catálogo</h2>
                    <p id='ProjetoDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas r numquam?</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://www.catalogovrveiculos.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                </div>
              </div>
              <div className="cima" id='baixo'>
                <div className="card">
                  <div className="imagemcardprojeto"><img src="https://picsum.photos/1" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>VR Veículos Catálogo</h2>
                    <p id='ProjetoDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas r numquam?</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://www.catalogovrveiculos.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
                </div>
                <div className="card">
                  <div className="imagemcardprojeto"><img src="https://picsum.photos/1" alt="" /></div>
                  <div className="textos-projetos-home">
                    <h2 id='ProjetoNome'>VR Veículos Catálogo</h2>
                    <p id='ProjetoDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias voluptas r numquam?</p>
                  </div>
                  <div className="botaoprojeto-home">
                    <a href="https://www.catalogovrveiculos.com"><button className='Botao-apresenta1'>Ver Projeto</button></a>
                  </div>
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
      </div>

    </div>
  )
}

export default Home