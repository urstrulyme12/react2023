import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Center from './components/Center/Center';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Center/>
      <Footer/>

    </div>
  );
}

export default App;
