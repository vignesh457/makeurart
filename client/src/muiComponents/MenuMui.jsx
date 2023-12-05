import React from 'react'
import { Menu,MenuItem,Button } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SelectMui from './SelectMui';
import LoginMui from './LoginMui';
import { useSelector } from 'react-redux';
import Avatar from '../components/Avatar';
import { useNavigate } from 'react-router-dom';

function MenuMui() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {currentUser} = useSelector(state=>state.user);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuRoundedIcon fontSize='large' sx={{color: "#464646"}}/>
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              ".css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":{
                backgroundColor: '#212121',
                border: '1px solid #3b3b3b',
                width: '250px',
                marginTop: '10px',
                padding: '20px 10px',
              }
            }}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
        >
        <MenuItem onClick={handleClose}> <SelectMui/> </MenuItem>
        <MenuItem onClick={handleClose}> { currentUser ? <><Avatar/><h3 onClick={()=>navigate(`/user/${currentUser._id}`)}> My profile</h3></> : <LoginMui/>} </MenuItem>
      </Menu>
    </>
  )
}

export default MenuMui;