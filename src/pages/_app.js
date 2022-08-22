import React from 'react';
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

    return (
        <I18NContext.Provider value={{ locale, setLocale, translate }}>
            <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>
                <Component {...pageProps} />
            </DisplayModeContext.Provider>
        </I18NContext.Provider>
    );
}
