import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/Common/PageNotFound';
import ViewStore from './Components/ManageStore/ViewStore';
import AddStore from './Components/ManageStore/AddStore';
import UpdateStore from './Components/ManageStore/UpdateStore';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
    
            <Route exact path="/" element={<Login />} />
            {/* <Route index element={<Home />} /> */}
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/stores" element={<ViewStore />} />
            <Route exact path="/addstore" element={<AddStore />} />
            <Route exact path="/updatestore/:id" element={<UpdateStore />} />
            <Route exact path="*" element={<PageNotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
