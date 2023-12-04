import React,{useState} from 'react'
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import css from './Mui.module.css'
import { useNavigate } from 'react-router-dom';

function SelectMui() {
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
  return (
    <>
        <FormControl className={css.selectFormCtn}>
          <InputLabel
              variant='filled'
              id="dropdown-label"
              focused={true}
              style={{color: "#616161", fontSize: '18px'}}
          >
              Category
          </InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            value={selectedValue}
            onChange={handleChange}
            sx={{ color: 'rgb(186, 186, 186)', paddingTop: '8px', fontSize: '17px'}}
            MenuProps={{
              sx: {
                ".css-6hp17o-MuiList-root-MuiMenu-list": {
                  backgroundColor: 'rgba(34, 34, 34, 1)',color: "rgb(186, 186, 186)"
                }
              }
            }}
          
          >
            <MenuItem onClick={()=>navigate('/posts/Drawing')} value="option1">Drawings(physical)</MenuItem>
            <MenuItem onClick={()=>navigate('/posts/DigitalArt')} value="option2">Digital Arts</MenuItem>
            <MenuItem onClick={()=>navigate('/posts/Craft')} value="option3">Crafts</MenuItem>
          </Select>
        </FormControl>
    </>
  )
}

export default SelectMui;