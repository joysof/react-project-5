
import './App.css';
import Navbar from './Components/navbar/Navbar.jsx';
import Search from './Components/Search_bar/Search.jsx'
import Contacts from './Components/Contacts/Contacts.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App mx-auto  max-w-[350px] m-auto">
      <Navbar/>
      <Search/>
      <Contacts/>
      <ToastContainer
        position='bottom-center'
      />
    </div>
  );
}

export default App;
