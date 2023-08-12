import './index.scss';

export default function Cabecalho() {
    return(
        <div className='cabecalho-marvel'>
            <img src="/marvel_image.png" alt="" />

            <div>
                <nav>
                    <li>Home</li>
                    <li>Personagens</li>
                    <li>Quadrinhos</li>
                    <li>Eventos</li>
                    <li>Contato</li>
                </nav>
                <img src="/m.png" alt="" />
            </div>
        </div>
    )
}