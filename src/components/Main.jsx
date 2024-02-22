import React,{useState, useEffect} from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function Main(props) {

    const [toDoInput, setToDoInput] = useState("")
    const [toDoList, setToDoList] = useState([])

    function addToDo(e){
        e.preventDefault()
        // console.log(toDoInput);
        props.addToDo(toDoInput)
        setToDoInput("")
    }

    function handleInput(e){
        setToDoInput(e.target.value)
        // console.log(e.target.value);
    }

    function clearInput(){
        setToDoInput("") 
    }

    function editToDo(id){
        // console.log("Eintrag bearbeiten",id);
        setToDoInput(props.toDoList[id])
        props.deltoDoItem(id)
    }

    // aus dem WebStorage laden
    useEffect(() => {      
        const ToDo_STRING = localStorage.getItem("ToDoListe")
        if (ToDo_STRING != null) {
          const ToDo_ARRAY = JSON.parse(ToDo_STRING)
          props.loadToDoFromLocalStorage(ToDo_ARRAY)
        }
      }, [])

    // in das WebStorage speichern
    useEffect(()=>{
        let toDoListJSON = JSON.stringify(props.toDoList)
        console.log("WebStorage speichern",toDoListJSON);
        localStorage.setItem("ToDoListe", toDoListJSON);
        
    },[props.toDoList])

    return (

        <div className='container-main' onSubmit={(e)=>{addToDo(e)}}>
            <h1>To Do Liste</h1>
            <div className="todo-container">
                <h2>Aufgabe hinzufügen</h2>
                <form className="formular">
                    <input className='inputfield' required type="text" placeholder="Bitte Aufgabe hier eintragen" name="todo" value={toDoInput} onChange={(e)=>{handleInput(e)}}/>
                    <button disabled={toDoInput==""}>Speichern</button>
                    <button onClick={clearInput} disabled={toDoInput==""}>Löschen</button>
                </form>
            </div> 
            {props.toDoList.length >0 &&
                <div className='table-container'>
                <Table editToDo={editToDo}/> 
            </div>  
            }                  
            
        </div>
       

    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Main);