import React,{useState} from 'react'

function Counter() {

    // Var - Global Scope
    // Let, Const - Block Scope
    // Both Let and Const will hoist but the values will be in Temporal Dead Zone (Timer)

    const[count, setCount] = useState(0);

const handleClick = (type = "") => {

    if (type === "minus"){
        setCount(count-1);

    }
    else if (type==="plus"){

        setCount(count+1);
    }
    else{
        setCount(0);
    }
    
};
  return (
    <section className = "center-layout">

 
    <div className='counter-container'>
        counter
        <button onClick={()=>handleClick("minus")} disabled = {!count} > - </button>
        <div className = "clear-fix"></div>
        <h1 className='count-text'>{count}</h1>
        <div className = "clear-fix"></div>
        
        <button onClick={()=>handleClick("plus")}> + </button>

        <div className = "clear-fix"></div>

        <button  onClick={handleClick}> R </button>


        </div>
        </section>
  )
}

export default Counter