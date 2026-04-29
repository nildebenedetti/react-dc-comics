import comics from "../data/comics";

function RenderCardComponent({
    id = 0,
    series = 'Nome Serie',
    thumb = 'https://url-img/#'
}) {

        return  <li key={id}>
            <div >
                <img  src={thumb} alt={`cover of ${series}`}></img>
                <p>
                    {series.toUpperCase()}
                </p>
            </div>
        </li>
}

export default RenderCardComponent