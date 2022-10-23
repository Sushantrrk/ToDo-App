import React, { Component } from 'react';

class ListInput extends Component {
    state = {  } 
    render() { 
        return (
        <div style='display:flex'>
            <div id='ls'>
                $("#inp").val()
            </div><button id='deltodo'  style='margin:10px'>Delete</button>
        </div>);
    }
}
 
export default ListInput;