import logo from './logo.svg';
import './App.css';
import Singnup from './Components/Signup';
import Login from './Components/Login'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Singnup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
