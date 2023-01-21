import React from 'react';
import './header.css';

function Header(){
  return(
    <header className="header">
      <div className="center">
        <div alt="Elo7 people" className="imagem">
          <h1 className="title-header">Trabalhe no Elo7</h1> 
        </div>     
      </div>

      <section className="content-about">
        <div className="center">
          <p className="content-about-elo7">
            O Elo7 nasceu, em 2008, de um sonho de valorizar o trabalho 
            artesanal brasileiro através da internet. Tivemos como grande inspiração o 
            grupo Etsy e, hoje, fazemos parte de sua House of Brands global (+ Etsy, Reverb e Depop).
            Criamos, então, uma conexão global de pessoas que acreditam que a criatividade, a humanização, 
            o empreendedorismo e a tecnologia podem fazer a diferença em milhões de vidas.
          </p>
        </div>

        <div className="center">
          <a href="https://www.linkedin.com/company/elo7/jobs/" className="link">
            VAGAS EM ABERTO &#187;
          </a>
        </div>
      </section>
    </header>
  )
}

export default Header;
