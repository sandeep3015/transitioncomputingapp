import Navbar from './navbar'
import Sidebar from './sidebar'
import MainContent from './maincontent'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
