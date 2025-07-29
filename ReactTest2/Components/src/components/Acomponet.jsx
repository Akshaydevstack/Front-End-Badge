import React from "react";

 function Acomponet(props) {
    console.log("Acomponet");

   props.count="akshay"
  return (
    <div
      style={{
        height: 200,
        width: 100,
        backgroundColor: "yellow",
        padding: 10,
        margin: 10,
      }}
    >
      Acomponet {}
    </div>
  );
}


export default React.memo(Acomponet)