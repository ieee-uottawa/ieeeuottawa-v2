import * as React from 'react';
import classNames from 'classnames';
import Action from '../../atoms/Action';

export default function ActionList(props) {
    const { linkListObject, inMobileMenu } = props;
    const { label, links } = linkListObject;
    return (
        <div className="hidden group-hover:block">
            <button class="dropbtn">{label}
            <i class="fa fa-caret-down"></i>
            </button>
            {links.map((link, index) => (
                <li key={index}>
                    <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
                </li>
            ))}
        </div>
    )
}
