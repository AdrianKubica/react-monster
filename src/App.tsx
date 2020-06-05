import React, { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

interface IState {
  monsters: Monster[]
  searchField: string
}

export interface Monster {
  id: string
  name: string
}

export const handleFetchAPICall = async (url: string) => {
  const res = await fetch(url)
  return await res.json()
}

class App extends Component<{}, IState> {
  readonly state: IState = {
    monsters: [],
    searchField: "",
  }

  async componentDidMount() {
    this.setState({ monsters: await handleFetchAPICall("http://jsonplaceholder.typicode.com/users") })
  }

  handleChange = (e: any) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App
