import React from 'react';
import { Box } from 'rebass';
import './title.css';

const Title = props => (
    <Box className='title' width={props.width}>
        <div className={props.theme ? ('title-style1') : ('title-style2')}>
        {/* <div className='title-style2'> */}
            {props.title}
        </div>
    </Box>
)

export default Title;