import { comics } from '../data/comics.js';

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
}


function Main() {
    return <main className={"mx-auto d-flex"}>
        <h1>Sono il main</h1>
    </main>
}

export default Main;