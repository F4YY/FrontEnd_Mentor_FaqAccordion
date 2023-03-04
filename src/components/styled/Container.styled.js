import styled from "styled-components"

export const Container = styled.div`
    --Very-dark-desaturated-blue: hsl(238, 29%, 16%);
    --Soft-red: hsl(14, 88%, 65%);
    --Soft-violet: hsl(273, 75%, 66%);
    --Soft-blue: hsl(240, 73%, 65%);
    --Very-dark-grayish-blue: hsl(237, 12%, 33%);
    --Dark-grayish-blue: hsl(240, 6%, 50%);
    --Light-grayish-blue: hsl(240, 5%, 91%);
    font-size: 12px;
    font-family: 'Kumbh Sans';
    --reguler: 400;
    --bold: 700;
    *{
        margin:0;
        padding: 0;
    }
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg,var(--Soft-blue),var(--Soft-violet));
    h2{
        font-size: 2.7em;
        font-weight: var(--bold);
        color:var(--Very-dark-desaturated-blue);
        margin: 60px 0 40px 30px;
        @media screen and (max-width:600px) {
            text-align: center;
            margin: 120px auto 30px;
        }
    }
    p#question_faq{
        font-size: 1.2em;
        font-weight: var(--reguler);
        color:var(--Very-dark-grayish-blue);
        :hover{
            font-weight: var(--bold);
            color:var(--Soft-red);
            cursor: pointer;
        }
    }
    p#question_faq.clicked{
        font-weight: var(--bold);
    }
    p#answer_faq{
        font-size: 1.15em;
        font-weight: var(--reguler);
        color:var(--Dark-grayish-blue);
        margin: 10px 10px 0 0;
    }
    .rotate{
        transform: rotateZ(180deg);
        transition: 0.3s ease-in-out;
    }
    .default{
        transform: rotateZ(0deg);
        transition: 0.3s ease-in-out;
    }
`