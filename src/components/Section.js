import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = (props) => {
    return (
        <Wrap bgImg={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnTxt}
                        </LeftButton>
                        {props.rightBtnTxt &&
                            <RightButton>
                                {props.rightBtnTxt}
                            </RightButton>
                        }

                    </ButtonGroup>
                </Fade>
                <DownArrow src="/Images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
      width:100%;
      height:100%;
      background-size:cover;
      background-position:center;
      background-repeat: no-repeat;
      display:flex;
      flex-direction:column;
      justify-content:space-between; //vertical
      align-items:center; //horizontal
      background-image: ${props => `url("/Images/${props.bgImg}")`}
`

const ItemText = styled.div`
      padding-top: 15vh;
      text-align:center;
      @media(max-width: 768px){
        font-size:0.9rem;
      }
`
const Buttons = styled.div`
`

const ButtonGroup = styled.div`
      display:flex;
      margin-bottom:30px;
      @media(max-width: 768px){
         flex-direction:column;
      }
      
`
const LeftButton = styled.div`
      background-color:rgba(23,26,32,0.8);
      height:40px;
      width:256px;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:100px;
      opacity:0.85;
      text-transform: uppercase;
      font-size: 0.9rem;
      cursor:pointer;
      margin: 8px;
      @media(max-width: 768px){
        font-size:0.7rem;
      }
`
const RightButton = styled(LeftButton)`
      background:white;
      opacity:0.65;
      color: black;
`
const DownArrow = styled.img`
      margin-top: 20px;
      height: 40px;
      overflow-x: hidden;
      animation:animateDown infinite 1.5s; 
`

