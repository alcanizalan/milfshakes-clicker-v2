import { useEffect, useState } from 'react'

import Header from './components/Header.jsx'
import DropsSection from './components/DropsSection.jsx'
import MilfoSection from './components/MilfoSection.jsx'
import UpgradesSection from './components/UpgradesSection.jsx'
import Login from './components/Login.jsx'

import './App.css'





let PPC = 100;

export default function App() {
  const [milfoPoints, setMilfoPoints] = useState(0);
  const [pointsAutoGain, setPointsAutoGain] = useState(0);
  const [alternarLogin, setAlternarLogin] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setMilfoPoints(prev => prev + pointsAutoGain);
    }, 1000);

    return () => clearInterval(timer);
  }, [pointsAutoGain]);  
  
  return (
    <div className='sectionMain'>
      <Login alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} />
      <Header alternarLogin={alternarLogin} setAlternarLogin={setAlternarLogin} />
      <DropsSection 
        milfoPoints={milfoPoints} 
        setMilfoPoints={setMilfoPoints} 
        pointsAutoGain={pointsAutoGain}
        setPointsAutoGain={setPointsAutoGain}
        />
      <MilfoSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} PPC={PPC}/>
      <UpgradesSection milfoPoints={milfoPoints} setMilfoPoints ={setMilfoPoints} />
    </div>
  )
}
