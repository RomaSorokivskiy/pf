import Link from "next/link";
import Image from "next/image";
import "../../stylesheets/footer.scss"
import GitHub from "../../img/logos/github.svg"
import Twitter from "../../img/logos/twitter.svg"
import Instagram from "../../img/logos/instagram.svg"
import LinkedIn from "../../img/logos/linkedin.svg"
import {Suspense} from "react";
import BgFooter from "@/app/components/footer/bgFooter";
const Footer = () => {
    return(
        <footer>
            <div className="container">
                <h3>Stay Connected</h3>
                <p>Join the ranks of SorokSkull’s noble followers, and never miss out on a grand update from the mystical coding realm.</p>
                <nav>
                    <p>Links</p>
                    <ul><Link href={"https://twitter.com/SorokSkull"}>Twitter</Link></ul>
                    <ul><Link href={"https://www.linkedin.com/in/roma-sorokivskiy-4409ba202/"}>LinkedIn</Link></ul>
                    <ul><Link href={"https://github.com/RomaSorokivskiy"}>GitHub</Link></ul>
                    <ul><Link href={"https://twitter.com/SorokSkull"}>Instagram</Link></ul>
                </nav>
                <Suspense>
                    <BgFooter/>
                </Suspense>
            </div>
            <div className="footer_block">
                <div className="footer_block__icons">
                    <Link href={"https://twitter.com/SorokSkull"}><Image src={Twitter} alt="twitter"/></Link>
                    <Link href={"https://github.com/RomaSorokivskiy"}><Image src={GitHub} alt="instagram"/></Link>
                    <Link href={"https://twitter.com/SorokSkull"}><Image src={Instagram} alt="github"/></Link>
                    <Link href={"https://www.linkedin.com/in/roma-sorokivskiy-4409ba202/"}><Image src={LinkedIn} alt="linkedin"/></Link>
                </div>
                <p>© SorokSkull, Lord of the Code, 2023</p>
            </div>
        </footer>
    )
}
export default Footer;
