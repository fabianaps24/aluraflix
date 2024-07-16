import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoSelecionado, setVideoSelecionado] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const abrirVideoNoBanner = (video) => {
    setVideoSelecionado(video);
  };

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/MaiteFinzi/aluraflix-api/videos")
      .then((resposta) => resposta.json())

      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  const adicionarVideo = (novoVideo) => {
    // Obter os vídeos existentes do localStorage
    const videosExistentes = JSON.parse(localStorage.getItem("videos")) || [];

    // Adicionar o novo vídeo ao array
    const videosAtualizados = [...videosExistentes, novoVideo];

    // Salvar os vídeos atualizados no localStorage
    localStorage.setItem("videos", JSON.stringify(videosAtualizados));

    // Atualizar o estado
    setVideos(videosAtualizados);
  };

  const aoVideoCadastrado = (novoVideo) => {
    const id = uuidv4();
    const videoComId = { ...novoVideo, id };
    setVideos([...videos, videoComId]); //mudei aqui
    localStorage.setItem("videos", JSON.stringify([...videos, videoComId])); // Salva os vídeos no localStorage
  };

  const abrirModal = (video) => {
    setVideoSelecionado(video);
    setShowModal(true); // Abre o modal
  };

  const fecharModal = () => {
    setShowModal(false); // Fecha o modal
  };

  const editarVideo = async (id) => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/MaiteFinzi/aluraflix-api/videos/${videoData.id}"
      );
      const data = await response.json();
      setVideo(data); // Atualiza o estado do modal com os dados do vídeo
    } catch (error) {
      console.error("Erro ao editar vídeo:", error);
    }
  };

  return (
    <FormularioContext.Provider
      value={{
        videos,
        setVideos,
        videoSelecionado,
        setVideoSelecionado,
        showModal, // Adiciona o estado do modal ao contexto
        abrirModal, // Adiciona a função para abrir o modal ao contexto
        fecharModal,
        abrirVideoNoBanner,
        aoVideoCadastrado,
        adicionarVideo,
        editarVideo,
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
};

// import React, { createContext, useEffect, useState } from "react";

// export const FormularioContext = createContext()

// export const FormularioProvider = ({children}) => {
//     const [videos, setVideos] = useState([]);

//     return (
//             <FormularioContext.Provider value={{videos , setVideos}}>
//                 {children}
//             </FormularioContext.Provider>
//         )
// }

// useEffect(() => {
//     const carregarVideos = async () => {
//         try {
//             // Simulando a carga de dados de um arquivo JSON local
//             const response = await fetch("./src/json/db.json");
//             console.log(response)
//             if (!response.ok) {
//                 throw new Error("Erro ao carregar os vídeos");
//             }
//             const data = await response.json();
//             setVideos(data.videos || []); // Certifique-se de que 'videos' esteja inicializado como uma array
//         } catch (error) {
//             console.error("Erro ao carregar os vídeos:", error);
//         }
//     };

//     carregarVideos();
// }, []); // Executa uma vez no início para carregar os vídeos

// const aoNovoVideoAdicionado = (novoVideo) => {
//     setVideos([...videos, novoVideo]);
// };
