import { useState } from 'react'
import { thousandSuffixes } from '../data/suffixes.js'
import { formatCost } from '../data/formatCost.js'

import './MilfoSection.css'

import milfoLayer1 from '../assets/milfoclickv1_capa1.png'
import milfoLayer2 from '../assets/milfoclickv1_capa2.png'
import milfoLayer3 from '../assets/milfoclickv1_capa3.png'
import milfoLayer4 from '../assets/milfoclickv1_capa4.png'
import milfoLayer5 from '../assets/milfoclickv1_capa5.png'
import milfoLayer6 from '../assets/milfoclickv1_capa6.png'


export default function MilfoSection ({milfoPoints, setMilfoPoints, PPC}) {
    const formatedPoints = formatCost(milfoPoints, thousandSuffixes);
    const [isScaled, setIsScaled] = useState(false);

    const handleClick = () => {
        setMilfoPoints(milfoPoints + PPC)
        setIsScaled(true);
        const clickSound = new Audio('src/assets/sounds/pop.mp3');
        clickSound.play();
        setTimeout(() => {
            setIsScaled(false);
        }, 100);
    }

    return(
        <section className='sectionMilfo'>
            <div className='hitBox' onClick={handleClick}></div>
            <div className='sectionClickableMilfo'>
                <div id="divError">
                    <p id="pError"></p>
                </div>
                <img src={milfoLayer1} className="milfo-img milfo-img-1" alt="" />
                <img src={milfoLayer2} className={`milfo-img milfo-img-2 ${isScaled ? "scaled" : ""}`} alt="" />
                <img src={milfoLayer3} className="milfo-img milfo-img-3" alt="" />
                <img src={milfoLayer4} className="milfo-img milfo-img-4" alt="" />
                <img src={milfoLayer5} className="milfo-img milfo-img-5" alt="" />
                <img src={milfoLayer6} className="milfo-img milfo-img-6" alt="" />
            </div>
            <div className='sectionCounter'>
                <p id="milfo-points">{formatedPoints}</p>
                <img className='mifoPoints' alt="" />
            </div>
        </section>
    )
}