import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:${variables.fonts.primaryFont} ;
}

html {
  font-size: 62.5%;
}
@media (max-width: 768px) {
  html {
    font-size: 54.6875%;
  }
}


body{
  background: ${(props) => props.theme.gray900};
  color: ${(props) => props.theme.gray300};
  -webkit-font-smoothing: antialiased;
  
}

body,
input,
textarea,
button{
  font-weight: ${variables.fontWeight.regular};
  font-size:${variables.textSizes.textM};
  
  
  border: none ;
  outline: none ;
}

button{
  background:none ;
  
}

p,span, strong, li, h1, h2, h3, h4, h5, h6, a, time, label{
  font-size:1.6rem;
  
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme.green500} ;
}

::-webkit-scrollbar {
  width:10px;
  height: 10px;
}


::-webkit-scrollbar-track {
  background: ${(props) => props.theme.gray700};
}


::-webkit-scrollbar-thumb {
  
  background: ${(props) => props.theme.yellow500};
  border-radius: 5px;
}


`
