import style from './Navbar.module.css'

function Navbar() {
     return <> <ul className={`d-flex ${style.ul}`}>
        <li>Characters</li>
        <li>Comics</li>
        <li>Movies</li>
        <li>TV</li>
        <li>Games</li>
        <li>Collectibles</li>
        <li>Videos</li>
        <li>Fans</li>
        <li>News</li>
        <li>Shop</li>
    </ul>
    </>
}

export default Navbar