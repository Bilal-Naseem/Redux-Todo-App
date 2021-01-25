import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo,markAsDone } from "../store/todoSlice";
import "animate.css";

function setClasses(id){
    document.getElementById(`Delete-Button-${id}`).classList.remove('d-none');
    document.getElementById(`Edit-Button-${id}`).classList.remove('d-none');
    document.getElementById(`Done-Button-${id}`).classList.remove('d-none');

    document.getElementById(`Delete-Button-${id}`).classList.add('animate__slideInLeft');
    document.getElementById(`Edit-Button-${id}`).classList.add('animate__slideInRight');
    document.getElementById(`Done-Button-${id}`).classList.add('animate__slideInRight');
}

function delClasses(id){
    document.getElementById(`Delete-Button-${id}`).classList.add('d-none');
    document.getElementById(`Edit-Button-${id}`).classList.add('d-none');
    document.getElementById(`Done-Button-${id}`).classList.add('d-none');

    document.getElementById(`Delete-Button-${id}`).classList.remove('animate__slideInLeft');
    document.getElementById(`Edit-Button-${id}`).classList.remove('animate__slideInRight');
    document.getElementById(`Done-Button-${id}`).classList.remove('animate__slideInRight');
}

function GetListItem({TodoItem,dispatch,setModal}){
    return(
        <div className='row' style={{justifyContent:'space-around',marginTop:10}} onMouseLeave={()=>delClasses(TodoItem.id)}>
            <div className='col-4 align-self-center Transaction-Row' onMouseOver={()=>setClasses(TodoItem.id)}>
                <div className="row justify-content-between px-3 py-2">
                    <i 
                        className="fa DeleteIcon fa-trash-o animate__animated d-none"
                        id={`Delete-Button-${TodoItem.id}`}
                        aria-hidden="true"
                        onClick={()=>dispatch(deleteTodo(TodoItem.id))}
                    />
                    <h5>{TodoItem.description}</h5>
                    <i 
                        className="fa EditIcon fa-pencil-square-o animate__animated d-none"
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        id={`Edit-Button-${TodoItem.id}`} 
                        aria-hidden="true"
                        onClick={()=>setModal(TodoItem)}
                    />
                     
                    <i 
                        className="fa DoneIcon fa-check-square-o animate__animated d-none"
                        id={`Done-Button-${TodoItem.id}`}
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

function TodoList() {

    const TodoList = useSelector((state)=>{
        return state.todoReducer.TodoList
    })
    const [ModalData,setModalData] = useState({
        id: 0,
        description: 'None',
        status: false
    })
    const dispatch = useDispatch();
    return (
        <>
            <div className='row'>
                <div className="col align-self-center">
                    <h3>Todo Items</h3>
                </div>
            </div>
            {
                TodoList.filter((e)=>(e.status === false)).map(TodoItem => (<GetListItem TodoItem={TodoItem} key={TodoItem.id} dispatch={dispatch} setModal={setModalData}/>))
            }
             {/* Modal */}
             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content modalBack">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo Item</h5>
                            <button type="button" id="CloseModal"className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mb-5">
                            <form
                                onSubmit={(e)=>{
                                    e.preventDefault();
                                    dispatch(editTodo(ModalData))
                                    document.getElementById('CloseModal').click();
                                }}
                                className='form-transaction mt-5'
                            >
                                <div className="row"  style={{justifyContent:'center'}}>
                                    <div className="col-10">
                                        <div className="input-group form-fields-wrapper">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-secondary text-light">Description</span>
                                            </div>
                                            <input 
                                                type="text" 
                                                className="form-control input-Background text-white" 
                                                aria-label="Dollar amount (with dot and two decimal places)" 
                                                placeholder="Details" 
                                                id='DescModal'
                                                value={ModalData.description}
                                                onChange={(e)=>setModalData({
                                                    id: ModalData.id,
                                                    description: e.target.value,
                                                    status: ModalData.status
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="div-btn-custom">
                                <button 
                                    type="submit" 
                                    className="btn btn-light px-5 btn-custom"
                                >
                                    Submit
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList;