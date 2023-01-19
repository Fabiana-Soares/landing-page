import './App.css';
import beatriz from './img/beatriz.png';
import camila from './img/camila.png';
import guto from './img/guto.png';
import david from './img/david.png';
import qualidade from './img/qualidade.png';
import descontracao from './img/descontracao.png';
import atividades from './img/atividades.png';
import bottom from './img/foto-bottom.png';
import placeholder from './img/placeholder-video.png';


function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <h1>Trabalhe no Elo7</h1>      
          </div>
        </div>
      </div>

      <div className="conteudo">
        <div className="center">
          <div className="conteudo-sobre">
            <p>O Elo7 nasceu, em 2008, de um sonho de valorizar o trabalho artesanal brasileiro através da internet. Tivemos como grande inspiração o grupo Etsy e, hoje, fazemos parte de sua House of Brands global (+ Etsy, Reverb e Depop). Criamos, então, uma conexão global de pessoas que acreditam que a criatividade, a humanização, o empreendedorismo e a tecnologia podem fazer a diferença em milhões de vidas.</p>
          </div>
        </div>
      </div>

      <div className='link'>
        <div className='center'>
          <div className="link-vaga">
              <a href="#">VAGAS EM ABERTO</a>
          </div>
        </div>
      </div>

      <div className="conteudo-video">
        <div className="center">
          <div className="apresentacao">
            <div className="video">
              <img src={placeholder} alt="Video"/>
            </div>
          </div>

          <div className="apresentacao">
            <h3>PALAVRA DO CEO</h3>
            <h4>Carlos Curioni</h4>
            <p>
              Carlos Curioni vai contar um pouco da nossa história e junto do Guto Araújo, 
              nosso COO, apresentar novidades no Elo7 para ajudar nossos vendedores criativos a gerenciar os pedidos de forma muito prática! Vem ver!
            </p>
          </div>
        </div>
      </div>

     

      <div className='time'>
        <div className='center'>
          <div className="conteudo-time">
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

      <div className='link'>
        <div className='center'>
          <div className="link-vaga">
              <a href="#">SAIBA MAIS</a>
          </div>
        </div>
      </div>

      <div className="evento">
        <div className="center">
          <div className="conteudo-time">
            <div className="home-img">
              <img src={ bottom } alt="bottom"/>
            </div>
          </div>
        </div>
      </div>

      <div className='vagas'>
        <div className='center'>
          <div className="link-vaga">
          <h3>VAGAS EM ABERTO</h3>
          
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
