import FooterAsideNavigation from "./FooterAsideNavigation";
import FooterLinkTrees from "./FooterLinkTrees";
import FooterSocialNCTA from "./FooterSocialNCTA";

function Footer() {
    return <footer  className={"mx-auto d-flex"}>
        <FooterAsideNavigation/>
        <FooterLinkTrees/>
        <FooterSocialNCTA/>
    </footer>
}

export default Footer;