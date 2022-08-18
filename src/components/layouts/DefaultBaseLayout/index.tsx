import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../../../utils/seo-utils';
import { I18NContext } from '../../../context/i18Ncontext';
import { translatedLinks } from '../../../../content/translations/links';
import { DisplayModeContext } from '../../../context/displayMode';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    let title = seoGenerateTitle(page, site);
    let metaTags = seoGenerateMetaTags(page, site);
    let metaDescription = seoGenerateMetaDescription(page, site);
    const [locale, setLocale] = React.useState<string>('en');
    const [displayMode, setDisplayMode] = React.useState<'dark' | 'light'>('light');
    const [linksTranslations] = React.useState<Object>(translatedLinks);

    function translate(input: string): string {
        if (input in linksTranslations) return locale === 'fr' ? linksTranslations[input] : input;
        return input;
    }

    return (
        <I18NContext.Provider value={{ locale, setLocale, translate }}>
            <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>
                <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
                    <div className="sb-base sb-default-base-layout">
                        <Head>
                            <title>IEEE uOttawa - {title}</title>
                            {metaDescription && <meta name="description" content={metaDescription} />}
                            {metaTags.map((metaTag) => {
                            if (metaTag.format === 'property' ) {
                                // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                                return  <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />
                            }
                            return  <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />
                            })}
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            {site.favicon && <link rel="icon" href={site.favicon} />}
                        </Head>
                        {site.header && <Header {...site.header} annotationPrefix={siteMeta.id} />}
                        {props.children}
                        {site.footer && <Footer {...site.footer} annotationPrefix={siteMeta.id} />}
                    </div>
                </div>
            </DisplayModeContext.Provider>
        </I18NContext.Provider>
    );
}
