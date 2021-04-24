import React, { useState, useEffect } from 'react';
// import './App.css';
import Header from './Header';

function App() {

  let pages = [
    { readableName: "Home", url: "home" },
    { readableName: "About", url: "about" },
    { readableName: "Portfolio", url: "portfolio" },
    { readableName: "Mission", url: "mission" },
    { readableName: "CoreValues", url: "corevalues" },
    { readableName: "Blog", url: "blog"}
  ];

  const [currentPage, setCurrentPage] = useState(0)

  // component did update
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
      window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
  }

  // component did mount
  useEffect(() => {
    let localStoragePage = window.localStorage.getItem('currentPage')
    if (localStoragePage !== currentPage) {
      setCurrentPage(JSON.parse(localStoragePage))
    }
  }, [currentPage])
  
  
  return (
    <div className="App">
      <Header 
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
