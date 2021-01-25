import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

function AddTodo(props) {
    const [description,setDescription] = useState();
    const dispatch = useDispatch();

    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(description))
        setDescription("")
    }

    return (
        <div>
            <h3>Add Todo</h3>
            <form onSubmit={onSubmit} className='form-transaction mt-5'>
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
                                id='Desc'
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                
                                />
                        </div>
                    </div>
                </div>
                <div className="div-btn-custom">
                <button 
                    type="submit" 
                    className="btn btn-light px-5 btn-custom"
                >
                    Create
                </button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;