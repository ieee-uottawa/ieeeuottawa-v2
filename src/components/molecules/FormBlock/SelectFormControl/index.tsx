import * as React from 'react';
import classNames from 'classnames';
import { I18NContext } from '../../../../context/i18Ncontext';

export default function SelectFormControl(props) {
    const { name, label, labelFr, hideLabel, defaultValue, options = [], isRequired, width = 'full', 'data-sb-field-path': fieldPath } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    const { locale } = React.useContext(I18NContext);

    const getLabel = () => locale === 'fr' && labelFr ? labelFr : label;

    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            {label && (
                <label id={labelId} className={classNames('sb-label', { 'sr-only': hideLabel })} htmlFor={name} data-sb-field-path={`.${locale === 'fr' ? 'labelFr' : 'label' } .name#@for`}>
                    {getLabel()}
                </label>
            )}
            <select id={name} className="sb-select" name={name} {...attr} data-sb-field-path=".name#@id .name#@name .options">
                {defaultValue && (
                    <option value="" data-sb-field-path=".defaultValue">
                        {defaultValue}
                    </option>
                )}
                {options.length > 0 &&
                    options.map((option, index) => (
                        <option key={index} value={option} data-sb-field-path={`.${index}`}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
}
