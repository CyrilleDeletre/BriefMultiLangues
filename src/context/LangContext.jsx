import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const languageSupported = ['EN', 'FR', 'ES'];

let browserLanguage = navigator.language.slice(0,2).toUpperCase();

if(languageSupported.indexOf(browserLanguage) === -1)
{
    browserLanguage = 'EN';
};

const LangContext = props =>
{
    const [language, setLanguage] = useState(browserLanguage);

    const toggleLanguage = changeLanguage => 
    {
        setLanguage(changeLanguage)
    };

    return(
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LangContext;



// langData (traductions)
//     title (title)
//     subtitle (txt)