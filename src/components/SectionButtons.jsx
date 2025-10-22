import './SectionButtons.css'

import Button from './Button.jsx'

export default function SectionButtons ({copyButton, setCopyButton, milfoPoints, setMilfoPoints}) {
    const handleClickButton = (key) => {
        const newButtons = [...copyButton]
        if(newButtons[key].active == false && newButtons[key].buttonCost <= milfoPoints){
            setMilfoPoints(milfoPoints - newButtons[key].buttonCost);
            newButtons[key].active = true
            setCopyButton(newButtons)
        }  
    }

    return(
        <section className='containerForButtons'>
            {
            copyButton.map((button, key) => {
                return(
                    <Button 
                        key={button.idButton}
                        handleClickButton={() => handleClickButton(key)}
                        idButton={button.idButton}
                        imgButton={button.imgButton}
                        activeButton={button.active}
                        costButton={button.buttonCost}
                    />
                )
            })
        }
    </section>
    )
}