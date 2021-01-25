import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'TodoSlice',
    initialState: {
        counter:10,
        TodoList:[
            {
                id: 0,
                description: 'Complete PIAIC BC Assignments',
                status: false
            },
            {
                id: 1,
                description: 'Work on FYP',
                status: false
            },
            {
                id: 2,
                description: 'Prepare for Finals',
                status: true
            }
        ]
    },
    reducers:{
        addTodo: (state,action)=>{
            state.TodoList.push({
                id: state.TodoList.length,
                description: action.payload.description,
                status: false
            })
        },
        deleteTodo: (state,action)=>{
            state.TodoList = state.TodoList.filter((e)=>(e.id !== action.payload))
        },
        editTodo: (state,action)=>{
            let Index = state.TodoList.findIndex((e)=> (e.id === action.payload.id))
            state.TodoList[Index] = action.payload
        },
        markAsDone: (state,action)=>{
            let Index = state.TodoList.findIndex((e)=> (e.id === action.payload.id))
            state.TodoList[Index].status = !action.payload.status
        }
    }

})

export const { addTodo,deleteTodo,editTodo,markAsDone } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;