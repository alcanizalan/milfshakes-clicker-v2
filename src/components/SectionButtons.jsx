import './SectionButtons.css'

import Button from './Button.jsx'

export default function SectionButtons ({copyButton, setCopyButton}) {
    
    const handleClickButton = (index) => {
        const newButtons = [...copyButton]
        if(newButtons.containerButtons[index].active == false){
            newButtons.containerButtons[index].active = true
            setCopyButton(newButtons)
        }
    }

    return(
        <section id={copyButton.idSectionPowerUp} className='containerForButtons'>
            {
            copyButton.containerButtons.map((button, index) => {
                return(
                    <Button 
                        handleClickButton={() => handleClickButton(index)}
                        idButton={button.idButton}
                        imgButton={button.imgButton}
                        activeButton={button.active}
                        costButton={button.buttonCost}
                        index={index}
                    />
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