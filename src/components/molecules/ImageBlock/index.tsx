import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/Image';

export default function ImageBlock(props) {
    const { elementId, width, height, className, url, altText = '', 'data-sb-field-path': fieldPath } = props;
    console.log(width, height);
    if (!url) {
        return null;
    }
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};
    
    const getImage = () => (
        <div className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', className)}>
            <Image
                id={elementId}
                src={url}
                alt={altText}
                width={width || 500}
                height={height || 500}
                {...annotations}
            />
        </div>
    );


    return (
        getImage()
    );
}
