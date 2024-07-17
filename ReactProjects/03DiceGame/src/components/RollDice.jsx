import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import GameRules from './GameRules'
const RollDice = ({CurrentDice, rollDice, setScore, Score}) => {
const [ShowRules, setShowRules] = useState(false)

    const toggleRules = () =>
    {
        setShowRules(!ShowRules);
    }
    return (
      <>
      <DiceContainer>
          <div className='dice'
          onClick={rollDice}
          ><img src= {`/images/dice/dice_${CurrentDice}.png`} alt="" />
          </div>
          <p>Click on dice to roll</p>
          <div className='Buttons'>
              <Button className='reset' onClick={() => setScore(0)}>Reset Score</Button>
              <Button onClick={toggleRules}>Show Rules</Button>
          </div>
      </DiceContainer>
      {ShowRules ? <GameRules /> : ""}
      </>
    )
}

export default RollDice

const DiceContainer = styled.div`
.dice{
  cursor: pointer;
}
.Buttons{
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 10px;
}
.Buttons > .reset{
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover{
        background-color: #575555;
        cursor: pointer;
        transition: 0.2s background ease-in;
    }

}
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  
`

const Button = styled.button` 
    
    padding: 10px 18px;
    gap: 10px;

    min-width: 220px;
    height: 44px;
    border-radius: 5px;

    background-color: black;
    .reset{
      background-color: white;
    }
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