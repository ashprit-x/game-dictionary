import { Heading } from '@chakra-ui/react'
import { gameQuery } from '../App'


interface Props{
    gameQuery: gameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games` 
  return (
    <Heading marginY={5} fontSize={'5xl'} as='h1'>
        {heading}
    </Heading>
  )
}

export default GameHeading