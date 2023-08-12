import "./index.scss";

export default function Heroi(props) {

    let descricao = props.infoHeroi.description;

    return(
        <div className="componente-heroi">
            <img src={props.infoHeroi.thumbnail.path + '.' + props.infoHeroi.thumbnail.extension} alt={`Imagem do ${props.infoHeroi.name}`} />
            <h2>{props.infoHeroi.name}</h2>
            <p>{
                descricao !== "" ? 
                descricao : 
                'Este herói não tem uma boa backstory. :('
            }</p>
        </div>
    )
}