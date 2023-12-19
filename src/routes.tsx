import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Blog from "./pages/blog";
import Welcome from "./pages/welcome";
import NoPage from "./pages/nopage";


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      
      <Route path="welcome" element={<Welcome />} />
      <Route path="welcome/blog" element={<Blog />} />
      <Route path="welcome/*" element={<NoPage />} />
      <Route path="*" element={<NoPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
