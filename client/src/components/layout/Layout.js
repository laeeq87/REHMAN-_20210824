import React from 'react'
import { Container, } from 'react-bootstrap'


export const Layout = (props) => {
    return (
    <Container data-testid= "tst-layout">
    {props.children}
    </Container>
    )
  }
