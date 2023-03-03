import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    Boximage,
    Leftside,
    Rightside,
    Styledfaqaccordion,
    Womanimage
} from './styled/faqaccordion.styled';
import boximage from './images/illustration-box-desktop.svg';
import faqs from '../faqs.json'
import { Faqandanswer } from './Faqandanswer';

export const FaqAccordion = () => {
  return (
    <Container>
        <Styledfaqaccordion>
            <Boximage src={boximage} alt='boximage' />
            <Leftside>
                <Womanimage/>
            </Leftside>
            <Rightside>
                <h2>
                    FAQ
                </h2>
                {faqs.map((faq)=>
                    <Faqandanswer
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                    />
                )}
            </Rightside>
        </Styledfaqaccordion>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | FAQ accordion.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
    </Container>
  )
}
