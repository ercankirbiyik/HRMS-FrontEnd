import './App.css';
import NavigationBar from './layouts/NavigationBar';
import JobAdvertisementPage from './pages/JobAdvertisementPage';

function App() {
  return (
    <div className="App">
         <NavigationBar/>
        
      <div className="Appbg-gri min-vh-100">
         {}
         <div className="container">
        <JobAdvertisementPage/>
        </div>
      </div>
   
    </div>
  );
}

export default App;

