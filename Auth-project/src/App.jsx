import {Session} from "./pages/Session/Session";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {

  //console.log(watch("example")) // watch input value by passing the name of it



  return (
    <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoApp />}/>
                    <Route path="/login" element={<Session />}/>
                </Routes>
        </BrowserRouter>
    </>
  );
}