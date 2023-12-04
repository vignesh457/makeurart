import React,{useState} from 'react'
import { Autocomplete,TextField,Paper, } from '@mui/material';
import css from './Mui.module.css'
import { TagData } from '../TagData';

const options = TagData;

const CustomPaper = (props) => (
  <Paper
    style={{ 
      backgroundColor: 'rgba(34, 34, 34, 0.9)', backdropFilter: 'blur(10px)', color: "rgb(186, 186, 186)", marginTop: "10px"
    }}
    {...props}
  />
);

function TagSelectMui({interests, setInterests, name}) {
    const [value, setValue] = useState(null);
    

    const handleTagChange = (e,v) =>{
        setValue(v);
        setInterests((prev) => prev.filter((interest) => interest!==v));
        setTimeout(()=> {
            setInterests((prev) => [...prev,v]);
            setValue(null);
        }, 0)
    }

    return (
        <Autocomplete
            className={css.searchBar}
            options={options}
            PaperComponent={CustomPaper}
            popupIcon={<></>}
            value={value}
            autoHighlight={true}
            onChange={handleTagChange}
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
                    label={`Search Your ${name}...`}
                    variant='filled'
                    InputLabelProps={{
                        style: { color: '#616161', fontSize: '18px' }
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

export default TagSelectMui;