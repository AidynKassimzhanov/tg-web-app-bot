import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom';
import Productlist from './components/Productlist/Productlist';
import Form from './components/Form/Form';

function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Productlist />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
