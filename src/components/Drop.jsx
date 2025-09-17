import {useState} from 'react'
import './drop.css'

const thousandSuffixes = ["", "K", "M", "B", "T", "Qa", "Qi", "S", "Oc", "No", "D"];

function formatCost(cost, suffixes) {
    let coste = cost;
    let digits = 0;
    let suffix = "";

    while (coste >= 1000){
        coste = coste / 1000;
        digits = digits + 1;
    } 
    suffix = suffixes[digits];
    coste = Math.floor(coste)
    let resultadoFormateo = coste + "" + suffix;
    return resultadoFormateo;
}


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