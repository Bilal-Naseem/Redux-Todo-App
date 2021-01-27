import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import "animate.css";

function AddTodo(props) {
    const [description,setDescription] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) =>{
        e.preventDefault();
        if(description !== '')
        {
            dispatch(addTodo(description))
            setDescription("")
        }
        else{
            document.getElementById('alertRow').classList.remove('d-none');
            document.getElementById('alertRow').classList.add('animate__fadeInDown')
            setTimeout(() => {
                document.getElementById('alertRow').classList.remove('animate__fadeInDown')
                document.getElementById('alertRow').classList.add('animate__fadeOutDown');
            }, 2000);
        }
    }

    return (
        <div className="justify-content-center">
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
            <div className="row mt-5 d-none animate__animated" id='alertRow' style={{flexDirection:'row',justifyContent:'center'}}>
                <div className="alert alert-danger col-3" role="alert">
                    Description Empty
                </div>
            </div>
        </div>
    );
}

export default AddTodo;