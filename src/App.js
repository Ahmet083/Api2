import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer"

import Header from "./components/header/header"
import Home from "./pages/Home";
import Services from "./pages/Services";
import Categories from "./pages/Categories"
import Login from "./pages/Login";
import Register from "./pages/Register";




function App() {
  return (
   <div className="container py-3">
   <Header />

   <HashRouter>
   <Routes>
   <Route index element={<Home />} />
   <Route path="Login" element={<Login />} />
   <Route path="Categories" element={<Categories />} />
   <Route path="Services" element={<Services />} />
   <Route path="Register" element={<Register />} />
   </Routes>
   
   </HashRouter>
   
   <Footer />

   
  </div>
  );
}

export default App;
