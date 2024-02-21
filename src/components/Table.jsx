import React from 'react';
import TableRow from './TableRow';

function Table(props) {
    // console.log(props.toDoList);
    return (
        <table>
            <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Aufgaben</th>
                    <th>Bearbeiten</th>
                    <th>Löschen</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {
                        props.toDoList.map((ele,index)=>{
                            return <TableRow listItem={ele} index={index} delToDo={props.delToDo} editToDo={props.editToDo}/>
                        })                            
                    }
                </>
            </tbody>
        </table>
    );
}

export default Table;