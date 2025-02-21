import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Card from "./pages/Card";
import Header from "./components/Header";
import { useEffect } from "react";
import { getRestaurants } from "./redux/actions/restActions";
import { useDispatch } from "react-redux";
import { getCart } from "./redux/actions/basketActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());

    dispatch(getCart());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
