import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Filters from './components/Filters'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
    }
    else{
      setMode('dark');
    }
  }


  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className='mx-0 d-flex'>
        <Filters mode={mode} toggleMode={toggleMode}/>
      </div>
      <HomePage />
    </>
  );
}

export default App;

// https://newsapi.org/v2/everything?q=food&apiKey=9a3f6d5c0311455386c35e778604b558
