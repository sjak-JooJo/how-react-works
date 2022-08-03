import logo from './logo.svg';
import './App.css';
import Device from './compnents/Device/Device';
import DeviceDetail from './compnents/DeviceDetail/DeviceDetail';
import Watch from './compnents/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="UPhone" price="15000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
