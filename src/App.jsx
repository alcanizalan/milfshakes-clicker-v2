import { useEffect, useState, createContext, useContext, useReducer   } from 'react'

import Header from './components/Header.jsx'
import DropsSection from './components/DropsSection.jsx'
import MilfoSection from './components/MilfoSection.jsx'
import UpgradesSection from './components/UpgradesSection.jsx'

import imageDrop1 from './assets/drops_1.png'
import imageDrop2 from './assets/drops_2.png'
import imageDrop3 from './assets/drops_3.png'
import imageDrop4 from './assets/drops_4.png'
import imageDrop5 from './assets/drops_5.png'
import imageDrop6 from './assets/drops_6.png'
import imageDrop7 from './assets/drops_7.png'

import './App.css'

let drops = [
    { //drop 1
        idDrop: "drp-001", 
        name: "001 - Hot Milfs", 
        cost: 100, 
        autoGain: 0.5, 
        active: false, 
        level: 0,
        dropImg: imageDrop1,
    },
    { //drop 2
      idDrop: "drp-002", 
      name: "002 - Cherry Shoes", 
      cost: 1000, 
      autoGain: 6, 
      active: false, 
      level: 0,
      dropImg: imageDrop2,
    },
    { //drop 3
      idDrop: "drp-003", 
      name: "003 - Air Wish", 
      cost: 8000, 
      autoGain: 32, 
      active: false, 
      level: 0, 
      dropImg: imageDrop3
    },
    { //drop 4
      id: "drp-004", 
      name: "004 - Milfo", 
      cost: 22000, 
      autoGain: 102, 
      active: false, 
      level: 0, 
      dropImg: imageDrop4
    },
    { //drop 5
      id: "drp-005", 
      name: "005 - Skate", 
      cost: 114000, 
      autoGain: 564, 
      active: false, 
      level: 0, 
      dropImg: imageDrop5
    },
    { //drop 6
      id: "drp-006", 
      name: "006 - ESSNTLS", 
      cost: 1800000, 
      autoGain: 1660, 
      active: false, 
      level: 0, 
      dropImg: imageDrop6
    },
    { //drop 7
      id: "drp-007", 
      name: "007 - Casco Malamanera", 
      cost: 21000000, 
      autoGain: 12210, 
      active: false, 
      level: 0, 
      dropImg: imageDrop7
    },
]

let PPC = 10;

export default function App() {
  const [milfoPoints, setMilfoPoints] = useState(0);
  const [dropsState, setDropsState] = useState(drops);
  const [pointsAutoGain, setPointsAutoGain] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMilfoPoints(prev => prev + pointsAutoGain);
    }, 1000);

    return () => clearInterval(timer);
  }, [pointsAutoGain]);  
  
  return (
    <div className='sectionMain'>
      <Header />
      <DropsSection 
        drops={dropsState} 
        setDropsState={setDropsState} 
        milfoPoints={milfoPoints} 
        setMilfoPoints={setMilfoPoints} 
        pointsAutoGain={pointsAutoGain}
        setPointsAutoGain={setPointsAutoGain}
        />
      <MilfoSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} PPC={PPC}/>
      <UpgradesSection />
    </div>
  )
}
