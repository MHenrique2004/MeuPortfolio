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

      <Contactme />
      <Footer />

    </div>
  )
}

export default Projetos