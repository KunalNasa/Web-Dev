import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import RollDice from './RollDice'
import NumberSelector from './NumberSelector'
import { useState } from 'react'

const GamePlay = () => {
    const [Score, setScore] = useState(0)
    const [SelectedNumber, setSelectedNumber] = useState()
    const [CurrentDice, setCurrentDice] = useState(1)

    const generateRandom = () =>
    {
        return Math.ceil(Math.random() * 6);
    }
    const rollDice = () =>
    {
        if(SelectedNumber === undefined)
        {
            alert("You have not selected any number")
            return;
        }
        const randomNumber = generateRandom();
        setCurrentDice((prev) => randomNumber)
        if(SelectedNumber === randomNumber)
        {
            setScore(Score => Score + randomNumber);
        }
        else
        {
            setScore(Score => Score - 2);
        }
        setSelectedNumber(undefined);
    }
  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore Score = {Score}/>
            <NumberSelector SelectedNumber={SelectedNumber}
            setSelectedNumber={setSelectedNumber}/>
        </div>
            <RollDice CurrentDice={CurrentDice}
            rollDice={rollDice} setScore={setScore} Score={Score}/>
        

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 30px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
`
