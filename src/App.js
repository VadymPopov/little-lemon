import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/confirmation' element={<Confirmation />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
