import { useContext, useState } from "react";
import { FormularioContext } from "../../contexto/FormularioContext";
import styled from "styled-components";
import iconeEd from "../CardVideo/icone-editar.png";
import iconeEx from "../CardVideo/icone-excluir.png";

const ContainerFormularioEditar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  background-color: rgba(3, 18, 47, 0.76);
  opacity: 0.8;

  form {
    width: 300px;
    height: 374px;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-family: var(--fontePrincipal);
    color: var(--cinzaClaro);
  }
  input {
    font-family: var(--fontePrincipal);
    background-color: rgba(3, 18, 47, 0.76);
    color: var(--cinzaClaro);
    padding: 15px 10px;
    margin-bottom: 1rem;
    margin-left: 10px;
    border: 2px solid var(--azulEscuro);
    border-radius: 10px;
    font-size: 0.8rem;
    box-sizing: border-box;
    min-width: 280px;
    &:hover {
      box-shadow: -10px 10px 60px var(--azulClaro);
    }
  }
  button {
    min-width: 20%;
    margin-left: 25px;
    color: var(--cinzaEscuro);
    padding-inline: 3rem;
    background-color: rgba(3, 18, 47, 0.76);
    border: 2px solid var(--azulEscuro);
    border-radius: 20px;
    padding: 10px 30px;
    font-size: 0.8rem;
    font-weight: 600;
    font-family: var(--fonteNavBotoes);
    &:hover {
      border: 2px solid var(--azulEscuro);
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: inset 0.7px 0.5px 17px 5px var(--azulEscuro);
      color: var(--azulEscuro);
    }
  }
`;

const CardVideoEstilizado = styled.div`
  background-color: var(--preto);
  width: 324px;
  height: 230px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImagemCapa = styled.img`
  border-radius: 10px 10px 0 0;
  border: 2px solid ${(props) => props.corBorda};
  background-image: url(${(props) => props.imagem});
  transition: box-shadow 0.3s ease-in-out;
  width: 322px;
  height: 190px;

  &:hover {
    box-shadow: -10px 10px 60px ${(props) => props.corSombra};
  }
`;

const IconesEstilizados = styled.div`
  display: flex;
  gap: 35px;

  span {
    color: var(--cinzaClaro);
    font-family: var(--fontePrincipal);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.corSpan};
    }
  }

  img {
    padding-bottom: 16px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const CardVideo = (props, video, categorias) => {
  const { abrirModal, fecharModal, setVideoSelecionado, videos, setVideos } =
    useContext(FormularioContext);

  const { abrirVideoNoBanner } = useContext(FormularioContext);

  const abrirModalDeEdicao = () => {
    setVideoSelecionado(props.video);
    abrirModal();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    rolarParaOBanner();
    abrirModalDeEdicao();
  };

  const handleClickBanner = () => {
    abrirVideoNoBanner(props.video);
    rolarParaOBanner();
  };

  const rolarParaOBanner = () => {
    const elementoBanner = document.getElementById("banner");
    if (elementoBanner) {
      elementoBanner.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDelete = () => {
    setVideos(videos.filter((video) => video.id !== props.video.id));
  };

  return (
    <CardVideoEstilizado onClick={handleClickBanner}>
      <div>
        <ImagemCapa
          corBorda={props.corBorda}
          corSombra={props.corSombra}
          src={props.video.imagem}
          alt="Imagem de capa do vídeo"
        />
      </div>
      <IconesEstilizados corSpan={props.corSpan}>
        <img onClick={handleClick} src={iconeEd} alt="Ícone Editar" />
        <span onClick={handleClick}>EDITAR</span>
        <img onClick={handleDelete} src={iconeEx} alt="Ícone Excluir" />
        <span onClick={handleDelete}>DELETAR</span>
      </IconesEstilizados>
    </CardVideoEstilizado>
  );
};

export default CardVideo;
