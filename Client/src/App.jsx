
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import {Route,Routes} from 'react-router-dom'
function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
