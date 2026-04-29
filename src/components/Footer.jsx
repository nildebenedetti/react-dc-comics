import FooterAsideNavigation from "./FooterAsideNavigation";
import FooterLinkTrees from "./FooterLinkTrees";
import FooterSocialNCTA from "./FooterSocialNCTA";
import style from './Footer.module.css';

function Footer() {
    return <footer className={`mx-auto d-flex flex-column ${style.footer}`}>
        <FooterAsideNavigation />
        <FooterLinkTrees />
        <FooterSocialNCTA />
    </footer>
}

export default Footer;