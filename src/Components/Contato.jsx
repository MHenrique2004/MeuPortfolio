import React, { useState } from 'react'
import NavBar from './NavBar'
import Contactme from './Contactme'
import Footer from './Footer'
import './Styles/Contato.css'
import emailjs from '@emailjs/browser'
import TextRevealOnce from './TextRevealOnce'
import TextReveal from './TextReveal'




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
            <TextRevealOnce>
            <h1 id='Titulo-Conteudo-Contato'>Contato</h1>
            </TextRevealOnce>
          </div>
          <div className="Paragrafo-Conteudo-Contato">
          <TextRevealOnce>
            <h3>Se você tem alguma ideia incrível que considere que eu seria uma adição importante, me contate!</h3>
            </TextRevealOnce>
          </div>
          <div className="Info-Conteudo-Contato">
          <TextRevealOnce>
            <p>Estou disponível para estágios e afins...</p>
            </TextRevealOnce>
          </div>
          <div className="Formulario-Contato">
            <form method='POST' onSubmit={dispararemail}>
              <div className="inputsnomeemail">
              <TextRevealOnce>
                <label htmlFor="Nome" />
                <input type="text" id="Nome" placeholder="Nome" value={Nome}
                  onChange={(e) => setNome(e.target.value)} required />
                  </TextRevealOnce>
                  <TextRevealOnce>
                <label htmlFor="Email" required />
                <input type="text" id="Email" placeholder="E-mail" value={Email}
                  onChange={(e) => setEmail(e.target.value)} required />
                  </TextRevealOnce>
                  
              </div>
              <div className="InputMensagem">
              <TextRevealOnce>
                <label htmlFor="Msg" required />
                <input type="text" id="Mensagem" placeholder="Mensagem"
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)} required/>
                  </TextRevealOnce>
              </div>

              <div className="confirmacoes">
                <div className="Botao-de-envio">
                <TextRevealOnce>
                  <button type="submit" className="Botao-apresenta1">
                    Enviar Mensagem
                  </button>
                  </TextRevealOnce>
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