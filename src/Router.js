import React from "react";
import { Routes, Route } from "react-router-dom";
import { BlogHome, LogIn, Home, PageNotFound, Give } from "./components";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route index path="/" element={<Home />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="give" element={<Give />} />
    </Routes>
  );
};

export default Router;
