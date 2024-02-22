import{ADD,LOAD,DEL} from './actionTypeStrings'

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (toDo) => {
            dispatch({
                type: ADD,
                payload: toDo
            })
        },
        loadToDoFromLocalStorage: (ToDoListe)=>{
            console.log("loadToDoFromLocalStorage",ToDoListe);
            dispatch({
                type: LOAD,
                payload: ToDoListe
            });
        },
        deltoDoItem:(index)=>{
            dispatch({
                type: DEL,
                payload: index
            })            
        }
    }
}

export default mapDispatchToProps