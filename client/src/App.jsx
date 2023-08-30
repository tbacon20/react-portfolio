import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { ErrorPage } from './pages/ErrorPage';


function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Main />}>
           <Route index element={<Main />}/>
           <Route path="*" element={<ErrorPage />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
