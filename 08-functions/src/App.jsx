import React from 'react'

const App = () => {

  function scrolling(val){
    if(val > 0 ){
      console.log("Seedha Scrolling")
    }else{
      console.log("Ulta Scrolling")
    }
  }

  return (
    <div onWheel={(elem)=>{
      scrolling(elem.deltaY);
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
