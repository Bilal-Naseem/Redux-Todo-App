import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo,markAsDone } from "../store/todoSlice";
import "animate.css";

function setClasses(id){
    document.getElementById(`UnDone-Delete-Button-${id}`).classList.remove('d-none');
    document.getElementById(`UnDone-Button-${id}`).classList.remove('d-none');

    document.getElementById(`UnDone-Delete-Button-${id}`).classList.add('animate__slideInLeft');
    document.getElementById(`UnDone-Button-${id}`).classList.add('animate__slideInRight');
}

function delClasses(id){
    document.getElementById(`UnDone-Delete-Button-${id}`).classList.add('d-none');
    document.getElementById(`UnDone-Button-${id}`).classList.add('d-none');

    document.getElementById(`UnDone-Delete-Button-${id}`).classList.remove('animate__slideInLeft');
    document.getElementById(`UnDone-Button-${id}`).classList.remove('animate__slideInRight');
}

function GetListItem({TodoItem,dispatch}){
    return(
        <div className='row' style={{justifyContent:'space-around',marginTop:10}} onMouseLeave={()=>delClasses(TodoItem.id)}>
            <div className='col-4 align-self-center Transaction-Row' onMouseOver={()=>setClasses(TodoItem.id)}>
                <div className="row justify-content-between px-3 py-2">
                    <i 
                        className="fa DeleteIcon fa-trash-o animate__animated d-none"
                        id={`UnDone-Delete-Button-${TodoItem.id}`}
                        aria-hidden="true"
                        onClick={()=>dispatch(deleteTodo(TodoItem.id))}
                    />
                    <h5 className='DoneList'>{TodoItem.description}</h5>
                    <i 
                        className="fa UnDoneIcon fa-undo animate__animated d-none"
                        id={`UnDone-Button-${TodoItem.id}`}
                        aria-hidden="true"
                        onClick={()=>dispatch(markAsDone({
                            id: TodoItem.id,
                            status: TodoItem.status
                        }))}
                    />
                </div>
            </div>
        </div>
    )
}

function CompletedList() {

    const TodoList = useSelector((state)=>{
        return state.todoReducer.TodoList
    })

    const dispatch = useDispatch();
    return (
        <>
        <div className='d-block' id='CompletedList'>
            <div className='row'>
                <div className="col align-self-center">
                    <h3>Completed</h3>
                </div>
            </div>
            {
                TodoList.filter((e)=>(e.status === true)).map(TodoItem => (<GetListItem TodoItem={TodoItem} key={TodoItem.id} dispatch={dispatch}/>))
            }
        </div>
        </>
    );
}

export default CompletedList;