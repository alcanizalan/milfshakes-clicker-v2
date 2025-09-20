import {useState} from 'react';

import './SectionButtons.css'

export default function SectionButtons ({idSectionPowerUp, containerButtons}) {
    const [show, setShow] = useState(false)

    return(
        <section id={idSectionPowerUp} className='containerForButtons'>
            {
            containerButtons.map(({idButton, imgButton}) => {
                return(
                    <div 
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                        className='mensageBotones'
                    >
                        <button title='mensaje' className="shopItem" key={idButton}>
                            <img className="imgShop" src={imgButton} alt="Imagen Milfo" />
                        </button>
                        <div className={`mensage ${show ? "show" : ""}`}>
                            <span>123</span>
                        </div> 
                    </div>
                )
            })
        }
    </section>
    )
}
//return(
//                    <button title='mensaje' className="shopItem" key={idButton}>
//                        <img className="imgShop" src={imgButton} alt="Imagen Milfo" />
//                    </button>
//                )