import { useState } from 'react';
import Cabecalho from '../../components/marvel/cabecalho';
import './index.scss';
import axios from 'axios';
import Heroi from '../../components/marvel/heroi';

export default function Marvel() {

    const [listaHerois, setListaHerois] = useState([]);
    const [nomeHeroi, setNomeHeroi] = useState('');

    async function buscarHeroi() {
        let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nomeHeroi}&ts=1&apikey=1f1e581cbece29d99f88c624a6850bee&hash=55dfec504f0c291129390c649a218b41`;
        let resposta = await axios.get(url);
        setListaHerois(resposta.data.data.results);
    }

    function botaoEnter(e)
    {
        e.key === 'Enter' && buscarHeroi();
        console.log(listaHerois);
    }

    return(
        <div className='pagina-marvel'>
            <Cabecalho />

            <main>
                <div className="container-title">
                    <h1>Personagens da MARVEL</h1>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
                        <input type="text" placeholder="Nome do personagem" value={nomeHeroi} onChange={e => setNomeHeroi(e.target.value)} onKeyDown={botaoEnter}/>
                        <img src="/assets/images/icons/Union.png" alt="" />
                    </div>
                </div>

                <section className="lista-herois">
                    {listaHerois.map(
                        item => <Heroi infoHeroi={item}/> 
                    )}
                </section>    
            </main>
            
        </div>
    )
}