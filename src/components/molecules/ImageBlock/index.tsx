import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export default function ImageBlock(props) {
    const { elementId, width, height, className, url, altText = '', 'data-sb-field-path': fieldPath } = props;
    if (!url) {
        return null;
    }
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    const base_url = process.env.base_url || '';

    const loader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    }
    
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
