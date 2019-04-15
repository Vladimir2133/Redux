import React, {Fragment, useContext } from 'react'
//style
import { StyleSquare } from 'context/contextStyle'
//context
import { SquareContext } from "context/contextCreate";
import { AddSquareProvider } from 'context/contextSquareApp'



function ThirdTab() {
const {count} = useContext(SquareContext);

    const squares = [];
    for (let i = 0; i < count ; i++) {
       squares.push(<StyleSquare />)
    }

  return (
      <>
        {squares}
      </>
      )
}

export { ThirdTab }
