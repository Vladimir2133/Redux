import React, {Fragment, useContext } from 'react'

import { Button } from 'context/contextStyle'
// context
import { SquareContext } from 'context/contextCreate'
// constants
import { AddSquareProvider } from 'context/contextSquareApp'

function SquareButtons() {

    const {setCount} = useContext(SquareContext)

    return(
        <>
            <Button onClick={setCount}> Доавить квадрат </Button>
        </>
    )
}

export {SquareButtons}