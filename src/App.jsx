import './App.css'
import { Route, Routes } from 'react-router-dom'
import Create from './components/users/Create.jsx'
import Index from './components/users/Index.jsx'
import Details from './components/users/Details.jsx'
import Edit from './components/users/Edit.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<h2>Home</h2>}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/index' element={<Index />}/>
      <Route path='/:id' element={<Details />}/>
      <Route path='/edit/:id' element={<Edit />}/>
      <Route path='*' element={<h2>Page Not Founded</h2>} />
    </Routes>
  )
}

export default App
