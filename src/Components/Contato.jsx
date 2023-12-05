import React, { useState } from 'react'
import NavBar from './NavBar'
import Contactme from './Contactme'
import Footer from './Footer'
import './Styles/Contato.css'
import emailjs from '@emailjs/browser'



function Contato() {

  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  function dispararemail(e){

    e.preventDefault(e);
    if (Nome === '' || Email === '' || Message === '') {

      alert("Não Enviado, responda todos os campos");
      return
    }
    
    const templateparams ={

      from_name: Nome,
      email: Email,
      message: Message,

    }

    emailjs.send("service_c0lo9zs","template_zukmogo", templateparams, "1RjQQ7OfJvinBo1pD",)
    .then((response) =>{

      console.log("Email enviado", response.status, response.text)

      setNome('')
      setEmail('')
      setMessage('')

    }, (error) =>{

      console.log("Erro", error)

    })

  };

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
            <form method='POST' onSubmit={dispararemail}>
              <div className="inputsnomeemail">
                <label htmlFor="Nome" />
                <input type="text" id="Nome" placeholder="Nome" value={Nome}
                  onChange={(e) => setNome(e.target.value)} required />
                <label htmlFor="Email" required />
                <input type="text" id="Email" placeholder="E-mail" value={Email}
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="InputMensagem">
                <label htmlFor="Msg" required />
                <input type="text" id="Mensagem" placeholder="Mensagem"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)} required/>
              </div>

              <div className="confirmacoes">
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