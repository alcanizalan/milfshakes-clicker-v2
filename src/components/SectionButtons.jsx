import './SectionButtons.css'

export default function SectionButtons ({idSectionPowerUp, containerButtons}) {
    return(
        <section id={idSectionPowerUp} className='containerForButtons'>
            {
            containerButtons.map(({idButton, imgButton}) => {
                return(
                    <button className="shopItem" key={idButton}>
                        <img className="imgShop" src={imgButton} alt="Imagen Milfo" />
                    </button>
                )
            })
        }
    </section>
    )
}