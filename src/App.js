// import Header from "./Components/Common/Header";
import React from "react";
import Home from "./Components/Common/LandingPage/Home";
// import Authentication from "./Components/Common/Auth/Authentication";
import { Routes, Route } from "react-router-dom"
import Auth from "./Components/Common/Auth/Authentication";
import Ehome from "./Components/Entrepreneurs/Ehome";
import Profile from "./Components/Entrepreneurs/Profile";
import Chat from "./Components/Entrepreneurs/Chat";
import AddPost from "./Components/Entrepreneurs/Posts/AddPost";
import MyPosts from "./Components/Entrepreneurs/Posts/MyPosts";
import InvestorHome from "./Components/Investors/InvestorHome";
import ViewPosts from "./Components/Investors/ViewPosts";
import SelectedPosts from "./Components/Investors/SelectedPosts";
import InvestorChat from "./Components/Investors/InvestorChat";
import InvestorProfile from "./Components/Investors/InvestorProfile";
import Login from "./Components/Common/Auth/investors/Login";
import ELogin from "./Components/Common/Auth/ELogin";



function App() {
  return (
    <>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/auth" element = {<Auth/>} />
        <Route path="/investorLogin" element = {<Login/>} />
        <Route path="/EntrepreneurLogin" element = {<ELogin/>} />
        <Route path="/entrepreneur" element = {<Ehome/>}>
          {/* <Route path="/" element={<Ehome />} /> */}
          <Route path="/entrepreneur/eprofile" element = {<Profile/>} />
          <Route path="/entrepreneur/connect" element = {<Chat/>} />
          <Route path="/entrepreneur/addPost" element = {<AddPost/>} />
          <Route path="/entrepreneur/myPosts" element = {<MyPosts/>} />
        </Route>
        <Route path="/investor" element = {<InvestorHome/>}>
          <Route path="/investor/posts" element = {<ViewPosts/>} />
          <Route path="/investor/selectedPosts" element = {<SelectedPosts/>} />
          <Route path="/investor/connect" element = {<InvestorChat/>} />
          <Route path="/investor/profile" element = {<InvestorProfile/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
