import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import SearchComponent from './component/SearchComponent/SearchComponent';
import SearchItem from './component/SearchItem/SearchItem';
const App = () => {
  return (
    <div className="App">
      <SearchComponent />
      {/* <SearchItem /> */}
    </div>
  );
};

export default App;