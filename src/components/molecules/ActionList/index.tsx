import * as React from 'react';
import classNames from 'classnames';
import Link from '../../atoms/Link';
import { iconMap } from '../../svgs';

export default function ActionList(props) {
    const {
        links
    } = props;
    const IconComponent = icon ? iconMap[icon] : null;
    const annotations = fieldPath
        ? {
            'data-sb-field-path': [
                fieldPath,
                `${fieldPath}.url#@href`,
                `${fieldPath}.altText#@aria-label`,
                `${fieldPath}.elementId#@id`,
                `${fieldPath}.label#span[1]`,
                `${fieldPath}.icon#svg[1]`
            ]
                .join(' ')
                .trim()
        }
        : {};

    const getLink = () => (
        <Link
            href={url}
            aria-label={altText}
            id={elementId || null}
            className={classNames(
                'sb-component',
                'sb-component-block',
                type === 'Button' ? 'sb-component-button' : 'sb-component-link',
                {
                    'sb-component-button-primary': type === 'Button' && style === 'primary',
                    'sb-component-button-secondary': type === 'Button' && style === 'secondary',
                    'sb-component-button-icon': type === 'Button' && !label
                },
                className
            )}
            {...annotations}
        >
            {label && <span>{label}</span>}
            {showIcon && IconComponent && (
                <IconComponent
                    className={classNames('fill-current h-5 w-5', {
                        'order-first': iconPosition === 'left',
                        'mr-1.5': label && iconPosition === 'left',
                        'ml-1.5': label && iconPosition === 'right'
                    })}
                />
            )}
        </Link>
    )

/*  
    if (type === "LinkList") {
        {links} = props;
        return (
            <div>
                get
            </div>
        )
    }
*/

    return getLink();
}
