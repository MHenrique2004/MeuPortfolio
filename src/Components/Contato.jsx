import React from 'react'
import NavBar from './NavBar'
import Contactme from './Contactme'
import Footer from './Footer'
import './Styles/Contato.css'


function Contato() {
  return (
    <div>
      <NavBar />
      <section className="Contato-Page">
        <div className="ConteudoContato">
          <div className="Titulo-Contato">
            <h1 id='Titulo-Conteudo-Contato'>Contato</h1>
          </div>
          <div className="Paragrafo-Conteudo-Contato">
            <h3>Se você tem alguma ideia incrível que considere que eu seria uma adição importante, me contate!</h3>
          </div>
          <div className="Info-Conteudo-Contato">
            <p>Estou disponível para estágios e afins...</p>
          </div>
          <div className="Formulario-Contato">
          <form action="#">
            <div className="inputsnomeemail">
              <label htmlFor="Nome" />
              <input type="text" id="Nome" placeholder="Nome" />
              <label htmlFor="Email" />
              <input type="text" id="Email" placeholder="E-mail" />
            </div>
            <div className="InputMensagem">
              <label htmlFor="Msg" />
              <input type="text" id="Mensagem" placeholder="Mensagem" />
            </div>
           
            <div className="confirmacoes">
              <div className="check">
                <input type="checkbox" name="Confirmacao" id="Confirm" />
                <label htmlFor="checkbox">
                  {" "}
                  Li e aceito os <a href="">Termos e Condições</a>
                </label>
              </div>
              <div className="Botao-de-envio">
                <button type="submit" className="Botao-apresenta1">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </section>
      <Contactme />
      <Footer />
    </div>
  )
}

export default Contato