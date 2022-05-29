import * as React from 'react';
import classNames from 'classnames';
import Breadcrumbs from '@mui/material/Breadcrumbs';


import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Link } from '../../atoms';

export default function BreadcrumbsSection(props) {
    const { elementId, colors, styles = {}, navLinks = [] } = props;
    return (
        <div
            id={elementId || null}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                // 'sb-component-divider-section',
                colors,
                'w-full',
                'flex',
                mapStyles({ justifyContent: styles.self?.justifyContent ?? 'center' }),
                styles.self?.padding ?? 'py-12 px-4'
            )}
        >
            <Breadcrumbs aria-label="breadcrumb">
                {navLinks.map((link, index) => 
                                    
                )}
            </Breadcrumbs>
        </div >
    );
}
