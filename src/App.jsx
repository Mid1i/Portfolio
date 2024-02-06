import {useEffect, useState} from 'react';
import "aos/dist/aos.css";
import Aos from "aos";

import {About, Contacts, Footer, Portfolio, Header, Home} from "./components";


export default function App() {
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        if ('dark/light'.includes(localStorage.getItem('theme'))) {
            setTheme(localStorage.getItem('theme'));
        }
        
        Aos.init({duration: 800});
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);


    return (
        <>
            <Header theme={theme} changeTheme={setTheme}/>
            <Home/>
            <About/>
            <Portfolio/>
            <Contacts/>
            <Footer theme={theme} changeTheme={setTheme}/>
        </>
    );
}
