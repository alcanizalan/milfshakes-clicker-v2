import SectionButtons from './SectionButtons'

import './UpgradesSection.css'

import imageButton1 from '../assets/buttonMilfoLvl1.png'
import imageButton2 from '../assets/buttonMilfoLvl2.png'
import imageButton3 from '../assets/buttonMilfoLvl3.png'
import imageButton4 from '../assets/buttonMilfoLvl4.png'
import imageButton5 from '../assets/buttonMilfoLvl5.png'
import imageButton6 from '../assets/buttonRitaLvl1.png'
import imageButton7 from '../assets/buttonRitaLvl2.png'
import imageButton8 from '../assets/buttonRitaLvl3.png'
import imageButton9 from '../assets/buttonRitaLvl4.png'
import imageButton10 from '../assets/buttonRitaLvl5.png'
import imageButton11 from '../assets/buttonWoolLvl1.png'
import imageButton12 from '../assets/buttonWoolLvl2.png'
import imageButton13 from '../assets/buttonWoolLvl3.png'
import imageButton14 from '../assets/buttonWoolLvl4.png'
import imageButton15 from '../assets/buttonWoolLvl5.png'


let buttonsPowerUp = [
    {
        idSectionPowerUp: "sbt-1",
        containerButtons: [
        {
            idButton: "bt-1",
            imgButton: imageButton1,
            active: false
        },
        {
            idButton: "bt-2",
            imgButton: imageButton2,
            active: false
        },
        {
            idButton: "bt-3",
            imgButton: imageButton3,
            active: false
        },
        {
            idButton: "bt-4",
            imgButton: imageButton4,
            active: false
        },
        {
            idButton: "bt-5",
            imgButton: imageButton5,
            active: false
        }
    ]},
    {
        idSectionPowerUp: "sbt-2",
        containerButtons: [
        {
            idButton: "bt-6",
            imgButton: imageButton6,
            active: false
        },
        {
            idButton: "bt-7",
            imgButton: imageButton7,
            active: false
        },
        {
            idButton: "bt-8",
            imgButton: imageButton8,
            active: false
        },
        {
            idButton: "bt-9",
            imgButton: imageButton9,
            active: false
        },
        {
            idButton: "bt-10",
            imgButton: imageButton10,
            active: false
        }
    ]},
    {
        idSectionPowerUp: "sbt-3",
        containerButtons: [
        {
            idButton: "bt-11",
            imgButton: imageButton11,
            active: false
        },
        {
            idButton: "bt-12",
            imgButton: imageButton12,
            active: false
        },
        {
            idButton: "bt-13",
            imgButton: imageButton13,
            active: false
        },
        {
            idButton: "bt-14",
            imgButton: imageButton14,
            active: false
        },
        {
            idButton: "bt-15",
            imgButton: imageButton15,
            active: false
        }
    ]}
]

export default function UpgradesSection () {
    return(
        <section className='sectionUpgrades'>
            {
                buttonsPowerUp.map(({idSectionPowerUp, containerButtons}) => {
                    return(
                        <SectionButtons idSectionPowerUp={idSectionPowerUp} containerButtons={containerButtons} />
                    )
                })
            }
        </section>
    )
}