import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='Home'>
        <div className="content">
            <div className="name">
                SOMOS <span>SOFTTURIN</span>
            </div>
            <div className="des">
                {/* 30 */}
                En nuestra empresa, nos especializamos en brindar soluciones tecnológicas innovadoras para ayudarte a alcanzar tus objetivos de negocio. Ofrecemos servicios profesionales en tres áreas clave: Páginas Web, Sistemas ERP y eCommerce.
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/Monica_Monica_2024-05-30_14_22_27-removebg-preview.png" alt="" />
                <div className="info">
                    <div>Desarrollo web</div>
                    <div>ERP</div>
                    <div>03/12</div>
                    <div>03/12</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
