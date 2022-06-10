import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/Home";

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
    </Routes>
  )
};

export default App;
