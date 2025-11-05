import { useState } from 'react'
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './Body';
import Login from './Login';
import Profile from './Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    //  <NavBar/>
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            Base Page
            <Route path="/login" element={<Login />}>
              Login Page
            </Route>
            <Route path="/profile" element={<Profile />}>
              Login Page
            </Route>
          </Route>
        </Routes>

        {/* <NavBar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App
