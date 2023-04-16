import React from 'react'
import { MovesCard } from './MovesStyle'

export const Moves = ({moveName}) => {
  return (
    <MovesCard>
        {moveName}
    </MovesCard>
  )
}
