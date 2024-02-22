import * as ACTIONS from './actionTypeStrings'
const initState = {
    toDoList:[]
}
const reducer = (state = initState, action)=>{

    switch(action.type){

        case ACTIONS.ADD:
            // console.log(...state.toDoList);
            // console.log(action.payload);
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            } 
        case ACTIONS.LOAD:
            // console.log(...state.toDoList);
            // console.log(action.payload);
            return {
                ...state,
                toDoList: action.payload || []
            } 
        case ACTIONS.DEL:
            // console.log(...state.toDoList);
            // console.log(action.payload);
            return{
                ...state,
                toDoList: state.toDoList.filter((ele,index)=>{
                    return action.payload !=index
                })
            }
   

        default:
            return state

    }
}
export default reducer