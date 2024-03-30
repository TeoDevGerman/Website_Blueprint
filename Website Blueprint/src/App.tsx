import './App.css'
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <nav className="flex justify-center space-x-4">
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>
          <Link to="/">Home</Link>
        </span>
        <span className='navbar-brand mb-0 h1'>
          <Link to="/Blueprint_Page">Blueprint Page</Link>
        </span>
      </div>
    </nav>
    <div className='container-fluid'>
      <Outlet/>
    </div>
      <h1 className="text-3xl font-bold underline">
        This is a website blueprint with React, TypeScript, Tailwind CSS, and Vite.
    </h1>
    </>
  )
}

export default App
