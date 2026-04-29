import comics from "../data/comics";

function RenderCardComponent({
    id = 0,
    series = 'Nome Serie',
    thumb = 'https://url-img/#'
}) {
  return (
    <div className="card">
        <img src={thumb} alt={series} />
        <h3>{series}</h3>
        <p>ID: {id}</p>
    </div>
  )
  
}
export default RenderCardComponent