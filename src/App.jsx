import { RouterProvider } from 'react-router-dom'
import Mainrouter from './Router/MainRouter'
import './App.css'

function App() {
  
  return (
    <>
      <RouterProvider router={Mainrouter}/>
    </>
  )
}

export default App
