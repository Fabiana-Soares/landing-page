import React from 'react';
import beatriz from '../../img/beatriz.png';
import camila from '../../img/camila.png';
import guto from '../../img/guto.png';
import david from '../../img/david.png';
import './Team.css';


function Team(){
  return (
    <team className="team">
      <div className='people'>
        <div className='center'>

          <div className="video">
            <iframe
              className="content-video"
              title="ceo-video"
              width="400"
              height="210"
              src="https://www.youtube.com/embed/UQ2-6gk9Szs"
            >
            </iframe>
              
            <div className="presentation">
              <div>
                <h3 className='to-uppercase'>PALAVRA DO CEO</h3>
                <h4 className='ceo-name'>Carlos Curioni</h4>
              </div>

              <div>
                <p>
                  Carlos Curioni vai contar um pouco da nossa história e junto do Guto Araújo, 
                  nosso COO, apresentar novidades no Elo7 para ajudar nossos vendedores criativos a gerenciar os pedidos de forma muito prática! Vem ver!
                </p>
              </div>
            </div>
          </div>
        </div>
          

        <div className='time'>
          <div className='center'>
            <div className="content-time">
              <h3>CONHEÇA NOSSO TIME FORA DE SÉRIE</h3>

              <div className="home-img">
                <img src={camila} alt="Camila" class="image" />
                <div className="container">
                  <p>
                    "Autonomia nos atendimentos, bom ambiente de trabalho, 
                    valorização do profissional, otimos beneficios..."
                  </p>
                </div>
                  <h3>Camila</h3>
              </div>

              <div class="home-img">
                <img src={guto} alt="Guto" class="image"/>
                <div className="container">
                  <p>
                    "Home office, os colegas de trabalho se ajudam, a gestão tenta atender as 
                    solicitações dos funcionários e é aberta as propostas de melhoria."  
                  </p>
                </div>
                <h3>Guto</h3>
              </div>

              <div className="home-img">
                <img src={david} alt="David" class="image"/>
                <div className="container">
                  <p>
                    "Os times são muito colaborativos, o ambiente mesmo remoto é 
                    muito interativo, o dia a dia é leve mas com muito desafios!"
                  </p>
                </div>
                  <h3>David</h3>
              </div>

              <div className="home-img">
                <img src={beatriz} alt="Beatriz" class="image"/>
                <div className="container">
                  <p>
                    "Equipe muito competente e amigável, ambiente tranquilo, flexibilidade, 
                    programas de desenvolvimento para funcionários. Também oferece ótimo pacote de benefícios."
                  </p>
                </div>
                  <h3>Beatriz</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </team>
  )
}

export default Team;