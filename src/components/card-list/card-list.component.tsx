import React from "react"
import "./card-list.styles.css"
import { Monster } from "../../App"
import { Card } from "../card/card.component"

export const CardList = (props: any) => (
  <div className="card-list">
    {props.monsters.map((monster: Monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)
