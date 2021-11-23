import './App.css';
import Profile from './Pages/Profile';
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <Users/>
      <Profile/>
      <Link to="/posts">Posts</Link>

    <Routes>
      <Route path="/posts" element={<Posts/>}/>
    </Routes>

    </>
  );
}

export default App;
