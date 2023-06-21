import React from "react";


const Psecond = ({id, name, image, type}) => {let style = `allpokemons ${type}`
  return (<>
    <div className={style}>
    <h3>#0{id}</h3>
      <img src={image} alt="none"/>
        <h2>{name}</h2>
        <h4>Type: {type}</h4>
    </div>
  </>
  )
}
export default Psecond