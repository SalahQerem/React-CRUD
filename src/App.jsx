import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Create from './components/user/create.jsx'
import Index from './components/user/index.jsx'
import { Route, Routes } from 'react-router-dom'
import Details from './components/user/Details.jsx'
import Edit from './components/user/Edit.jsx'
import Home from './components/user/Home.jsx'



function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path = '/create' element = {<Create />} />
      <Route path = '/index' element = {<Index />} />
      <Route path='/:id' element = {<Details />}></Route>
      <Route path='/edit/:id' element = {<Edit />}></Route>
      <Route path = '*' element = {<p>Page Not Found</p>}></Route>
    </Routes>
  )
}

export default App
