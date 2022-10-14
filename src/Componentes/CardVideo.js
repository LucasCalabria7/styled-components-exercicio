import styled from 'styled-components'

const VideoCard = styled.div `
background-color: violet;
color: white;
font-size: 1.25rem;
display: flex;
justify-content: center;
align-items: center;
padding-right: 2vw;
`

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <VideoCard onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </VideoCard>
  );
}

export default CardVideo;
