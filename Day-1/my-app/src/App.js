import React from 'react';

function App(){

  let greeting;
let date = new Date(2021,8,8,19);
let hours = date.getHours();

const colorStyle = {
  color : ""
}

  if(hours<12){
    greeting="Good Morning"
    colorStyle.color = "green";
  }
  else if(hours<18 && hours>12){
    greeting="Good Afternoon"
    colorStyle.color = "Orange";
  }
  else{
    greeting="Good Evening"
    colorStyle.color = "blue";
  }

  return(
    <h1 style={colorStyle}>{greeting}</h1>
  )
}

export default App;