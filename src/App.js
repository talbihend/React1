import './App.css';
import Address from './Component/Profile/Address.jsx'; 
import FullName from './Component/Profile/FullName.jsx'; 
import ProfilePhoto from './Component/Profile/ProfilePhoto.jsx'; 

function App() {
  return (
    <div className="App" style={{ textAlign: "left", display: "flex" }}>
      
      <ProfilePhoto/>
      <div>
      <FullName/>
      <Address/>
      </div>
    </div>
  );
}

export default App;
