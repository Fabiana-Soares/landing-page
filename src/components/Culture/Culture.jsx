import React from "react";
import qualidade from "../../img/qualidade.png";
import descontracao from '../../img/descontracao.png';
import atividades from '../../img/atividades.png';
import "./Culture.css"


function Culture(){
  return (
    <culture className="culture">
      <div className='cultura'>
          <div className='center'>
            <div className="container-cultura">
              <img src={qualidade} alt="Qualidade"/>
              <div className="conteudo-cultura">
              <h3>QUALIDADE DE VIDA</h3>
              <p>
                Cultura colaborativa <br/>
                Oportunidade de crescimento <br/>
                Foco em aprendizado,<br/> 
                Compartilhamento de conhecimento,<br/>
                Meditação<br/>
                Ginástica Laboral<br/>
                Day off de aniversário

              </p>
              </div>
            </div>

            <div className="container-cultura">
              <img src={descontracao} alt="Descontração"/>
              <div className="conteudo-cultura">
              <h3>AMBIENTE DESCONTRAÍDO</h3>
              <p>
                Aqui você tem a facilidade para conversas entre equipes, ajudar no desenvolvimento 
                de features, temos grupos de estudos, digamos então que é um ambiente de desafios e aprendizados.
                O Elo7 é uma empresa realmente acolhedora!
              </p>
              </div>
            </div>

            <div className="container-cultura">
              <img src={atividades} alt="Atividades"/>
              <div className="conteudo-cultura">
              <h3>ATIVIDADES EXTRAS</h3>
              <p>
                Algun dias de Hacking. Esse momento serve para propor novas tecnologias
                ou tendo a oportunidade de codar em outra área<br/>
                Grupos de estudos , onde você pode aprender como ensinar alguma tecnologia nova.
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className='center'>
          <a href="https://www.linkedin.com/company/elo7/about/" className="link">
            SAIBA MAIS &#187;
          </a>
        </div>
    </culture>
          
  )  
}

export default Culture;
