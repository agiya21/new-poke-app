/** @jsxRuntime classic /
/* @jsx jsx */

import React from "react"
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { css, jsx } from '@emotion/react'
import pokeMenu from "../img/pokeMenu.png"
import backpack from "../img/backpack.png"

function NavBarFooter() {
    return (
        <footer>
            <Navbar css={css`background-color : white`} fixed="bottom" className="justify-content-center">
                <Nav>
                    <Nav.Item css={css`
                        padding : 10px`}>
                        <Link to="/" className="d-flex flex-sm-column">
                            <img
                                src={pokeMenu}
                                width="30"
                                height="30"
                                alt="pokeball-menu"
                                class="center"
                                css={css`display : block ; margin-left: auto; margin-right: auto`} />
                            <b>Pokemon List</b>
                        </Link>
                    </Nav.Item>
                    <Nav.Item css={css`
                        padding : 10px`}>
                        <Link to="/MyPokemonList" className="d-flex flex-column">
                            <img 
                                src={backpack}
                                width="30"
                                height="30"
                                alt="backpack-pic"
                                css={css`display : block ; margin-left: auto; margin-right: auto`} />
                            <b>My Pokemon List</b>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </footer>
    )
}

export default NavBarFooter