import style from './FooterSocialHub.module.css';

const socialElList = [
    {
        id: 1,
        title: 'Facebook',
        src: '/img/footer-facebook.png'
    },
    {
        id: 2,
        title: 'Twitter',
        src: '/img/footer-twitter.png'
    },
    {
        id: 3,
        title: 'Youtube',
        src: '/img/footer-youtube.pn'
    },
    {
        id: 4,
        title: 'Pinterest',
        src: '/img/footer-pinterest.png'
    },
    {
        id: 5,
        title: 'Periscope',
        src: '/img/footer-periscope.png'
    }
];

{/* function FooterSocialHub() {
    return <>
    <div className={`${style.followCta} d-flex`}>
        <h3 className={style.cta}>FOLLOW US</h3>
        <div className={` d-flex`}>
            <ul className={` ${style.socialIconsContainer} d-flex`}>
                <li>
                    <div className={"single-logo-container"}>
                        <img src="/img/footer-facebook.png" alt="facebook logo"></img>
                    </div>
                </li>
                <li>
                    <div className={"single-logo-container"}>
                        <img src="/img/footer-twitter.png" alt="twitter logo"></img>
                    </div>
                </li>
                <li>
                    <div className={"single-logo-container"}>
                        <img src="/img/footer-youtube.png" alt="youtube logo"></img>
                    </div>
                </li>
                <li>
                    <div className={"single-logo-container"}>
                        <img src="/img/footer-pinterest.png" alt="pinterest logo"></img>
                    </div>
                </li>
                <li>
                    <div className={"single-logo-container"}>
                        <img src="/img/footer-periscope.png" alt="periscope icon"></img>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
}*/}

export default FooterSocialHub;
 