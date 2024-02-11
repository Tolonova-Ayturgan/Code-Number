import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ButtonRegistration from '../UI/ButtonRegistration'
import InputRegistration from '../UI/InputRegistration'
import CodeNumberSend from './CodeNumberSend'
import Accession from './Accession'

const FormRegistration = () => {

  const [state, setState] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("+996500826183")
  const [valid, setValid] = useState(false)
  const [value, setValue] = useState("")
  const [disabled , setDisabled] = useState(true)
  const [numbers , setNumbers] = useState(0)
  const [accession , setAccession] = useState(false)
  const [isModal , setIsModal] = useState(false)
  console.log(numbers);



  const showModalHandler = () =>{
    setIsModal((prev) =>!prev)
  }

  const showAccessionHandler = () =>{
    setAccession((prev) =>!prev)
  }


  
  const stateChangeHandler = (e) => {
    setValue(e.target.value)
  }
  

  const clickHundlerButton = () =>{
    setValid((prev) => !prev)
    setNumbers(Math.random().toString())
    setValue("")
    showModalHandler()
    showAccessionHandler()
  }

  const codeNumbers = () =>{
    if(value === phoneNumber){
      setTimeout(() => {
        setDisabled(false)
      }, 3000)
    }
  }

  useEffect(() => {
    codeNumbers()
  }, [value])




  return (
    <LoginContainer>
        <LoginBox>
          
          {!isModal && <>
            <LoginBoxh1>Log in</LoginBoxh1>
            <UserBox>
              <InputRegistration value={value} style={{outline:"none", borderBottom: state===false ? "1px solid #fa4949" : ""}} onChange={stateChangeHandler} type="text"  placeholder='+996'/>
            </UserBox>
          <UserBlock>
            <UserBoxButton disabled={disabled}  onClick={clickHundlerButton}>SEND <div></div> </UserBoxButton>
          </UserBlock>
          </> }
              {accession && <Accession save={numbers}/>}
       </LoginBox>
       {isModal && <CodeNumberSend save={numbers} deleteModal={setIsModal}/>}
    </LoginContainer>
    
  )
}

export default FormRegistration


const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
`

const LoginBoxh1 = styled.h1`
    font-family: "Gill Sans", sans-serif;
    color: #fff ;
    letter-spacing: 2px;
    font-weight: 500;
`

const LoginBox = styled.form`
    background: rgba(24, 20, 20, 0.987);
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
`

const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 50px;
    
`
const UserBlock = styled.div`
    display: flex;
    justify-content: center;
`


const UserBoxButton = styled(ButtonRegistration)`
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  transition: .5s;
  letter-spacing: 4px;
`;

