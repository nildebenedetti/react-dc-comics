import comics from '../data/comics.js';
import style from './Main.module.css'

{/* Aggiungo la funzione per fare render da dati oggetto */}

function renderCards(objList) {
    let myCardsList = objList.map( objEl => {
        const { id, series, thumb} = objEl;

        return <li key={id}>
            <div className={style.imgContainer}>
                <img className={style.img} src={thumb} alt={`cover of ${series}`}></img>
                <p className={style.titlePar}>
                    {series.toUpperCase()}
                </p>
            </div>
        </li>
    });

    return myCardsList;
}


function Main() {
    return <main className={`mx-auto fluid ${style.container}`}>
            <ul className={`mx-auto ${style.row}`}>
                {renderCards(comics)}
            </ul>
            <div className="btn-wrapper">
                <button className="btn-easy">LOAD MORE</button>
            </div>
    </main>
}

export default Main;

