import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CustomHook = (refTab = null, refList = null) => {
    const scrollTab = refTab;
    const divs = refList;
    const activeTab = useSelector(state => state.activeTab);

    useEffect(() => {
        if(scrollTab && scrollTab.current && scrollTab.current.classList.contains(activeTab)){
            const componentNode = scrollTab.current;
            componentNode.scrollIntoView({ behavior: 'smooth' });
        }
        if(divs !== null && divs.current){
            divs.current.forEach((div) => {
                div.classList.add('animation');
            });
            const handlScroll = () => {
                const scrollPosition = window.scrollY;
                divs.current.forEach((div) => {
                    const offsetTop = div.getBoundingClientRect().top + scrollPosition;
                    if (scrollPosition >= offsetTop - (window.innerHeight / (1.5))) {
                        div.classList.add('active');
                    } else {
                        div.classList.remove('active');
                    }
                });
            };
            window.addEventListener('scroll', handlScroll);

            return () => {
                // Limpiar el listener del evento scroll cuando el componente se desmonte
                window.removeEventListener('scroll', handlScroll);
            };
        }
    }, [activeTab, divs, scrollTab]);

    // Si necesitas devolver algo desde el hook, puedes hacerlo aquí.
};

export default CustomHook;
