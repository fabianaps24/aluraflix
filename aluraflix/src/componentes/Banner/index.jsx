import React, { useContext } from "react";
import styled from "styled-components";
import { FormularioContext } from "../../contexto/FormularioContext";
import Player from "../Player";

const ContainerBanner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background-size: cover;
  max-height: 120px;
  position: relative;
  margin-top: 14%;

  @media (max-width: 768px) {
    max-height: 80px;
    margin-top: 44%;
  }
  /* @media (max-width: 1024px){
   max-height:60px;
   margin-top: 22%;
} */
  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 20px;
    @media (max-width: 430px) {
      padding: 0;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  header {
    font-family: var(--fontePrincipal);
    font-size: 1rem;
    font-weight: 800;
    color: var(--cinzaClaro);
    text-shadow: var(--preto) 0.1em 0.1em 0.2em;
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    &:hover {
      -webkit-box-shadow: inserção -4px 24px 102px 76px rgba(34, 113, 29, 0.41);
      -moz-box-shadow: inserção -4px 24px 102px 76px rgba(34, 13, 209, 0.41);
      box-shadow: inset -4px 24px 102px 76px rgba(34, 113, 209, 0.41);
    }
    @media (max-width: 360px) {
      display: none;
    }
    @media (max-width: 430px) {
      display: none;
    }
  }
  h2 {
    font-size: 2rem;
  }
`;

const ImagemFundo = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative; /* Posiciona a imagem como absoluta */
  top: 0;
  left: 0;
  min-width: 100vw;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  @media (max-width: 360px) {
    background-image: none;
  }
  @media (max-width: 430px) {
    background-image: none;
  }
`;

const CardBanner = () => {
  const { videoSelecionado } = useContext(FormularioContext);

  if (!videoSelecionado) {
    console.log(videoSelecionado);
    return null; // Não renderiza nada se não houver um vídeo selecionado
  }

  console.log(videoSelecionado);
  return (
    <ContainerBanner id="banner">
      <ImagemFundo imagem={videoSelecionado.imagem}>
        <Player videoId={videoSelecionado.id} /> {/* Renderiza o Player */}
        <div>
          <header>
            <h2>{videoSelecionado.categoria} </h2>
            <p>{videoSelecionado.titulo}</p>
            <p>{videoSelecionado.descricao}</p>
          </header>
        </div>
      </ImagemFundo>
    </ContainerBanner>
  );
};

export default CardBanner;
