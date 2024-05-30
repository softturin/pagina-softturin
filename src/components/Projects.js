import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Cuerata',
      des: 'Creada en 2004 por Maribel Yepes Castañeda, es una marca colombiana que encarna la excelencia en artículos de cuero 100% natural, confeccionados a mano. Nuestras colecciones ofrecen diseños atemporales, clásicos y elegantes, adaptándose a diversos estilos de vida.',
      mission: 'Desarrollo Frontend',
      language: 'Wordpress',
      images: '/cuerata.PNG',
      link: 'https://cuerata.com/'
    },
    {
      name: 'Todo Carpas',
      des: 'Impermeabilizaciones y Estructuras Somos una empresa con mas de 30 años de experiencia en el mercado',
      mission: 'Desarrollo Frontend y  Backend',
      language: 'HTML5, CSS3, JS.',
      images: '/todoCarpas.png',
      link: 'http://todocarpas.com.co/'
    },
    {
      name: 'Jystore',
      des: 'El E-commerce que permite alcanzar niveles superiores',
      mission: 'Desarrollo Frontend y Backend',
      language: 'HTML5, CSS3, JS',
      images: '/tienda.PNG',
      link: 'https://jystore.netlify.app/'
    }
  ]);
  
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='Proyectos' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Nuestros proyectos
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        A tu medida
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt={value.name} />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Misión</h4>
                    <div className="des">{value.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Lenguajes</h4>
                    <div className="des">{value.language}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4><a href={value.link} target="_blank" rel="noopener noreferrer">Presione aqui para ver</a></h4>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Projects;

