import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/mainlayout/Mainlayout";
import NotFoundBlock from "./components/notFoundBlock/NotFoundBlock";
import Home from "./page/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./page/login/Login";
import AddTable from "./page/addTable/AddTable";

const App = () => {

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <Routes>
        <Route path="/loginTable" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="addTable/:id" element={<AddTable />} />
        </Route>
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </React.Suspense>
  )
}

export default App