import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import { Action } from '../../atoms';
import { I18NContext } from '../../../context/i18Ncontext';

export default function CtaSection(props) {
    const { type, elementId, colors, backgroundSize, backgroundImage, title, titleFr, text, textFr, actions = [], styles = {}, 'data-sb-field-path': fieldPath } = props;
    const sectionFlexDirection = styles.self?.flexDirection ?? 'row';
    const sectionAlignItems = styles.self?.alignItems || 'center';
    const { locale } = React.useContext(I18NContext);
    const getTitle = () => locale === 'fr' && titleFr ? titleFr : title;
    const getText = () => locale === 'fr' && textFr ? textFr : text;

    return (
        <Section
            type={type}
            elementId={elementId}
            colors={colors}
            backgroundSize={backgroundSize}
            backgroundImage={backgroundImage}
            styles={styles.self}
            data-sb-field-path={fieldPath}
        >
            <div
                className={classNames('flex', mapFlexDirectionStyles(sectionFlexDirection), mapStyles({ alignItems: sectionAlignItems }), 'space-y-8', {
                    'lg:space-y-0 lg:space-x-8': sectionFlexDirection === 'row'
                })}
            >
                <CtaBody title={getTitle()} text={getText()} styles={styles} />
                <CtaActions actions={actions} sectionFlexDirection={sectionFlexDirection} styles={styles.actions} />
            </div>
        </Section>
    );
}

function CtaBody(props) {
    const { title, text, styles = {} } = props;
    const { locale } = React.useContext(I18NContext);
    const getTitleFieldPath = () => locale === 'fr' ? '.titleFr' : '.title';
    const getTextFieldPath = () => locale === 'fr' ? '.textFr' : '.text';

    if (!title && !text) {
        return null;
    }
    return (
        <div className="w-full lg:flex-grow">
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path={getTitleFieldPath()}>
                    {title}
                </h2>
            )}
            {text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-4': title })}
                    data-sb-field-path={getTextFieldPath()}
                >
                    {text}
                </Markdown>
            )}
        </div>
    );
}

function CtaActions(props) {
    const { actions = [], sectionFlexDirection, styles = {} } = props;
    if (actions.length === 0) {
        return null;
    }
    const actionsJustifyContent = styles.justifyContent ?? 'center';
    return (
        <div className={classNames('w-full', { 'lg:w-auto': sectionFlexDirection === 'row' })}>
            <div className={classNames('flex', mapStyles({ justifyContent: actionsJustifyContent }))}>
                <div
                    className={classNames('flex', 'flex-col', 'space-y-4', actionsJustifyContent === 'center' ? 'items-center' : 'items-start', {
                        'lg:items-center': sectionFlexDirection === 'row' && actionsJustifyContent !== 'center'
                    })}
                    data-sb-field-path=".actions"
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row', 'lg:justify-between'];
        case 'col':
            return ['flex-col'];
        default:
            return null;
    }
}
