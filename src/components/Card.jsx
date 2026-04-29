import comics from "../data/comics";
import style from  "./Card.module.css";

function Card({
    id = 0,
    series = 'Nome Serie',
    thumb = 'https://url-img/#'
}) {

        return  <li key={id}>
            <div className={style.imgContainer}>
                <img className={style.img} src={thumb} alt={`cover of ${series}`}></img>
                    <p className={style.titlePar}>
                        {series.toUpperCase()}
                    </p>
            </div>
        </li>
}

export default Card