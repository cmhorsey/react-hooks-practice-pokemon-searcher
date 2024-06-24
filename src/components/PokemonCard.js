import React, { useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon
  const [sprite, setSprite] = useState(sprites.front)

  function handleClick() {
    if (sprite === sprites.front) {
      setSprite(sprites.back)
    } else if (sprite === sprites.back) {
      setSprite(sprites.front)
    }
  }
  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          <img src={sprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
