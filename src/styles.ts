import { createGlobalStyle } from 'styled-components'

export const cores = {
  bege: '#ffebd9',
  begeCLaro: '#FFF8F2',
  begeEscuro: '#E66767'
}

export const CssGlobal = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
}

body{
background-color: ${cores.begeCLaro}
}
`
