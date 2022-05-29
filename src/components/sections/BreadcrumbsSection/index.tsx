import * as React from 'react';
import classNames from 'classnames';
import Breadcrumbs from '@mui/material/Breadcrumbs';


import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';
import { mapMaxWidthStyles } from '../../../utils/map-sizing-styles-to-class-names';

export default function BreadcrumbsSection(props) {
    const { elementId, colors, styles = {}, navLinks = [] } = props;
    return (
        <div
            id={elementId || null}
            {...getDataAttrs(props)}
            style={styles.self}
            className={classNames(
                'sb-component',
                'sb-component-section',
                // 'sb-component-divider-section',
                colors,
                // 'w-full',
                // 'flex',
                mapStyles({ justifyContent: styles.self?.justifyContent ?? 'left', width: styles.self?.width ?? 'narrow'}),
                mapMaxWidthStyles({ width: styles.self?.width ?? 'narrow' }),
                styles.self?.padding ?? 'py-12 px-4'
            )}

        >
            <Breadcrumbs aria-label="breadcrumb">
                {navLinks.map((link, index) =>
                    <Action {...link} data-sb-field-path={`.${index}`} />
                )}
            </Breadcrumbs>
        </div >
    );
}
