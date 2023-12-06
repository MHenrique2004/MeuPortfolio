import React from 'react'
import './Styles/NavBar.css' 
import TextReveal from './TextReveal'
import TextRevealOnce from './TextRevealOnce'


function NavBar() {
    return (
        <div className="container">
            <TextRevealOnce>
            <div className="logo">
                <a href="/"><img src="https://i.imgur.com/gVc2Fa1.png" alt="" /></a>
            </div>
             </TextRevealOnce>
            <div className="navbar">
                <TextRevealOnce>
                <nav>
                <a href="/Projetos">Projetos</a>
                <a href="/Sobre">Sobre</a>
                <a href="/Contato">Contato</a>
                </nav>
                </TextRevealOnce>
                
            </div>
           
        </div>
    )
}

export default NavBar
