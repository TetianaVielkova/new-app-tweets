import styled from "styled-components";
import {  NavLink } from "react-router-dom";

export const BtnGoHome = styled(NavLink)`
    margin: 20px;
    max-width: 130px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    padding: 10px 40px;
    color: #373737;
    font-weight: 500;
    font-size: 16px;

    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    &:hover,
    &:focus{
    color: #5CD3A8;
    font-weight: 600;
    transform: scale(1.05);
`

export const IconArrow  = styled.div`
    margin-right: 8px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const BtnLoadMore  = styled.button`
    margin: 40px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 15px 56px;
    color: #373737;
    font-weight: 600;
    font-size: 20px;

    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    &:hover,
    &:focus{
    color: #5CD3A8;
    background: #4B0082;
    transform: scale(1.05);
`
