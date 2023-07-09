import React from "react"

export default function Main(){

    const [list, setList] = React.useState([])
    const [input, setInput] = React.useState()

    function handleSubmit(e){
        e.preventDefault()
        if(input !== ""){
            setList(prev => {
                return [
                    ...prev,
                    input
                ]
            })
            setInput("")
        }
    }

    function handleChange(e){
        setInput(e.target.value)
    }

    const val6 = list.map(x =>  
        <li className="main--list">
            {x}
            <button onClick={() => toRemove(x)}>X</button>
        </li>
    )

    return (
        <div className="main">
            <h1 className="main--heading">Items to Buy</h1>
            <form onSubmit={handleSubmit}>
                <input
                type= "text"
                class= "main--input"
                name= "item"
                placeholder= "Enter a new item"
                value= {input}
                onChange= {handleChange} />
                <button className="main--btn">Add</button>
            </form>
            <div>
                {val6}
            </div>
        </div>
    )

    function toRemove(item){
        const val7 = list.filter((x) => 
        {return x !== item}
        )
        setList(val7)
    }
}