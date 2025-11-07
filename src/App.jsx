import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import {Toaster} from "@/components/ui/toaster";
function App() {

  return (
    <>
     <BrowserRouter>
       <Toaster />
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
