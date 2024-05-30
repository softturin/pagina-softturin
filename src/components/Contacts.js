import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Numero de telefono',
      link: '+57 3136000998',
      href: 'tel:+573136000998'
    },
    {
      title: 'Correo electronico',
      link: 'Softturin2024@gmail.com',
      href: 'mailto:Softturin2024@gmail.com'
    },
    {
      title: 'Facebook',
      link: '@SOFTTURIN',
      href: 'https://www.facebook.com/profile.php?id=61557354909783&sk=about_contact_and_basic_info'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='Contactanos' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Habla con nosotros
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
      ¡Nos encantaría saber de ti! Si tienes alguna pregunta, comentario o simplemente quieres saludar, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y brindarte la mejor atención posible. Puedes enviarnos un correo electrónico o llamarnos directamente. ¡Esperamos tener noticias tuyas pronto!
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>
                <a href={value.href} target="_blank" rel="noopener noreferrer">{value.link}</a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Contacts;

