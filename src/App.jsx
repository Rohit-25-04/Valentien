 import { useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home"
import Love from "./Love";
function App(){
  return(
    <>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/love" element={<Love/>}/>
    </Routes>
    </>
  )
}export default App