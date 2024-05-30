import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel, faNode, faPhp, faPython} from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'HTML es el lenguaje de marcado estándar para páginas web.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: '🌐 CSS (Cascading Style Sheets) significa "Hojas de estilo en cascada" y se basa en un concepto simple pero poderoso',
    icon: faCss3
  },
  {
    name: 'Node.js',
    des: 'Un entorno de ejecución de código JavaScript que te permite ejecutar código JavaScript fuera del navegador web',
    icon: faNode},
  {
    name: 'ReactJs',
    des: 'React es una biblioteca JavaScript de código abierto para crear interfaces de usuario.',
    icon: faReact
  },
  {
    name: 'PHP',
    des: 'PHP (acrónimo recursivo de "PHP: Hypertext Preprocessor") es un lenguaje de programación de código abierto muy popular, especialmente adecuado para el desarrollo web.',
    icon: faPhp
  },
  {
    name: 'Python',
    des: 'Python es un lenguaje de programación de alto nivel, de propósito general y de código abierto.',
    icon: faPython
  }

]);
  return (
    <section className='Habilidades' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Nuestras habilidades
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Desde el desarrollo ágil de software hasta el diseño centrado en el usuario, pasando por la gestión eficiente de proyectos y la implementación de estrategias de marketing digital, nuestro equipo está equipado con las habilidades necesarias para abordar cualquier desafío con confianza y creatividad.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

