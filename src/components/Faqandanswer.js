import React from 'react';
import { Arrowdown, Arrowup, Questionarrow, Styledfaqanswer } from './styled/faqaccordion.styled';
import arrowdown from './images/icon-arrow-down.svg';

export const Faqandanswer = ({question,answer,onClick,className}) => {
    const [showAnswer, setShowanswer] = React.useState(false);
    const showHandler = () => {
        setShowanswer(!showAnswer)
    };

  return (
    <Styledfaqanswer>
        <Questionarrow onClick={()=>showHandler()}>
            <p id='question_faq' className={`${showAnswer && "clicked"}`}>
                {question}
            </p>
            {showAnswer?
                (<Arrowup src={arrowdown} alt='arrowdown' />)
                : (<Arrowdown src={arrowdown} alt='arrowdown' />)}
        </Questionarrow>
        {showAnswer &&
        <p id='answer_faq'>
            {answer}
        </p>}
    </Styledfaqanswer>
  )
}
