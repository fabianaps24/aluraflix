import styled from "styled-components";

const ConteudoContainer = styled.section`
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: var(--chumbo);
  color: var(--cinzaClaro);
  padding-block: 1rem;
`;

const Container = ({ children }) => {
  return <ConteudoContainer>{children}</ConteudoContainer>;
};

export default Container;
