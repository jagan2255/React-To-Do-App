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
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/todo' element={<ToDo/>}/>

      </Routes>
    </HashRouter>
    
  );
}

export default App;
