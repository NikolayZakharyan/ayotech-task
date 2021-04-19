import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropMenu from './components/DropMenu';

function App() {
  const [data, setData] = useState('');
  const url = `https://demo1030918.mockable.io/`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setData(data);
    } catch (err) {
      throw new Error('Unable to get a token.');
    }
  };

  return <div className="App">{data && <DropMenu {...data} />}</div>;
}

export default App;
