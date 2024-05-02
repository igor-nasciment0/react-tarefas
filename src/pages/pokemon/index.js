import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import Pokemon from '../../components/pokemon';

export default function PaginaPokemon() {

    const [listaPokemons, setListaPokemons] = useState([]);
    const [url, setUrl] = useState('');
    const [pagina, setPagina] = useState(0);
    const [nomeFiltro, setNomeFiltro] = useState('');

    async function buscarPokemons() {
        let apiCall = url === '' ? 
                      'https://pokeapi.co/api/v2/pokemon/' :
                      url;
        
        let resposta = await axios.get(apiCall);
        setUrl(resposta.data.next);

        let respostaArray = resposta.data.results;
        let newLista = [];

        for(let i = 0; i < respostaArray.length; i++)
        {
            let item = respostaArray[i];

            let pokemonObjectInfo = await axios.get(item.url); 
            newLista.push(pokemonObjectInfo.data);
        }

        setListaPokemons([...listaPokemons, ...newLista]);
        setPagina(pagina + 1);
    }

    return(
        <div className="pagina-pokemon">
            <img src="/logoPokedex.png" alt="" />

            <section className='lista-pokemons'>
                {listaPokemons.map(item => 
                    <Pokemon pokeInfo={item} 
                             nomeFiltro={nomeFiltro}
                             shinyPokemon={(Math.random() * 25).toFixed() === 1}         
                    />
                )}
            </section>
            
            <input type="text" placeholder="Pesquisar pokémon" value={nomeFiltro} onChange={e => setNomeFiltro(e.target.value)}/>

            <h3>Página {pagina}</h3>
            <h4>Pokedex No.{pagina > 0 ? 1 : 0} - No.{20 * pagina}</h4>
            <button onClick={buscarPokemons}>Encontrar Pokémons</button>
        </div>
    )
}
