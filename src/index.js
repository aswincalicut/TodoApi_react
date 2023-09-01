import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navtodo from './Navtodo';
import TodoAdd from './TodoAdd';
import TodoView from './TodoView';
import TodoUpdate from './TodoUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Navtodo/>
    <TodoAdd/> 
    <TodoView/>
    <Routes>
      <Route path='add' element={<TodoAdd/>} />
      <Route path='view' element={<TodoView/>} />
      <Route path='update/:id' element={<TodoUpdate/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
