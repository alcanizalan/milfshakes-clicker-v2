import {useState} from 'react'
import './drop.css'


export default function Drop ({dropImage, dropName, dropCost, dropAutoGain, dropActive, dropLevel, onClick, thousandSuffixes, formatCost}) {
    const buttonClass = dropActive ? "drop-not-blocked" : "drop-blocked";

    const formatedCost = formatCost(dropCost, thousandSuffixes);

    const priceResponsive = dropActive != true ? "???" : formatedCost;
    const nameResponsive = dropActive != true ? "???" : dropName;
    const levelResponsive = dropActive != true ? "" : dropLevel;

    return(
        <button className="div-levels" onClick={onClick}>
            <div className={buttonClass}>
                <p>{formatedCost}</p>
                <img src="../assets/mpoints.png" alt="" />
            </div>
            <div className="level">
                <p>{levelResponsive}</p>
            </div>
            <div className="drop_img">
                <img src={dropImage} alt="" />
            </div>
            <div className="drop_names">
                <p>{nameResponsive}</p>
                <div className='unknownLevel'>
                    <p className='unknownLevelp'>{priceResponsive}</p>
                    <img src='../assets/mpoints2Red.png' alt="" className='unknownLevelImg' />
                </div>
            </div>
        </button>
    )
}