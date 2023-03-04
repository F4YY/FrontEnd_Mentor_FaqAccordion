import styled from "styled-components";
import bgpatterndesktop from '../images/bg-pattern-desktop.svg';
import bgpatternmobile from '../images/bg-pattern-desktop.svg';
import womandesktop from '../images/illustration-woman-online-desktop.svg';
import womanmobile from '../images/illustration-woman-online-mobile.svg';
import arrowdown from '../images/icon-arrow-down.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Styledfaqaccordion = styled(Hstackflexi)`
    width: 920px;
    min-height:495px;
    padding: 15px 0;
    border-radius: 25px;
    background-color:#fff;
    box-shadow: 0 40px 30px -10px hsla(273, 25%, 16%, 0.4);
    position: relative;
    @media screen and (max-width:1025px) {
        width: 90%;
        height: auto;
        margin: 20px 0;
    }
    @media screen and (max-width:600px) {
        width: 90%;
        min-height:auto;
        margin:150px 20px 20px;
        position: relative;
    }
`
//Styled for left side:
export const Leftside = styled.section`
    display:flex;
    width: 460px;
    min-height: 510px;
    background-image: url(${bgpatterndesktop});
    background-size: auto;
    background-repeat: no-repeat;
    background-position-x: -565px;
    background-position-y: -300px;
    overflow: hidden;
    @media screen and (max-width:1025px) {
        width: 80%;
        min-height: auto;
        background-position-y: -350px;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        min-height:auto;
        overflow: initial;
        position:relative;
    }
`
export const Boximage = styled.img`
    width: 190px;
    height: 190px;
    position: absolute;
    top:40%;
    left:-10%;
    @media screen and (max-width:1025px) {
        top:30%;
        left:-10%;
    }
    @media screen and (max-width:600px) {
        display: none;
        top:0;
        left:0;
    }
`
export const Womanimage = styled.div`
    display: flex;
    width: 480px;
    height: 360px;
    background-image: url(${womandesktop});
    background-repeat: no-repeat;
    margin: 65px 0 0 -70px;
    @media screen and (max-width:1025px) {
        margin: 20px 0 0 -70px;
    }
    @media screen and (max-width:600px) {
        display: flex;
        position: absolute;
        width: 260px;
        height: 220px;
        background-image: url(${womanmobile});
        background-size: auto;
        margin-top: -130px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
`
//Styled for right side:
export const Rightside = styled.div`
    width: 460px;
    min-height: 510px;
    border-radius: 0 25px 25px 0;
    @media screen and (max-width:1025px) {
        width: 90%;
        height:auto;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        height:auto;
        background-image: url(${bgpatternmobile});
        background-size: 73%;
        background-repeat: no-repeat;
        background-position-y: -12em;
        background-position-x:center;
    }
`
export const Styledfaqanswer = styled(Vstack)`
    width: 320px;
    height: auto;
    margin: 10px 0 10px 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--Light-grayish-blue);
    @media screen and (max-width:1025px) {
        width: 85%;
    }
    @media screen and (max-width:600px) {
        width: 85%;
        margin: 10px auto;
    }
`
export const Questionarrow = styled(Hstack)`
    justify-content: space-between;
    align-items: center;
`
export const Arrowdown = styled.div`
    width: 10px;
    height: 8px;
    margin-left:10px;
    color: var(--Soft-red);
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    :hover{
        font-weight: var(--bold);
        cursor: pointer;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`