import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import { originals,action,topRated,horror,trending,romance,document} from './url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner url={trending}/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={topRated} title='Top Rated' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={document} title='Drama' isSmall/>
    </div>
  );
}

export default App;
