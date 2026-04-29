import comics from "../data/comics";

function RenderCardComponent({
    id = 0,
    series = 'Nome Serie',
    thumb = 'https://url-img/#'
}) {

    let comic = comics.map(comic => {
        const { id, thumb, series} = comic;
        return  <li key={id}>
            <div className={style.imgContainer}>
                <img className={style.img} src={thumb} alt={`cover of ${series}`}></img>
                <p className={style.titlePar}>
                    {series.toUpperCase()}
                </p>
            </div>
        </li>
})

return cards;

}
export default RenderCardComponent