import React,{useState, useEffect} from 'react';
import Table from './Table';

function Main(props) {

    const [toDoInput, setToDoInput] = useState("")
    const [toDoList, setToDoList] = useState([])

    function handleInput(e){
        setToDoInput(e.target.value)
        // console.log(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        // console.log(e.target.todo.value);
        setToDoList((current)=>{
            return [...current,e.target.todo.value]
        })
        setToDoInput("")
    }
    function deltoDo(item){
        // console.log("Eintrag löschen");
        // console.log(item);
        setToDoList((current)=>{
            return current.filter((ele,index)=>{
                return index != item
            })
        })
        setToDoInput("")        
    }

    function clearInput(){
        setToDoInput("") 
    }

    function editToDo(item){
        // console.log("Eintrag bearbeiten");
        // console.log(item);
        setToDoInput(toDoList[item])
        setToDoList((current)=>{
            return current.filter((ele,index)=>{
                return index != item
            })
        })
    }
    useEffect(()=>{
        let toDoListNew = localStorage.getItem("toDoList");  
        if(toDoListNew != null){    
          let toDoListArr = JSON.parse(toDoListNew);
          setToDoList(toDoListArr)
        }  
    },[])

    useEffect(()=>{
        let toDoListJSON = JSON.stringify(toDoList)
        // console.log(toDoListJSON);
        localStorage.setItem("toDoList", toDoListJSON);
        
    },[toDoList])

    return (

        <div className='container-main' onSubmit={(e)=>{handleSubmit(e)}}>
            <h1>To Do Liste</h1>
            <div className="todo-container">
                <h2>Aufgabe hinzufügen</h2>
                <form className="formular">
                    <input className='inputfield' required type="text" placeholder="Bitte Aufgabe hier eintragen" name="todo" value={toDoInput} onChange={(e)=>{handleInput(e)}}/>
                    <button disabled={toDoInput==""}>Speichern</button>
                    <button onClick={clearInput} disabled={toDoInput==""}>Löschen</button>
                </form>
            </div> 
            {toDoList.length >0 &&
                <div className='table-container'>
                <Table toDoList={toDoList} delToDo={deltoDo} editToDo={editToDo}/> 
            </div>  
            }                  
            
        </div>
       

    );
}

export default Main;