import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`

:root {
  --fontePrincipal: 'Roboto', sans-serif;
  --fonteNavBotoes: 'Source Sans 3' , sans-serif;
  --cinzaClaro:#F5F5F5;
  --azulClaro:#6BD1FF;
  --azulEscuro:#2271D1;
  --chumbo:#262626;
  --preto:#000000;
  --amarelo:#FFBA05;
  --cinzaEscuro:#CCCCCC;
}

body {
  margin: 0;
  font-family: var(--fontePrincipal);
  color:var(--cinzaClaro);
  background-color: var(--preto); 
  min-height: 100vh;
}


html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}



strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

    
`;
export default EstilosGlobais;
