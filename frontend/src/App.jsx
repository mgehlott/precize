import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DeleteRecord from './pages/DeleteRecord/DeleteRecord';
import Home from './pages/Home/Home';
import Insert from './pages/Insert/Insert';
import Rank from './pages/Rank/Rank';
import UpdateRecord from './pages/UpdateRecord/UpdateRecord';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" exact element={ <Home /> } />
      <Route path='/insert' element={ <Insert /> } />
      <Route path='/update' element={ <UpdateRecord />} />
      <Route path='/delete' element={ <DeleteRecord /> }/>
      <Route path='/rank' element={<Rank/>}/>
      </Routes>
      </>
  )
}

export default App
