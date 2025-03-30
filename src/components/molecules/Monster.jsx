import { useEffect, useState } from 'react'
import monster from '../../assets/monster.svg';

function Monster() {
  const [monsterclass, setMonsterClass] = useState("")
  const [bgclass, setBgclass] = useState("")

  useEffect(() => {
    setBgclass("bg--move")
    const interval = setInterval(() => {
      setMonsterClass(prevClass => prevClass === "monster--move" ? "" : "monster--move");
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className={`bg ${bgclass}`}>
        <div className="monster-wrapper motion-safe:animate-bounce absolute right-0 top-[30%]">
          <img className={`monster ${monsterclass}`} src={monster} width="120" height="120"/>
        </div>
      </div>
    </div>
  )

}

export default Monster;