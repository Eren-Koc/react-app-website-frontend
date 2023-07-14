import './App.css';
import Community from './components/Community';
import Customers from './components/Customers';
import DesignFooter from './components/DesignFooter';
import Footer from './components/Footer';
import GetDemo from './components/GetDemo';
import HelpingBusinessReinvent from './components/HelpingBusinessReinvent';
import Landing from './components/Landing';
import NewMarketing from './components/NewMarketing';
import OurClients from './components/OurClients';
import Pixelgrade from './components/Pixelgrade';

import './index.css';
function App() {
  return (
    <div className="App h-fit w-full min-h-screen">     
    <Landing/>
    <OurClients/>
    <Community/>
    <Pixelgrade/>
    <HelpingBusinessReinvent/>
    <DesignFooter/>
    <Customers/>
    <NewMarketing/>
    <GetDemo/>
    <Footer/>
    </div>
  );
}

export default App;
