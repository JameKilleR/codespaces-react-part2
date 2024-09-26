import { useState,useEffect } from "react";
function Item({name,isPacked=true}){
    return <>
    <li >
        {name}{isPacked && " ✞"}
        
    </li>
    
    </>
    
}
export default function ItemList(){
    const [search,setSearch]=useState("")
    const [clear,setClear]=useState("")
    useEffect(()=>{
        console.log("loaded")
        return ()=>{
            alert("unload")
        }
    },[]);
    const items=[{name:"Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true}];

    const filterList=items.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()))
    const ItemsList=filterList.map(i=><Item key={i} 
        name={i.name} isPacked={i.isPacked}/>)
    const onTextchange =(e)=>{
        setSearch(e.target.value)
    }

    

    return (<ui>
        <input type="text"  onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={()=>setSearch("")}>clear!</button>
        {ItemsList}
       
    
    </ui>)
}