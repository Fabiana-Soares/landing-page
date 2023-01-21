import React, { useState, useEffect } from 'react';
import bottom from "../../img/foto-bottom.png";
import './OpenJob.css';


function OpenJob() {
  const [ job, setJob ] = useState([])

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d6fb6b1310000f89166087b')
      .then(res => res.json())
      .then(res => setJob(res.vagas))
  }, [])

  const place = ({ localizacao }) => {
    if (localizacao) {
      return (
        <div>
          {
          `${localizacao.bairro} - ${localizacao.cidade}, ${localizacao.pais}`
          }
        </div>
      )
    }
    return 'Remoto'
  }

  const getJob = () => {
    return job.map((job, index) => {
      if (!job.ativa) return null
      
      return (
        <div key={index} className="job-list">
          <div>
            <a href="https://www.linkedin.com/company/elo7/jobs/" target="_blank" className="link-description" >
              {job.cargo}
            </a>
          </div>
          <div>{place(job)}</div>
        </div>
      )
    })
  }

  return (
    <div className="content-job" id="content-job-id">
      <div className="center">
        <img className="event" alt="evento da elo7" src={bottom} />
        <h3 className="title">
          Vagas em aberto
        </h3>
        <div className="title-development">
          <h3 className="category">Desenvolvimento</h3>
        </div>
        {getJob()}
      </div>
    </div>
  )
}

export default OpenJob;