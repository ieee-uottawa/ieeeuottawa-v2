import React from "react";
import { Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Action } from "../../atoms";
import classNames from "classnames";
import { theme } from "../../../../tailwind.config";

const themeStyle = require('../../../../content/data/style.json');


export default function DropdownLink({ label, dropdownLinks, inMobileMenu }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
                className='sb-component-link'
                sx={{ 
                    textTransform: 'none',
                    color: 'inherit',
                    fontFamily: theme.extend.fontFamily.fontSecondary.toString(),
                    fontWeight: themeStyle.link.weight,
                    fontSize: '1rem',
                    letterSpacing: themeStyle.link.letterSpacing,
                    ...theme.extend['sb-component-link'],
                    padding: '0',
                }}
            >
                <span>{label}</span>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {dropdownLinks.map((link, index) => (
                    <MenuItem
                        key={index}
                        onClick={handleClose}
                        sx={{
                            color: 'inherit',
                            fontFamily: theme.extend.fontFamily.fontSecondary.toString(),
                            fontWeight: themeStyle.link.weight,
                            fontSize: '1rem',
                            letterSpacing: themeStyle.link.letterSpacing,
                            ...theme.extend['sb-component-link'],
                        }}
                    >
                        <Action {...link} className={classNames(inMobileMenu && link.type === 'Button' ? 'w-full' : '')} data-sb-field-path={`.${index}`} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}