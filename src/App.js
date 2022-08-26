import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/LandingPage/Home";
import Checkout from "./Pages/Checkout/Checkout";
import { Contact } from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import { Blog } from "./Pages/Blog/Blog";
import { About } from "./Pages/About/About";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Order from "./Pages/Order/Order";
function App() {
  return (
    <>
      <UserAuthContextProvider>
        <NavBar />
      
        <ScrollToTop>
          <Routes>
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
