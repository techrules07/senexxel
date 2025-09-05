import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Careers from './Pages/Careers';
import ContactUs from './Pages/ContactUs';
import ItServices from './subpages/ItServices';
import SystemIntegration from './subpages/SystemIntegration';
import ManagedServices from './subpages/ManagedServices';
import DetailsCard from './Components/DtailsCard';
import DetailsService from './subpages/DetailsService';
import Industries from './subpages/Industries';
import Insights from './subpages/Insights';
import ServiceMenu from './Components/ServiceMenu';
import MenuItems from './Components/MenuItems';
import ServiceSubMenuMobile from './Components/ServiceSubMenuMobile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/it-services' element={<ItServices />} />
        <Route path='/system-integration' element={<SystemIntegration type={1}/>} />
        <Route path='/system-integration/api' element={<SystemIntegration type={2}/>} />
        <Route path='/system-integration/iot' element={<SystemIntegration type={3}/>} />
        <Route path='/system-integration/data' element={<SystemIntegration type={4}/>} />
        <Route path='/system-integration/cloud' element={<SystemIntegration type={5}/>} />
        <Route path='/system-integration/custom' element={<SystemIntegration type={6}/>} />
        <Route path='/system-integration/backup' element={<ManagedServices type={7}/>} />
        <Route path='/system-integration/cloud-service' element={<ManagedServices type={8}/>} />
         <Route path='/system-integration/network' element={<ManagedServices type={9}/>} />
         <Route path='/system-integration/security' element={<ManagedServices type={10}/>} />
         <Route path='/system-integration/security' element={<ManagedServices type={11}/>} />
         <Route path='/system-integration/:id' element={<DetailsService />} />
         <Route path='/industries/:id' element={<Industries />} />
         <Route path='/insights/:id' element={<Insights />} />
         <Route path='/services' element={<MenuItems selectedItems={1} />} />
         <Route path='/services-sub/:id' element={<ServiceSubMenuMobile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

