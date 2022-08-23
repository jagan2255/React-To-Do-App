import './App.css';
import Home from './Home';
import ToDo from './ToDo';
import{ 
  HashRouter as Router,
  Route,
  Routes,} 
  from 'react-router-dom';

function App() {
  return (
    <Router>


      <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/todo' element={<ToDo/>}/>

      </Routes>
    </Router>
    
  );
}

export default App;
