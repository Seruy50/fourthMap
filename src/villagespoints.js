import React from 'react';
import './App.css'
import map from './map 4.jpg'
import {villages} from './villages.js'


export function VillagesPoints({setShow, setCurrentId}){
    

    const currentInfo = (id) => {
        setCurrentId(id);
        setShow(true);
      }

    
  return <div className="map">
    <img src={map}  alt="noMap" ></img>
    <Village /* 1*/typeOfMarker='white' top={8} left={4} currentInfo={currentInfo} id={1}/>
    <Village typeOfMarker='black' top={10} left={21} currentInfo={currentInfo} id={2}/>
    <Village typeOfMarker='black' top={21} left={72} currentInfo={currentInfo} id={3}/>
    <Village typeOfMarker='black' top={18} left={31} currentInfo={currentInfo} id={4}/>
    <Village /* v4, v5, v8, v18, v35*/typeOfMarker='yellow' top={22} left={7} currentInfo={currentInfo} id={5}/>
    
    <Village /* 6*/typeOfMarker='yellow' top={22} left={15} currentInfo={currentInfo} id={6}/>
    <Village typeOfMarker='yellow' top={22.5} left={21} currentInfo={currentInfo} id={7}/>
    <Village typeOfMarker='black' top={25} left={62} currentInfo={currentInfo} id={8}/>
    <Village typeOfMarker='green' top={26.5} left={73} currentInfo={currentInfo} id={9}/>
    <Village /* v37, v38, v45, v46, v55*/typeOfMarker='black' top={30} left={9} currentInfo={currentInfo} id={10}/>
    
    <Village /* 11*/typeOfMarker='black' top={35} left={62} currentInfo={currentInfo} id={11}/>
    <Village typeOfMarker='black' top={34} left={15} currentInfo={currentInfo} id={12}/>
    <Village typeOfMarker='black' top={39} left={77} currentInfo={currentInfo} id={13}/>
    <Village typeOfMarker='black' top={40} left={6} currentInfo={currentInfo} id={14}/>
    <Village /* v62, v71, v73,  v80,  v83, */typeOfMarker='black' top={40} left={21} currentInfo={currentInfo} id={15}/>

    <Village /* 16*/typeOfMarker='black' top={38} left={55} currentInfo={currentInfo} id={16}/>
    <Village typeOfMarker='red' top={45} left={14} currentInfo={currentInfo} id={17}/>
    <Village typeOfMarker='yellow' top={46} left={26} currentInfo={currentInfo} id={18}/>
    <Village typeOfMarker='yellow' top={46} left={32} currentInfo={currentInfo} id={19}/>
    <Village /*  v86,  v96, v97, v98,  v107,  */typeOfMarker='yellow' top={50} left={15} currentInfo={currentInfo} id={20}/>

    <Village /* 21*/typeOfMarker='yellow' top={51} left={32} currentInfo={currentInfo} id={21}/>
    <Village typeOfMarker='green' top={54} left={45} currentInfo={currentInfo} id={22}/>
    <Village typeOfMarker='yellow' top={57} left={50} currentInfo={currentInfo} id={23}/>
    <Village typeOfMarker='black' top={55} left={18} currentInfo={currentInfo} id={24}/>
    <Village /*  v109, v110, v111,  v122, v123,  */typeOfMarker='yellow' top={55} left={25} currentInfo={currentInfo} id={25}/>

    <Village /* 26*/typeOfMarker='yellow' top={55} left={32} currentInfo={currentInfo} id={26}/>
    <Village typeOfMarker='red' top={61} left={48} currentInfo={currentInfo} id={27}/>
    <Village typeOfMarker='black' top={62} left={69} currentInfo={currentInfo} id={28}/>
    <Village typeOfMarker='red' top={61} left={13} currentInfo={currentInfo} id={29}/>
    <Village /*  v124, v126, v127,   v143, v144,,  */typeOfMarker='yellow' top={62} left={18} currentInfo={currentInfo} id={30}/>

    <Village /* 31*/typeOfMarker='black' top={62} left={25} currentInfo={currentInfo} id={31}/>
    <Village typeOfMarker='black' top={64} left={32} currentInfo={currentInfo} id={32}/>
    <Village typeOfMarker='green' top={64} left={42} currentInfo={currentInfo} id={33}/>
    <Village typeOfMarker='red' top={63} left={53} currentInfo={currentInfo} id={34}/>
    <Village /*  v145, v146, v147,   v148, v149,   */typeOfMarker='black' top={69} left={64} currentInfo={currentInfo} id={35}/>

    <Village /* 35*/typeOfMarker='red' top={65} left={11} currentInfo={currentInfo} id={36}/>
    <Village typeOfMarker='black' top={67} left={17} currentInfo={currentInfo} id={37}/>
    <Village typeOfMarker='yellow' top={69} left={45} currentInfo={currentInfo} id={38}/>
    <Village typeOfMarker='yellow' top={72} left={35} currentInfo={currentInfo} id={39}/>
    <Village /*  v162, v163,   v166, v176,    v199,    */typeOfMarker='yellow' top={75} left={26} currentInfo={currentInfo} id={40}/>

    <Village /* 35*/typeOfMarker='black' top={78} left={33} currentInfo={currentInfo} id={41}/>
    <Village typeOfMarker='yellow' top={27} left={2} currentInfo={currentInfo} id={42}/>
    <Village typeOfMarker='yellow' top={80} left={65} currentInfo={currentInfo} id={43}/>
    <Village /*  v200, v53, v202, v151      */typeOfMarker='black' top={65} left={86} currentInfo={currentInfo} id={44}/>
    
  </div>
}

function Village({top, left, typeOfMarker, currentInfo, id}){
    
    let village = villages.filter(item => item.id === id);
    let name = village[0].name.props.children[0]; 
 
    console.log(name);
    

    return <div style={{top: top + '%', left: left + '%'}}>
      <span className={typeOfMarker + ' villagesSpan'} style={{top: top + '%', left: left + '%'}}  onClick={() => currentInfo(id)}></span>
      <span className="nameOfVillage" style={{top: top - 0.66 + '%', left: left + 1.60 + '%'}}>{name}</span>
    </div>
  }
