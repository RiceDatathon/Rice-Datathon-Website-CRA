import React from 'react';
import Title from '../generalComponents/title';
import './schedule.css';

const Schedule = () => (
    <div className='schedule-page'>
        <Title title="Datathon Schedule" width={[0.7, 0.4]} theme={false} />
        <div className='schedule-items'>
            <h1 style={{fontWeight: 'normal'}}><img src='https://icon.now.sh/event/A7BBCE/50' alt=''/>Mark you calendars, the Rice Datathon will start Jan 24th and end Jan 25th 2020</h1>
            <h1 style={{fontWeight: 'normal'}}><img src='https://icon.now.sh/pin/A7BBCE/50' alt=''/>The Datathon will be held in Duncan Hall on the Rice Campus</h1>
        </div>
    </div>
)

export default Schedule;