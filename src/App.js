import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/reservation' element={<Reservation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
