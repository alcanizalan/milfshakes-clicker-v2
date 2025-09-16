
import './drop.css'

export default function Drop ({dropImage, dropName, dropCost, dropAutoGain, dropActive, dropLevel, onClick}) {
    const buttonClass = dropActive ? "drop-not-blocked" : "drop-blocked";
    return(
        <button className="div-levels" onClick={onClick}>
            <div className={buttonClass}>
                <p>{dropCost}</p>
                <img src="../assets/mpoints.png" alt="" />
            </div>
            <div className="level">
                <p>{dropLevel}</p>
            </div>
            <div className="drop_img">
                <img src={dropImage} alt="" />
            </div>
            <div className="drop_names">
                <p>{dropName}</p>
                <div className='unknownLevel'>
                    <p className='unknownLevelp'>{dropCost}</p>
                    <img src='../assets/mpoints2Red.png' alt="" className='unknownLevelImg' />
                </div>
            </div>
        </button>
    )
}