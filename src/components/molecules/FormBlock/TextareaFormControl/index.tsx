import * as React from 'react';
import classNames from 'classnames';
import { I18NContext } from '../../../../context/i18Ncontext';

export default function TextareaFormControl(props) {
    const { name, label, labelFr, hideLabel, placeholder, placeholderFr, isRequired, width = 'full', 'data-sb-field-path': fieldPath } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    const { locale } = React.useContext(I18NContext);
    
    const getLabel = () => locale === 'fr' && labelFr ? labelFr : label;
    const getPlaceholder = () => locale === 'fr' && placeholderFr ? placeholderFr : placeholder;

    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    if (getPlaceholder()) {
        attr.placeholder = getPlaceholder();
    }
    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            {label && (
                <label id={labelId} className={classNames('sb-label', { 'sr-only': hideLabel })} htmlFor={name} data-sb-field-path={`.${locale === 'fr' ? 'labelFr' : 'label'} .name#@for`}>
                    {getLabel()}
                </label>
            )}
            <textarea id={name} className="sb-textarea" name={name} rows="5" {...attr} data-sb-field-path={`.name#@id .name#@name .${locale == 'fr' ? 'placeholderFr' : 'placeholder'}#@placeholder`} />
        </div>
    );
}
