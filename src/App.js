import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import ScrollUp from './components/scrollup/ScrollUp';
import db from './firebase';
import { DataContext } from '../src/dataUseContext';
import WorkPage from './components/work/WorkPage';
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {

  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    db.collection("portfolio").onSnapshot((snapshot) => {
      const snaplist = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPortfolio(
        snaplist
      );
      setLoading(false);
    });

  }, []);


  return (

    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Talha Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {loading ? (
        <div className="cssload-container">
          <div className="cssload-whirlpool"></div>
        </div>
      ) : (
        <DataContext.Provider value={portfolio}>
          <>
            <main className="main">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/workpage/:id" element={<WorkPage />} />
              </Routes>
            </main>
          </>
        </DataContext.Provider>
      )}
      
      
      {/* <ScrollUp /> */}
    </div>
  )
}

export default App;
