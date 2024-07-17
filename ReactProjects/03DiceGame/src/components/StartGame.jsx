import React from 'react'
import styled from 'styled-components'
const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="Dices"/>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
height: 100vh;
align-items: center;
.content{
    h1{
        font-size: 96px;
    }
}
`;

const Button = styled.button` 
    padding: 10px 18px;
    gap: 10px;

    min-width: 220px;
    height: 44px;
    border-radius: 5px;

    background-color: black;
    border: none;
    color: white;
    font-size: 16px;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: #575555;
        cursor: pointer;
        transition: 0.2s background ease-in;
    }
`