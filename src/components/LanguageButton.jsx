import React, { useContext } from "react"; 
import logoFrance from "../img/france.svg";
import logoUK from "../img/united-kingdom.svg";
import logoSpain from "../img/spain.svg";
import { LanguageContext } from "../context/LangContext";

export default function LanguageButton () 
{

    const {toggleLanguage} = useContext(LanguageContext);

    return(
        <aside>
            <figure>
                <ul>
                    <li>
                        <button onClick={() => toggleLanguage('FR')}>
                            <img src={logoFrance} alt=""/>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => toggleLanguage('EN')}>
                            <img src={logoUK} alt=""/>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => toggleLanguage('ES')}>
                            <img src={logoSpain} alt=""/>
                        </button>
                    </li>
                </ul>
                
            </figure>
        </aside>
    );
};

