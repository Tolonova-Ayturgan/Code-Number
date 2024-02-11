import React from 'react'
import styled from 'styled-components';

const InputRegistration = (props) => {
  return (
    <InputBlock>
        <StyledLabel>Phone number</StyledLabel>
        <StyledInput type={props.type} value={props.value} onChange={props.onChange} style={props.style} placeholder={props.placeholder}/>
    </InputBlock>
  )
}

export default InputRegistration

const InputBlock = styled.div`
    height: 53px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`

const UserBoxInput = styled.input`
    font-size: 16px;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    width: 395px;
    height: 29px;
    border-radius: 3px;
`

const UserBoxLabel = styled.label`
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
`

const StyledLabel = styled(UserBoxLabel)`
  color: #bdb8b8;
  font-size: 12px;
`


const StyledInput = styled(UserBoxInput)`
  &:focus + ${StyledLabel}, &:valid + ${StyledLabel} {
    color: #bdb8b8;
    font-size: 13px;
  }
`



