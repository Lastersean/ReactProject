import {useState} from 'react'
const ThievesHW = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"

        }
     })

    const handleClick = () => {
      
      setGame( {id: 1, player:{name: 'Sean'}})

    }
  return (
    <div onClick={handleClick}>ThievesHW{game.player.name} </div>
  )
}

export default ThievesHW