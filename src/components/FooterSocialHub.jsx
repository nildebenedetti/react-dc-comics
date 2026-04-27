import style from './FooterSocialHub.module.css';

function FooterSocialHub() {
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
}

export default FooterSocialHub;