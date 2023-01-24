import './App.css';
import { Painel } from './components/Painel';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Contatos } from './components/Contatos';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Header/> 
      <Painel/>
      <Portfolio/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;