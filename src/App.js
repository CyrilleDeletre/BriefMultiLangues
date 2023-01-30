import './App.css';
import React from 'react';
import DataLanguage from './components/DataLanguage'
import LanguageButton from './components/LanguageButton';
import LanguageContext from './context/LangContext';

function App() {
  return (
    <main>
       <LanguageContext>
        <LanguageButton></LanguageButton>
        <DataLanguage></DataLanguage>
      </LanguageContext>
    </main>
   
  );
};

export default App;
