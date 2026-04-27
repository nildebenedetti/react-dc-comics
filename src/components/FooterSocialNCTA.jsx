import FooterSignUpBtn from "./FooterSignUpBtn";
import FooterSocialHub from "./FooterSocialHub";
import style from './FooterSocialNCTA.module.css';

function FooterSocialNCTA() {
    return <div className={style.socialContainer}>
        <FooterSignUpBtn/>
        <FooterSocialHub/>
    </div>
}

export default FooterSocialNCTA;