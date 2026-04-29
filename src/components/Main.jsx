import comics from '../data/comics.js';
import style from './Main.module.css'
import RenderCardComponent from './RenderCardComponent.jsx';

{/* Aggiungo la funzione per fare render da dati oggetto

function renderCards(objList) {
    let myCardsList = objList.map(objEl => {
        const { id, series, thumb } = objEl;

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
} */ }

function extractCardInfo(array) {
    let comic = comics.map(comic => {
        const { id, thumb, series} = comic;
        return {
            id = id,
            thumb = thumb,
            series = series,
        })
    
        return comic;
}


function Main() {
    return <main className={`mx-auto fluid ${style.container}`}>
        <div className="hero-banner">
        </div>
        <div className="label-wrapper">
            <div className="label-easy">
                <p>CURRENT SERIES</p>
            </div>
        </div>
        <ul className={`mx-auto ${style.row}`}>
           {for ( const comic of comics) {
            extra

            }}
                <RenderCardComponent/>
        </ul>
        <div className="btn-wrapper">
            <button className="btn-easy">LOAD MORE</button>
        </div>
    </main>
}

export default Main;

