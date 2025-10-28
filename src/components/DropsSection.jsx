import Drop from './Drop.jsx'
import { useState } from 'react'
import { drops as initialDrops } from '../data/drops.js'
import { thousandSuffixes } from '../data/suffixes.js'
import { formatCost } from '../data/formatCost.js'

import './DropsSection.css'

export default function DropsSection ({milfoPoints, setMilfoPoints, pointsAutoGain, setPointsAutoGain}) {
  const [drops, setDrops] = useState(initialDrops);

  const handleClickDrop = (index) => {
    const newDrops = [...drops];
    if (!newDrops[index].active && newDrops[index].cost <= milfoPoints) { 
      setMilfoPoints(milfoPoints - drops[index].cost);
      newDrops[index].active = true;
      newDrops[index].cost = newDrops[index].cost * 1.15; 
      newDrops[index].level += 1;
      setPointsAutoGain(pointsAutoGain + newDrops[index].autoGain);
      setDrops(newDrops);
    }else if (newDrops[index].active && newDrops[index].cost <= milfoPoints) {
      setMilfoPoints(milfoPoints - newDrops[index].cost);
      newDrops[index].cost = newDrops[index].cost * 1.15; 
      newDrops[index].level += 1;
      setPointsAutoGain(pointsAutoGain + newDrops[index].autoGain);
      setDrops(newDrops);
    } 
  };

  return (
    <section className='sectionDrops'>
      {
        drops.map((drop, key) => (
          <Drop
            key={key}
            dropImage={drop.dropImg}
            dropName={drop.name}
            dropCost={drop.cost}
            dropAutoGain={drop.autoGain}
            dropActive={drop.active}
            dropLevel={drop.level}
            thousandSuffixes={thousandSuffixes}
            formatCost={formatCost}
            onClick={() => handleClickDrop(key)}
          />
        ))
      }
    </section>
  );
}