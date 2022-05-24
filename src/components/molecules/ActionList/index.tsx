import * as React from 'react';
import classNames from 'classnames';
import Action from '../../atoms/Action';

export default function ActionList(props) {
    const { links, inMobileMenu } = props;

    return (
        <div className="none">
            {links.map((link, index) => (
                <li key={index}>
                    <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
                </li>
            ))}
        </div>
    )
}
