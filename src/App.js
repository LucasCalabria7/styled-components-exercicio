import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";

import {HeaderBase} from "./Componentes/HeaderStyle"
import {HeaderSearch} from "./Componentes/HeaderStyle"
import {NavBase} from "./Componentes/NavStyle"
import {VideoPlace} from "./Componentes/VideoPlaceStyle"


export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <div className="tela-inteira">
        <HeaderBase>
          <h1>LabeTube</h1>
          <HeaderSearch type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderBase>

        <main>
          <NavBase>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </NavBase>

          <VideoPlace>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </VideoPlace>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
