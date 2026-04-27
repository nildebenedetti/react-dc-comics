import style from './FooterLinkTrees.module.css';

function FooterLinkTrees() {
    return <div className={`fluid ${style.footerLinkTreesContainer}`}>
        <div className={"footer-link-tree"}>
            <h3 className={style.treeTitle}>DC COMICS</h3>
            <ul>
                <li>
                    <p className={style.treePar}>Characters</p>
                </li>
                <li>
                    <p className={style.treePar}>Comics</p>
                </li>
                <li>
                    <p className={style.treePar}>Movies</p>
                </li>
                <li>
                    <p className={style.treePar}>TV</p>
                </li>
                <li>
                    <p className={style.treePar}>Games</p>
                </li>
                <li>
                    <p className={style.treePar}>Videos</p>
                </li>
                <li>
                    <p className={style.treePar}>News</p>
                </li>
            </ul>
        </div>
        <div className={"footer-link-tree"}>
            <h3 className={style.treeTitle}>DC</h3>
            <ul>
                <li>
                    <p className={style.treePar}>Terms Of Use</p>
                </li>
                <li>
                    <p className={style.treePar}>Privacy Policy (new)</p>
                </li>
                <li>
                    <p className={style.treePar}>Ad Choices</p>
                </li>
                <li>
                    <p className={style.treePar}>Advertising</p>
                </li>
                <li>
                    <p className={style.treePar}>Jobs</p>
                </li>
                <li>
                    <p className={style.treePar}>Subscriptions</p>
                </li>
                <li>
                    <p className={style.treePar}>Talent Workshops</p>
                </li>
                <li>
                    <p className={style.treePar}>CPSC Certificates</p>
                </li>
                <li>
                    <p className={style.treePar}>Ratings</p>
                </li>
                <li>
                    <p className={style.treePar}>Shop Help</p>
                </li>
                <li>
                    <p className={style.treePar}>Contact Us</p>
                </li>
            </ul>
        </div>
        <div className={"footer-link-tree"}>
            <h3 className={style.treeTitle}>SITES</h3>
            <ul>
                <li>
                    <p className={style.treePar}>DC</p>
                </li>
                <li>
                    <p className={style.treePar}>MAD Magazine</p>
                </li>
                <li>
                    <p className={style.treePar}>DC Kids</p>
                </li>
                <li>
                    <p className={style.treePar}>DC Universe</p>
                </li>
                <li>
                    <p className={style.treePar}>DC Power Visa</p>
                </li>
            </ul>
        </div>
        <div className={"footer-link-tree"}>
            <h3 className={style.treeTitle}>SHOP</h3>
            <ul>
                <li>
                    <p className={style.treePar}>Shop DC</p>
                </li>
                <li>
                    <p className={style.treePar}>Shop DC Collectibles</p>
                </li>
            </ul>
        </div>
    </div>;
}

export default FooterLinkTrees;