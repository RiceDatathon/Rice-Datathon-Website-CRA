import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../generalComponents/title';
import './faqs.css';
import { faqs } from './faqs.json';

class QuestionAnswer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            extended: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({extended: !this.state.extended});
    }

    render() {
        let height = this.state.extended ? (300) : (0);

        const altTheme = {
            backgroundColor: '#2B354C',
            color: '#A7BBCE'
        }
        return (
            <div className='dropdown-container' onClick={this.handleClick} style={this.state.extended ? (altTheme) : (undefined)}>
                <div className='dropdown-question'>
                    {this.props.question} {' '} <img src='https://icon.now.sh/arrow/2B354C' alt=''/>
                </div>
                <div className='dropdown-answer' style={{maxHeight: height}}>
                    {this.props.answer}
                </div>
            </div>
        )
    }
}

const FAQs = () => (
    <div className='faqs-page'>
        <Title title="FAQs" width={[0.2, 0.15]} theme={true} />
        <Flex className='questions' flexWrap='wrap' justifyContent='center'>
            {
                faqs.map(({question, answer}) => (
                    <Box width={[1, 0.8, 0.7, 0.6]} key={`${question.slice(0,10)}`}>
                        <QuestionAnswer question={question} answer={answer} />
                    </Box>
                ))
            }
        </Flex> 
    </div>
)

export default FAQs;