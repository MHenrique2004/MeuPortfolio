import React from 'react'

function Contactme() {
  return (
    <>

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

    </>
  )
}

export default Contactme