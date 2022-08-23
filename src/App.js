import './App.css';
import Home from './Home';
import ToDo from './ToDo';
import{ 
  HashRouter,
  Route,
  Routes,} 
  from 'react-router-dom';

function App() {
  return (
    <HashRouter>


      <Routes>
        
        <Route  path='/' element={<Home/>}/>
        <Route  path='/todo' element={<ToDo/>}/>

      </Routes>
    </HashRouter>
    
  );
}

export default App;
