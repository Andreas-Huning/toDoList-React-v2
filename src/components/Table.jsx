import React from 'react';
import TableRow from './TableRow';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';

function Table(props) {
    // console.log("Table",props.toDoList);
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
                            return <TableRow editToDo={props.editToDo} listItem={ele} index={index}/>
                        })                            
                    }
                </>
            </tbody>
        </table>
    );
}

export default connect(mapStateToProps) (Table);