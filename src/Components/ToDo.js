import React, { Component } from 'react';
import "./ToDo.css";
import $ from "../../node_modules/jquery/dist/jquery"

class todo extends Component {
    state = { } 
    append=()=>{
        if($("#inp").val() != ""){
            $("#list").append("<div style='display:flex'>\
                                    <div id='ls'>\
                                    "+$("#inp").val()+"\
                                    </div>\
                                <button id='deltodo' style='margin:10px'>Delete</button>\
                                </div>");
            $("#inp").val("")
        }
    }
    render() { 
        return (
            <div class="App">
                <h1>TODO App</h1>
                <input id="inp"></input>
                <button onClick={this.append} id='Add'>ADD</button>
                <div id='list'></div>
            </div>
        );
    }
}
 
export default todo;