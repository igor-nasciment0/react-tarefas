import './index.scss';

import BarraLateral from "../../components/instagram/barraLateral"
import { useState } from 'react';
import Post from '../../components/instagram/post';

export default function Instagram() {

    const [listaPosts, setListaPosts] = useState([
        {
            usuario: 'igao',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSEKyces3VYSKco9D93imYTD5BcSv9qFxz6QOpomEnma-Yt4NbnpvkktnH74irZXGH7eg&usqp=CAU',
            tempo: '2 sem',
            descricao: 'Você não vai acreditar. Mas você cabia aqui. Eu segurava você e dizia “Esse menino vai ser o melhor menino do mundo. Esse menino vai ser melhor do que qualquer um que conhecemos.”. E você cresceu bom, maravilhoso. Aí chegou a hora de você ser adulto e conquistar o mundo. E conquistou. Mas em algum ponto desse percurso, você mudou. Você deixou de ser você. Agora deixa as pessoas botarem o dedo na sua cara e dizer que você não é bom. Eu vou te dizer uma coisa que você já sabe: O mundo não é um grande arco-íris. É um lugar sujo, é um lugar cruel. Que não quer saber o quanto você é durão. Vai botar você de joelhos e você vai ficar de joelhos para sempre se você deixar. Você, eu, ninguém vai bater tão duro como a vida. Mas não se trata de bater duro. Se trata de quanto você aguenta apanhar e seguir em frente. O quanto você é capaz de aguentar e continuar tentando. É assim que se consegue vencer. Agora se você sabe o seu valor, então vá atrás do que você merece. Mas tem que ter disposição para apanhar. E nada de apontar dedos, dizer que você não consegue por causa dele, dela ou de quem seja. Só covardes fazem isso e você não é covarde. Você é melhor do que isso!',
            imgPost: 'https://cdn.pensador.com/img/frase/ep/ic/epicuro_as_pessoas_felizes_lembram_o_passado_com_gratid_l26w94k.jpg',
            curtidas: 123,
        }
    ]);
    const [usuario, setUsuario] = useState('');
    const [avatar, setAvatar] = useState('');
    const [tempo, setTempo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imgPost, setImgPost] = useState('');
    const [curtidas, setCurtidas] = useState(0);

    function postar()
    {
        let newPost = {
            usuario: usuario,
            avatar: avatar,
            tempo: tempo,
            descricao: descricao,
            imgPost: imgPost,
            curtidas: curtidas,
        }

        setListaPosts([...listaPosts, newPost]);

        console.log(listaPosts);
    }

    return (
        <div className="pagina-instagram">
            <BarraLateral />

            <main>
                <h3>Novas Publicações</h3>

                <nav>
                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13.png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (1).png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (2).png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (3).png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (4).png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (5).png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (6).png" alt="" />
                    </div>

                    <div>
                        <img src="/assets/images/instagram_people/Ellipse 13 (7).png" alt="" />
                    </div>
                </nav>

                <section className="sec-input">
                    <div className="container-input">
                        <div className="input">
                            <label>Usuário:</label>
                            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label>Tempo:</label>
                            <input type="text" value={tempo} onChange={e => setTempo(e.target.value)}/>
                        </div>
                    </div>

                    <div className="input">
                        <label>Avatar:</label>
                        <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)}/>
                    </div>

                    <div className="input">
                        <label>Descrição:</label>
                        <textarea type="text" style={{ height: '77px' }} value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    </div>

                    <div className="container-input">
                        <div className="input">
                            <label>Post:</label>
                            <input type="text" value={imgPost} onChange={e => setImgPost(e.target.value)}/>
                        </div>

                        <div className="input">
                            <label>Curtidas:</label>
                            <input type="number" value={curtidas} onChange={e => setCurtidas(e.target.value)}/>
                        </div>
                    </div>

                    <button onClick={postar}>Postar</button>
                </section>

                <section className="sec-posts">
                    {listaPosts.map(
                        item => <Post infoPost={item}/>
                    )}
                </section>
            </main>
        </div>
    )
}