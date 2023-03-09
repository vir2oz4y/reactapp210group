import React from 'react';
import './App.css';
import MyName from "./Components/MyName/MyName";
import Counter from "./Components/Counter/Counter";
import ToDoList from "./Components/ToDoList/ToDoList";
import TextField from '@mui/material/TextField';

function App() {
    return (
        <div>
            {/*<Counter></Counter>*/}{/*
            <ToDoList/>*/}

            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
            />

        </div>
    );
}

export default App;
