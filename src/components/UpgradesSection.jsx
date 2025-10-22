import {useState} from 'react'
import SectionButtons from './SectionButtons'
import { buttonsPowerUp } from '../data/buttonsPowerUps.js'

import './UpgradesSection.css'

export default function UpgradesSection ({milfoPoints, setMilfoPoints}) {
    const [copyButtons, setCopyButtons] = useState(buttonsPowerUp)

    return(
        <section className='sectionUpgrades'>
            {
                copyButtons.map((copyButton, key) => {
                    return(
                        <SectionButtons 
                        copyButton={copyButton} 
                        setCopyButtons={setCopyButtons}
                        milfoPoints={milfoPoints} 
                        setMilfoPoints={setMilfoPoints}
                        key={key}
                        />
                    )
                })
            }
        </section>
    )
}