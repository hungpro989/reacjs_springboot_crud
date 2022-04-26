import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEmployee from "./components/AddEmployee"
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";

function App() {
  return (

    <div className="App">
      <Routes >
        <Route exact path="/" element={<EmployeesList />} />
        <Route exact path="/add" element={<AddEmployee />} />
        <Route exact path="/product/detail/:id" element={<AddEmployee />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes >
      {/* toasttify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

  )

}
export default App;