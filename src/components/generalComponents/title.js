import React from 'react';
import { Box } from 'rebass';
import './title.css';

const Title = props => (
    <Box className='title' width={props.width}>
        <div className={props.theme ? ('title-theme') : ('title-alternate')}>
            {props.title}
        </div>
    </Box>
)

export default Title;