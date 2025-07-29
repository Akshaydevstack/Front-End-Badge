import React from 'react'

function Ccomponet() {
    console.log("Ccomponet");
    
  return (
    <div style={{
        height: 200,
        width: 100,
        backgroundColor: "yellow",
        padding: 10,
        margin: 10,
      }}>
      Ccomponet
    </div>
  )
}

export default React.memo(Ccomponet)