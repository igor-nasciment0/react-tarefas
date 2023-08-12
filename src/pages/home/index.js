import { Link } from 'react-router-dom';
import './index.scss';

export default function Home() {
    return(
        <div className="pagina-home">
            <h1>Tarefas em React</h1>
        
            <nav>
                <li><Link to={'/instagram'}>Instagram</Link></li>
            </nav>
        </div>
    )
}