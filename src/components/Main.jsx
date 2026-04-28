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
        <div className={`d-flex ${style.row}`}>
            <ul className={style.ulCards}>
                {renderCards(comics)}
            </ul>
        </div>
    </main>
}

export default Main;