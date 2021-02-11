/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import Lists from "./Lists"
import { css, jsx } from '@emotion/react'
import Jumbotron from 'react-bootstrap/Jumbotron'

class PokemonList extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            pokemon: [],
            pokeDetails: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    pokemon: data.results
                }, () => {
                    // Mapping pokemon results to get API url
                    this.state.pokemon.map(pokes => {
                        fetch(pokes.url)
                            .then(response => response.json())
                            .then(data => {
                                // Push pokemon details to temporary variable
                                let temp = this.state.pokeDetails
                                temp.push(data)
                                // Set state pokeDetails content with temp variable
                                this.setState({ pokeDetails: temp })
                            })
                    })
                })
            })
    }

    render() {
        const { pokeDetails } = this.state
        return (
            <div>
                <Jumbotron>
                    <h1>Hello!</h1>
                    <p>
                        This is my pokemon app project. Enjoy!
                    </p>
                </Jumbotron>
                <h2 css={css`text-align : center`}>Choose Your Pokemon!</h2>
                <div css={css`
                    padding-top : 25px; 
                    background-color : white;
                    border : none;
                    border-radius : 15px`}>
                    {this.state.loading === true && <h2>Loading...</h2>}
                    <Lists details={pokeDetails} />
                </div>
            </div>
        )
    }
}

export default PokemonList