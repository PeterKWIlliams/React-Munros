import React from 'react'

const MunroDetail = ({munro}) => {
    return (
      <>
        <h3>Details:</h3>
        <h4>name:{munro.name}</h4> 
        <h5>hello there my dear</h5>
        <p>height:{munro.height}</p>
        <p>Region:{munro.region}</p>
        
      </>
    )
}

export default MunroDetail;
