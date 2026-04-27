import style from './Logo.module.css';

function Logo() {
    return <div className={"img-wrapper"}> <img className={ style.logo} src="/img/dc-logo.png" alt="dc logo"></img></div>;
}

export default Logo