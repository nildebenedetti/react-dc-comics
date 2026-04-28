import style from './Navbar.module.css'

const categories = [
    'Characters',
    'Comics',
    'Movies',
    'TV',
    'Games',
    'Collectibles',
    'Videos',
    'Fans',
    'News',
    'Shop'
];

function renderCategories(categoryList) {
    return categoryList.map((category, index) => {
        return <li key={index} className={style.option}>{ category }</li>
    });
};



{/* function Navbar() {
    return <> <ul className={`d-flex ${style.ul}`}>
        <li className={style.option}>
            Characters
        </li>
        <li className={style.option}>
            Comics
        </li>
        <li className={style.option}>
            Movies
        </li>
        <li className={style.option}>
            TV
        </li>
        <li className={style.option}>
            Games
        </li>
        <li className={style.option}>
            Collectibles
        </li>
        <li className={style.option}>
            Videos
        </li>
        <li className={style.option}>
            Fans
        </li>
        <li className={style.option}>
            News
        </li>
        <li className={style.option}>
            Shop
        </li>
    </ul>
    </>
} */}

export default Navbar