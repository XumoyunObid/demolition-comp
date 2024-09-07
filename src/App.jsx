import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
