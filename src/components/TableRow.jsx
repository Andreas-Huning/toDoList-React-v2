import React from 'react';


function TableRow(props) {
    // console.log(props.listItem);
    return (
        <tr>       
            <td>{props.index}</td> 
            <td>{props.listItem}</td> 
            <td onClick={()=>{props.editToDo(props.index)}}><img src="img/edit.png" alt="Editieren" className="delEditImage" /></td>
            <td onClick={()=>{props.delToDo(props.index)}}><img src="img/del.png" alt="Löschen" className="delEditImage" /></td>       
        </tr>
    );
}

export default TableRow;