import React from 'react'
import css from '../components/Review.module.css'
import { Slider } from '@mui/material'

const ProgressBar = React.memo(({type, value, color}) => {
  return (
    <div className={css.progressBar}>
        <span className={css.progressLabel}>{type}</span>
        <Slider 
            className={css.ratingSlider}
            value={value}
            sx={{color: `${color}!important`, '& .MuiSlider-thumb': { display: 'none' }}}
        />
    </div>
  )
})

export default ProgressBar