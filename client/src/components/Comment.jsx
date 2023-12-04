import React from 'react'
import css from './Comment.module.css'
import { Rating } from '@mui/material'

const Comment = React.memo(({name, dp, rating, message, date}) => {
    return (
        <div className={css.main}>
            <div className={css.header}>
                <div className={css.leftHeader}>
                    <img className={css.dp} src={dp} alt=''/>
                    <span className={css.nameRatingCtn}>
                        <h3 className={css.name}>{name}</h3>
                        <Rating size='small' defaultValue={rating} className={css.rating} readOnly/>
                    </span>
                </div>
                <div className={css.rightHeader}>
                    {new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
            </div>
            <div className={css.body}>{message}</div>
        </div>
    )
})

export default Comment