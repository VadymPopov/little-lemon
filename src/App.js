import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
