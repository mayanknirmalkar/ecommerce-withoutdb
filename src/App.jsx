import "./App.css";
import Main from "./components/Main/Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts.jsx";
import SingleProduct from "./components/FilteredProducts/SingleProduct.jsx";
import Login from "./components/Login/Login.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.user)
  const { authUser } = user;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main/> : <Login/>} />

          <Route path="/filteredProducts/:type" element={<FilteredProducts/>} />

          <Route path="/filteredProducts/:type/:id" element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;