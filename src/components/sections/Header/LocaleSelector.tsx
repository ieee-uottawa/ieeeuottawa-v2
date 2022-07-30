import React, { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { theme } from "../../../../tailwind.config";
import { I18NContext } from '../../../utils/i18Ncontext';
const themeStyle = require('../../../../content/data/style.json');


export default function LocaleSelector() {

    const { locale, setLocale } = useContext(I18NContext);

    const handleChange = (event: SelectChangeEvent) => {
        setLocale(event.target.value as string);
    };
    
    return (
        <div>
            <FormControl size="small" fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={locale}
                    label="Language"
                    onChange={handleChange}
                    sx={{
                        textTransform: 'none',
                        color: 'inherit',
                        fontFamily: theme.extend.fontFamily.fontSecondary.toString(),
                        fontWeight: themeStyle.link.weight,
                        fontSize: '1rem',
                        letterSpacing: themeStyle.link.letterSpacing,
                        ...theme.extend['sb-component-link'],
                        // padding: '0',
                    }}
                >
                    <MenuItem value={"en"}>EN</MenuItem>
                    <MenuItem value={"fr"}>FR</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}