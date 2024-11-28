import './App.css'
import MyFooter from './components/MyFooter';
import Navbar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Navbar/>
    <div className = 'min-h-screen'>
      <Outlet/>
    </div>
    <MyFooter/>
    </>
  )
}

export default App;
