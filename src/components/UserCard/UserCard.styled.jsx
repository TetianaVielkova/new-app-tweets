import styled from "styled-components";
import { ReactComponent as Logo } from './../../icons/Logo.svg';
import { ReactComponent as Picture } from './../../icons/picture.svg';

export const Card = styled.div`
    position: relative; 
    justify-content: center;
    flex-direction: column;
    width: 380px;
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    &:hover{
        box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.4);
    }
`
export const MainLogo = styled(Logo)`
    margin-top: 20px;
    margin-left: 20px;
`

export const BgImg = styled(Picture)`
    margin-left: 36px;
    margin-right: 36px;
    margin-bottom: 18px;
    margin-top: -14px;
    width: 308px;
    height: 168px;
`
export const Line = styled.div`
    width: 380px;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`
export const BoxAvatar = styled.div`
    position: absolute;
    overflow: hidden;
    width: 80px;
    height: 80px;
    border: 8px solid #EBD8FF;
    background:  linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 13.1749px;
    border-radius: 50%;
    margin-top: -52px;
    left: 138px;
`
export const Avatar = styled.img`
    object-fit: cover;
    width: 80px;
    height: 80px;
`

export const Button = styled.button`
    margin-right: auto;
    margin-left: auto; 
    margin-top: 20px;
    justify-content: flex-end;
    align-items: center;

    padding: 14px 56px;
    color: #373737;
    font-weight: 600;
    font-size: 18px;

    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    margin-bottom: 36px;
    :hover {
        box-shadow: inset 0 0 3px 3px #5cd3a8, 0 0 3px 3px #373737;
    }
`
export const ButtonFollowing = styled.button`
    margin-right: auto;
    margin-left: auto; 
    margin-top: 20px;
    justify-content: flex-end;
    align-items: center;

    padding: 14px 39px;
    color: #373737;
    font-weight: 600;
    font-size: 18px;

    background: #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    margin-bottom: 36px;
    :hover {
        box-shadow: inset 0 0 3px 3px #5cd3a8, 0 0 3px 3px #373737;
    }
`

export const Tweets = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    margin-top: 62px;

    color: #EBD8FF;
`

export const Followers = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    margin: 16px 0 0 0;

    color: #EBD8FF;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


