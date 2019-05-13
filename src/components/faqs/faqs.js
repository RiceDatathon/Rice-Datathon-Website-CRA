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
        this.setState({ extended: !this.state.extended });
    }

    render() {
        let height = this.state.extended ? (500) : (0);

        const altTheme = {
            backgroundColor: '#2B354C',
            color: '#A7BBCE'
        }
        return (
            <div className='dropdown-container' onClick={this.handleClick} style={this.state.extended ? (altTheme) : (undefined)}>
                {/* <div className='dropdown-question' style={this.state.extended ? ({backgroundColor: '#2B354C'}):({backgroundColor: '#A7BBCE'})}> */}
                <div className='dropdown-question'>
                    {this.props.question} {' '} <img src='https://icon.now.sh/arrow/2B354C' alt='' />
                </div>
                <div className='dropdown-answer' style={{ maxHeight: height }}>
                    {this.props.answer}
                </div>
            </div>
        )
    }
}

const FAQs = () => {

    const columns = [
        [],
        [],
        []
    ]

    for (let i = 0; i < faqs.length; i++) {
        columns[i % 3].push(
            <Box width={1} key={`${faqs[i].question.slice(0, 10)}`}>
                <QuestionAnswer question={faqs[i].question} answer={faqs[i].answer} />
            </Box>
        )
    }

    return (
        <div className='faqs-page'>
            <Title title="FAQs" width={[0.5, 0.15]} theme={true} />
            <Flex className='questions' flexDirection='row' flexWrap='wrap' justifyContent='center'>
                {
                    columns.map(column => (
                        <Box width={[1, 0.3]} className='question-column' key={`C+${columns.indexOf(column)}`}>
                            <Flex flexDirection='column'>
                                {column}
                            </Flex>
                        </Box>
                    ))
                }
            </Flex>
        </div>
    )
}

export default FAQs;