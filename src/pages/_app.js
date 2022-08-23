import React, { useEffect } from 'react';
import { DisplayModeContext } from '../context/displayMode';
import { I18NContext } from '../context/i18Ncontext';
import { translatedLinks } from '../../content/translations/links';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
    const [locale, setLocale] = React.useState('en');
    const [displayMode, setDisplayMode] = React.useState('light');
    const [linksTranslations] = React.useState(translatedLinks);
    
    function translate(input) {
        if (input in linksTranslations) return locale === 'fr' ? linksTranslations[input] : input;
        return input;
    }

    const setLight = () => {
        localStorage.setItem('displayMode', 'light');
        setDisplayMode('light');
    }

    const setDark = () => {
        localStorage.setItem('displayMode', 'dark');
        setDisplayMode('dark');
    }

    const prefersDark = () => {
        const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)');
        return mediaQuery?.matches || false;
    }

    useEffect(() => {
        const storedMode = localStorage.getItem('displayMode');
        const defaultDark = storedMode === 'dark' || (storedMode === null && prefersDark());
        if (defaultDark) {
            setDark();
        }
    }, [displayMode]);

    return (
        <I18NContext.Provider value={{ locale, setLocale, translate }}>
            <DisplayModeContext.Provider value={{ displayMode, setLight, setDark }}>
                <Component {...pageProps} />
            </DisplayModeContext.Provider>
        </I18NContext.Provider>
    );
}
