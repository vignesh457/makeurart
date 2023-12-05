import React from 'react'
import { Autocomplete,TextField,Paper, } from '@mui/material';
import css from './Mui.module.css'
import {TagData} from '../TagData'
import { useNavigate } from 'react-router-dom';

const options = TagData;

const CustomPaper = (props) => (
  <Paper
    style={{ 
      backgroundColor: 'rgba(34, 34, 34, 0.9)', backdropFilter: 'blur(10px)', color: "rgb(186, 186, 186)", marginTop: "10px"
    }}
    {...props}
  />
);


function SearchMui() {
  const navigate = useNavigate();

  const handleChange = (e,v) => {
    navigate(`/posts/${v}`)
  }

  return (
    <Autocomplete
        className={css.searchBar}
        options={options}
        PaperComponent={CustomPaper}
        popupIcon={<></>}
        autoHighlight={true}
        onChange={handleChange}
        sx={{
          ".css-1tzgnuz-MuiInputBase-root-MuiFilledInput-root:after":
            {
              border: "none",
            }
        }}
        renderInput={(params) => (
            <TextField
                className={css.textfield}
                {...params}
                label="Search..."
                variant='filled'
                InputLabelProps={{
                    style: { color: '#848484', fontSize: '18px' }
                }}
                InputProps={{
                  ...params.InputProps, 
                  style: { color: 'rgb(186, 186, 186)' }
                }}
            />
        )}
    />
  )
}

export default SearchMui;