import React from 'react';
import { Arrowdown, Questionarrow, Styledfaqanswer } from './styled/faqaccordion.styled';

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
                (<Arrowdown className={`${showAnswer && "rotate"}`}  />)
                : (<Arrowdown className={`${!showAnswer && "default"}`} />)}
        </Questionarrow>
        {showAnswer &&
        <p id='answer_faq'>
            {answer}
        </p>}
    </Styledfaqanswer>
  )
}
