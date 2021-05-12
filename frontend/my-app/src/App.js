import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div>
      <Header />
      <div className ="container">
        <AddTransaction />
        <TransactionList />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
