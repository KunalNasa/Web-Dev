import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const NumberSelector = ({ SelectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    return (
        <NumberContainer>
            <div className='flex'>
                {
                    arrNumber.map((value, i) => (
                    <Box key={i} isSelected={value === SelectedNumber}
                    // onclick takes function
                    onClick={() => setSelectedNumber(value)}>
                        {value}
                    </Box>))
                }
            </div>
            <p>Select Number</p>
        </NumberContainer>
    )
}

export default NumberSelector

const NumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
;
    
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    
`
