import style from './FooterAsideNavigation.module.css';

const bannerObjects = [
    {
        id: 1,
        title: 'Digital Comics',
        src: '/img/buy-comics-digital-comics.png'
    },
    {
        id: 2,
        title: 'DC Merchandise',
        src: '/img/buy-comics-merchandise.png'
    },
    {
        id: 3,
        title: 'Subscription',
        src: '/img/buy-comics-subscriptions.png'
    },
    {
        id: 4,
        title: 'Comic Shop Locator',
        src: '/img/buy-comics-shop-locator.png'
    },
    {
        id: 5,
        title: 'DC Power Visa',
        src: '/img/buy-dc-power-visa.svg'
    }
];


{/* funzione p[er creare list element da oggetto */ }

function renderListElements(ObjList) {
    let myBannerElemList = ObjList.map(ObjListElem => {
        const { id, title, src } = ObjListElem;

        return <li key={id}>
            <div className={`d-flex ${style.asideComponent}`}>
                <img className={style.asideImg} src={src} alt={`${title} icon`}></img>
                <p>{title.toUpperCase()}</p>
            </div>
        </li>
    });

    return myBannerElemList;

};

function FooterAsideNavigation() {
    return <> <div className={"footer-aside-container bg-blue fluid"}>
        <ul className={`d-flex ${style.asideList}`}>
            {renderListElements(bannerObjects)}
        </ul>
    </div>
    </>
}

{/* function FooterAsideNavigation() {
    return <div className={"footer-aside-container bg-blue fluid"}>
        <ul className={`d-flex ${style.asideList}`}>
            <li>
                <div className={`d-flex ${style.asideComponent}`}>
                    <img className={style.asideImg} src="/img/buy-comics-digital-comics.png" alt="dc digital comics icon"></img>
                    <p>DIGITAL COMICS</p>
                </div>
            </li>
             <li>
                <div className={`d-flex ${style.asideComponent}`}>
                    <img className={style.asideImg} src="/img/buy-comics-merchandise.png" alt="dc merchandise icon"></img>
                    <p>DC MERCHANDISE</p>
                </div>
            </li>
             <li>
               <div className={`d-flex ${style.asideComponent}`}>
                    <img className={style.asideImg} src="/img/buy-comics-subscriptions.png" alt="dc subscriptions icon"></img>
                    <p>SUBSCRIPTION</p>
                </div>
            </li>
             <li>
                <div className={`d-flex ${style.asideComponent}`}>
                    <img className={style.asideLocatorImg} src="/img/buy-comics-shop-locator.png" alt="dc comic shop locator icon"></img>
                    <p>COMIC SHOP LOCATOR</p>
                </div>
            </li>
             <li>
                <div className={`d-flex ${style.asideComponent}`}>
                    <img className={style.asideImg} src="/img/buy-dc-power-visa.svg" alt=" dc digital power visa icon"></img>
                    <p>DC POWER VISA</p>
                </div>
            </li>
        </ul>
    </div>
} */}

export default FooterAsideNavigation;