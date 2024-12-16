import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import List from './components/list/List';
import Chat from './components/Chat';
import Detail from './components/Detail';

function App() {
  return (
    <div className="bg-app-bg bg-cover bg-center h-screen flex items-center justify-center">
     <div className="h-[90vh] w-[90vw] bg-[rgba(17,25,40,0.75)] backdrop-blur-[19px] saturate-[180%] border-r-[12px] border-[rgba(255,255,255,0.125)] flex text-white">
      <List />
      <Chat />
      <Detail />

     </div>

    </div>
  );
}

export default App;
