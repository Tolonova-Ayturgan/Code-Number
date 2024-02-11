import React, { useState } from 'react'
import styled from 'styled-components'
import FormRegistration from './FormRegistration'
import Accession from './Accession';
import { RxCross1 } from "react-icons/rx";

const CodeNumberSend = ({save, deleteModal}) => {

   return (
    <div>
        <ModalBlock>
           <p>{save} - ваш проверочный код.</p>
        </ModalBlock>

    </div>
  )
}

export default CodeNumberSend


const ModalBlock = styled.div`
    width: 400px;
    height: 60px;
    background-color: #d5d5d5;
    border-radius: 10px;
    position: absolute;
    top: 50px;
    animation: slide-down 1000ms ease-out forwards;
    left: calc(50% - 13.5rem);
    display: flex;
    justify-content: space-around;
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

