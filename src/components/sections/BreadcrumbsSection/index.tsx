import * as React from 'react';
import classNames from 'classnames';
import Breadcrumbs from '@mui/material/Breadcrumbs';


import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';

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
            <div
                <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>
            ></div>
        </div>
    );
}
