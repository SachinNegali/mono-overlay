import './App.css';
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      {/* <button onClick={() => setShowPopup(true)}>Show Popup</button> */}
      <Popup show={true} onClose={() => console.log('cndkjnvkfnvkjn..')}>
        <h1>Hello, Popup!</h1>
      </Popup>
    </div>
  );
}

export default App;
