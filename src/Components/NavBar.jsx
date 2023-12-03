import React from 'react'
import './Styles/NavBar.css' 

function NavBar() {
    return (
        <div className="container">
            <div className="logo">
                <a href="/"><img src="src/assets/Logo.png" alt="" /></a>
            </div>
            <div className="navbar">
                <nav>
                <a href="/Projetos">Projetos</a>
                <a href="/Sobre">Sobre</a>
                <a href="/Contato">Contato</a>
                </nav>
            </div>
        </div>
    )
}

export default NavBar