import React from 'react'
import { styled } from 'styled-components'

const ButtonRegistration = (props) => {
  return (
    <div>
      <StyledButton className={props.className} onClick={props.onClick} variant={props.variant} disabled={props.disabled} {...props} >{props.children}</StyledButton>
    </div>
  )
}

export default ButtonRegistration


const StyledButton = styled.button`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "40px"};
  /* background: ${(props) => props.background || "white"}; */
  border: ${(props) => props.border || "0px solid"};
  /* color: ${(props) => props.color || "black"}; */
  border-radius: ${(props) => props.borderRadius || "5px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &:disabled{
        cursor: no-drop;
        color: gray;
    }
    &:hover {
    background: #03f40f;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03f40f,
                0 0 25px #03f40f,
                0 0 50px #03f40f,
                0 0 100px #03f40f;
  }
    &:active {
    background: #ef2173;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ef2173,
                0 0 25px #ef2173,
                0 0 50px #ef2173,
                0 0 100px #ef2173;
  }
`