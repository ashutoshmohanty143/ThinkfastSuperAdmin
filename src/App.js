import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Users from './Components/Users/Users';
import AddUser from './Components/Users/AddUser';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/Common/PageNotFound';
import Discounts from './Components/Discount/Discounts';
import AddDiscount from './Components/Discount/AddDiscount';
import Offers from './Components/Offers/Offers';
import AddOffers from './Components/Offers/AddOffers';
import Zones from './Components/Zone/Zones';
import AddZone from './Components/Zone/AddZone';
import Slots from './Components/Slot/Slots';
import AddSlot from './Components/Slot/AddSlot';
import Orders from './Components/Orders/Orders';


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
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/addoffer" element={<AddOffers />} />
            <Route exact path="/zones" element={<Zones />} />
            <Route exact path="/addzone" element={<AddZone />} />
            <Route exact path="/slots" element={<Slots />} />
            <Route exact path="/addslot" element={<AddSlot />} />
            <Route exact path="/discounts" element={<Discounts />} />
            <Route exact path="/adddiscount" element={<AddDiscount />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="*" element={<PageNotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
