import React from 'react'

 function Bcomponet() {
console.log("Bcomponet");

  return (
    <div style={{
        height: 200,
        width: 100,
        backgroundColor: "yellow",
        padding: 10,
        margin: 10,
      }}>
      Bcomponet
    </div>
  )
}

export default React.memo(Bcomponet)
