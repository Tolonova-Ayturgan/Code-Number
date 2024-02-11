import React, { useState } from 'react'
import FormRegistration from './FormRegistration'
import styled from 'styled-components'
import ButtonRegistration from '../UI/ButtonRegistration'
import { Link } from 'react-router-dom'

const Accession = ({save}) => {
    
    const [value , setValue] = useState("")
    const [disabled , setDisabled] = useState(true)

    const state = save.toString()

    const valueChangeHandler = e => {
        setValue(e.target.value)
        if(state === e.target.value){
        setDisabled(false)
        }
    }

    

  return (
    <Container>
      <TextFailed onChange={valueChangeHandler} type="text" value={value} />
      <LinkToInnerPage disabled={disabled} to={disabled ? "" : "InnerPage"} >Войти</LinkToInnerPage>
    </Container>
  )
}

export default Accession;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 140px;
`



const TextFailed = styled.input`
  width: 250px;
  height: 30px;
  padding: 7px;
  border-radius: 10px;
  outline: none;
  font-size: 23px;
`

const LinkToInnerPage = styled(Link)`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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