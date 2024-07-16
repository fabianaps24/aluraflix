import styled from "styled-components";
import CardVideo from "../CardVideo";
import { useContext } from "react";
import { FormularioContext } from "../../contexto/FormularioContext";

const CategoriaEstilizada = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: start;
  margin-top: 90px;
  margin-bottom: 20px;
  @media (max-width: 360px) {
    margin-top: 140px;
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 250px;
    margin-bottom: 5px;
  }
  /* @media (max-width: 1024px){
        margin-top: 200px;
        margin-bottom:20px;
    } */
  h2 {
    padding: 1rem 1rem;
    border-radius: 15px;
    width: 180px;
    height: 30px;
    font-size: 22px;
    font-family: var(--fontePrincipal);
    font-weight: 800;
    text-align: center;
    background-color: ${(props) => props.corNome};
    margin-top: 20px;
    @media (max-width: 768px) {
      margin-left: 10px;
    }
  }
`;
const CaixaCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 25px;
  @media (max-width: 360px) {
    gap: 40px;
  }
  /* @media (max-width: 1024px){
        gap: 20px;
    } */
`;

export const aoDeletar = (videoId) => {
  setVideos(videos.filter((video) => video.id !== videoId)); // Remove o vídeo da lista
};

const Categoria = (props) => {
  const { videos, setVideos } = useContext(FormularioContext);
  const formularioContext = useContext(FormularioContext);

  const handleDelete = (videoId) => {
    setVideos(videos.filter((video) => video.id !== videoId));
  };

  const videosDaCategoria = videos.filter(
    (video) => video.categoria.toLowerCase() === props.nome.toLowerCase()
  );
  return videosDaCategoria.length > 0 ? (
    <CategoriaEstilizada corNome={props.corNome}>
      <h2>{props.nome}</h2>
      <CaixaCard>
        {videosDaCategoria.map((video, index) => {
          return (
            <CardVideo
              key={index}
              video={video}
              corBorda={props.corBorda}
              corSombra={props.corSombra}
              corSpan={props.corSpan}
              aoDeletar={handleDelete}
              FormularioContext={FormularioContext}
            />
          );
        })}
      </CaixaCard>
    </CategoriaEstilizada>
  ) : (
    ""
  );
};

export default Categoria;
