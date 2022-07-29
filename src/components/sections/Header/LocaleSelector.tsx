import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { theme } from "../../../../tailwind.config";
const themeStyle = require('../../../../content/data/style.json');


export default function LocaleSelector() {

    const [age, setAge] = useState<string>('EN');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    
    return (
        <div>
            <FormControl size="small" fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
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
                    <MenuItem value={"EN"}>EN</MenuItem>
                    <MenuItem value={"FR"}>FR</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}