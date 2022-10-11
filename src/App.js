import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/Common/PageNotFound';
import Vendors from './Components/ManageVendor/Vendors';
import AddVendor from './Components/ManageVendor/AddVendor';
import UpdateVendor from './Components/ManageVendor/UpdateVendor';
import ViewVendor from './Components/ManageVendor/ViewVendor';
import ProtectedRoutes from './Components/Auth/ProtectedRoutes';

function App() {
  let token = sessionStorage.getItem('userToken');
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={token ? <Dashboard /> : <Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<ProtectedRoutes Comp={Home} />} />
          <Route path="/" element={<ProtectedRoutes Comp={Dashboard} />} >
            <Route exact path="/vendors" element={<Vendors />} />
            <Route exact path="/addvendor" element={<AddVendor />} />
            <Route exact path="/updatevendor" element={<UpdateVendor />} />
            <Route exact path="/viewvendor" element={<ViewVendor />} />
          </Route>
          <Route exact path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
