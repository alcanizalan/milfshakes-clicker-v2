import { useEffect, useState, createContext, useContext, useReducer   } from 'react'

import Header from './components/Header.jsx'
import DropsSection from './components/DropsSection.jsx'
import MilfoSection from './components/MilfoSection.jsx'
import UpgradesSection from './components/UpgradesSection.jsx'

import './App.css'



function formatCost(cost, suffixes) {
    let coste = cost;
    let digits = 0;
    let suffix = "";

    while (coste >= 1000){
        coste = coste / 1000;
        digits = digits + 1;
    } 
    suffix = suffixes[digits];
    if (digits>=1){
      coste = Math.floor(coste*100)/100
    }else{
      coste = Math.floor(coste)
    }
    
    let resultadoFormateo = coste + "" + suffix;
    return resultadoFormateo;
}

let PPC = 100;

export default function App() {
  const [milfoPoints, setMilfoPoints] = useState(0);
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
        milfoPoints={milfoPoints} 
        setMilfoPoints={setMilfoPoints} 
        pointsAutoGain={pointsAutoGain}
        setPointsAutoGain={setPointsAutoGain}
        formatCost={formatCost}
        />
      <MilfoSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} PPC={PPC} formatCost={formatCost} />
      <UpgradesSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} />
    </div>
  )
}
