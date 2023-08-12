import './index.scss';

export default function Post(props) {
    return(
        <div className="insta-post">
            <div className='usuario'>
                <img src={props.infoPost.avatar} alt="" />
                <div>
                    <h4>{props.infoPost.usuario} <span> • {props.infoPost.tempo}</span></h4>

                    <img src="/assets/images/icons/verified.svg" alt="" />
                </div>
            </div>

            <img src={props.infoPost.imgPost} alt="" />

            <div className="acoes">
                <img src="/assets/images/icons/like.png" alt="" />
                <img src="/assets/images/icons/circle.png" alt="" />
            </div>

            <h4>{props.infoPost.curtidas} curtidas</h4>

            <div className="descricao">
                <h4>{props.infoPost.usuario}</h4>
                <p>{props.infoPost.descricao}</p>
            </div>

            <hr/>
        </div>
    )
}