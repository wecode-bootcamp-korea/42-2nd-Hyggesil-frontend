import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
// import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Host from './pages/Host/Host';
import Payment from './pages/Payment/Payment';
import TopNav from './components/TopNav/TopNav';
import Footer from './components/Footer/Footer';
import User from './pages/Login/components/User';
import KakaoLogin from './pages/Login/components/KakaoLogin';
import GlobalStyle from './styles/GlobalStyle';
function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels/:id" element={<Detail />} />
        <Route path="/host" element={<Host />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user" element={<User />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
