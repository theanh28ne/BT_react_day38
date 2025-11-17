import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import CountDown from "./pages/CountDown";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="countDown" element={<CountDown />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
