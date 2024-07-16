import React, { useContext } from "react";
import { FormularioContext } from "../../contexto/FormularioContext";
import styled from "styled-components";

const PlayerContainer = styled.div`
  iframe {
    display: flex;
    align-items: center;
    border: 2px solid var(--azulEscuro);
    border-radius: 10px;
    position: relative;
    margin-left: 80px;
    @media (max-width: 360px) {
      width: 100vw;
      margin-left: 50px;
      justify-content: center;
      top: 90px;
    }
    @media (max-width: 430px) {
      margin-top: 50%;
    }
    @media (max-width: 768px) {
      width: 90vw;
      margin-left: 20px;
    }
    &:hover {
      box-shadow: -10px 10px 60px var(--azulEscuro);
    }
  }
`;

const Player = () => {
  const { videoSelecionado } = useContext(FormularioContext);
  console.log("videoSelecionado:", videoSelecionado);
  if (!videoSelecionado) {
    return null; // Não renderiza nada se não houver um vídeo selecionado
  }

  return (
    <PlayerContainer>
      <iframe
        corBorda={videoSelecionado.corBorda}
        corSombra={videoSelecionado.corSombra}
        width="540"
        height="303"
        src={`https://www.youtube.com/embed/${videoSelecionado.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </PlayerContainer>
  );
};

export default Player;
