import Drop from './Drop.jsx'

import './DropsSection.css'

export default function DropsSection ({drops, setDropsState, milfoPoints, setMilfoPoints,pointsAutoGain, setPointsAutoGain, thousandSuffixes, formatCost}) {
  const handleClickDrop = (index) => {
    const newDrops = [...drops];
    if (!drops[index].active && drops[index].cost <= milfoPoints) { 
      setMilfoPoints(milfoPoints - drops[index].cost);
      newDrops[index].active = true;
      newDrops[index].cost = newDrops[index].cost * 1.15; 
      newDrops[index].level += 1;
      setPointsAutoGain(pointsAutoGain + newDrops[index].autoGain);
      setDropsState(newDrops);
    }else if (drops[index].active && drops[index].cost <= milfoPoints) {
      setMilfoPoints(milfoPoints - drops[index].cost);
      newDrops[index].cost = newDrops[index].cost * 1.15; 
      newDrops[index].level += 1;
      setPointsAutoGain(pointsAutoGain + newDrops[index].autoGain);
      setDropsState(newDrops);
    } 
  };

  return (
    <section className='sectionDrops'>
      {
        drops.map((drop, index) => (
          <Drop
            key={drop.idDrop}
            dropImage={drop.dropImg}
            dropName={drop.name}
            dropCost={drop.cost}
            dropAutoGain={drop.autoGain}
            dropActive={drop.active}
            dropLevel={drop.level}
            thousandSuffixes={thousandSuffixes}
            formatCost={formatCost}
            onClick={() => handleClickDrop(index)}
          />
        ))
      }
    </section>
  );
}