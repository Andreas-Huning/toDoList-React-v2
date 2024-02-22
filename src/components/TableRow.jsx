import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function TableRow(props) {
    // console.log("TableRow",props);
    return (
        <tr>       
            <td>{props.index}</td> 
            <td>{props.listItem}</td> 
            <td onClick={()=>{props.editToDo(props.index)}}><img src="img/edit.png" alt="Editieren" className="delEditImage" /></td>
            <td onClick={()=>{props.deltoDoItem(props.index)}}><img src="img/del.png" alt="Löschen" className="delEditImage" /></td>       
        </tr>
    );
}

export default connect(mapStateToProps,mapDispatchToProps) (TableRow);