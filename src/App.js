import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/Common/PageNotFound';
import Vendors from './Components/ManageVendor/Vendors';
import AddVendor from './Components/ManageVendor/AddVendor';

function App() {
  const setSession = function setSessionValue(){
    let session = false;
    return session;
  }
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
    
            <Route exact path="/" element={<Login />} />
            {/* <Route index element={<Home />} /> */}
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/vendors" element={<Vendors />} />
            <Route exact path="/addvendor" element={<AddVendor />} />
            <Route exact path="*" element={<PageNotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
