import React, { useContext } from 'react';
import { LanguageContext } from '../context/LangContext';



export default function DataLanguage () 
{
    const dataLanguage = 
    {
        FR:
        { 
            title:"Bonjour et bienvenue sur le site", 
            txt:"Découvrez nos fonctionnalités et nos services !" 
        },
        
        EN:
        {
            title:"Hello and welcome to the site.",     
            txt:"Discover our features and services !"   
        },

        ES:{   
            title:"Hola y bienvenido al sitio.",      
            txt:"¡Descubra nuestras características y servicios!"
        }
    };

 
    const {language} = useContext(LanguageContext);

    return (
        
            <section>
            
                <h1>{dataLanguage[language].title}</h1>

                <p>{dataLanguage[language].txt}</p>
                
            </section>
        
    );
};