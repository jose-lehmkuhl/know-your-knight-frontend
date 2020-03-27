import React, { useState, useEffect } from 'react';
import { fetchDestinations } from '../../service/api'
import {  Wrapper } from './styles'

import Row from './componets/Row'

const Chessboard = ({ showDestinations }) => {
    const [getPosition, setPosition] = useState(null)
    const [getDestinations, setDestinations] = useState([])
    useEffect(() => {
        const fetchFromApi = async () => {
            if (getPosition === null) return
            const data = await fetchDestinations(getPosition)
            setDestinations(data)
        }
        setDestinations([])

        fetchFromApi()

    }, [getPosition])

    const getFilteredDestinations = (rowNumber) => {
        if (!showDestinations) return []

        return getDestinations.filter(cell => cell.includes(`${rowNumber}`))
    }

    const renderRows = () => {
        const rows = []
        for (let i = 8; i > 0; i--) {
            rows.push(
                <Row
                    key={i}
                    knightPosition={getPosition}
                    destinations={getFilteredDestinations(i)}
                    rowNumber={i}
                    setKnightPosition={position => setPosition(position)}
                />
            )
        }

        return rows
    }

    return(
        <Wrapper container justify="center">
            {renderRows()}
        </Wrapper>
    )
};

export default Chessboard;
