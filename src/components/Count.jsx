import React, {useState} from "react";


function Addcount(){
    const [count, setcart]=useState(0)

    function add(){
        return(setcart((count)=>count+1))
    }
    function remove(){
        if(count<=0){
            return(setcart((count)=>count=0))
        }
        else{
            return(setcart((count)=>count-1))
        }
    }



    return(
        <>
        <div>
            <button onClick={()=>add()}>add</button>
            <h1>{count}</h1>
            <button onClick={()=>remove()}>remove</button>
        </div>
        
        
        </>
    )
}
export default Addcount;