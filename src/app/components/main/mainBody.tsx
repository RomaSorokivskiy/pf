import Image from "next/image";
import nav1 from "../../img/nav1.jpg"
import nav2 from "../../img/nav2.jpg"
import nav3 from "../../img/nav3.jpg"
import nav4 from "../../img/nav4.jpg"
import nav5 from "../../img/nav5.jpg"
import nav6 from "../../img/nav6.jpg"

import "../../stylesheets/main.scss"

const arr:any = [
    {
        img: nav1,
        title:"Pet Projects",
        descr:"Discover delightful coding concoctions that amaze and remove those pesky problems with a wave of a magic wand."
    },
    {
        img:nav2,
        title: "Blogs",
        descr: "Wander through tales of treacherous bugs, indomitable workarounds, and that one time when the editor looked like a haunted house."
    },
    {
        img:nav3,
        title: "About Me",
        descr: "Meet the wizard of web wizardry, SorokSkull - the ingenious creator weaving digital dreams into reality."
    },
    {
        img:nav4,
        title: "Contact",
        descr: "Wish to embark on a thrilling quest with the prodigious SorokSkull? Reach out, and we shall conquer dragons together!"
    },
    {
        img:nav5,
        title: "Hobbies",
        descr: "Dive into the fantastical realms of SorokSkull’s hobbies - a garden of earthly delights where one may find respite from the programming plights."
    },
    {
        img:nav6,
        title: "Skills",
        descr: "Behold the arsenal that keeps SorokSkull one step ahead of the coding game and two steps ahead of the fire-breathing bugs."
    },
]
const NavButton = ({props}:any) => {
    return(
        <div className="main_body__nav_item">
            <Image src={props.img} alt={props.title}/>
            <h4>{props.title}</h4>
            <p>{props.descr}</p>
        </div>
    )
}
const MainBody = () => {
    return(
        <div className="main_body">
            <div className="container">
                <h2>Welcome to SorokSkull Site</h2>
                <p>Embark on a fascinating expedition through SorokSkull’s enthralling world of coding marvels, creative adventures, and witty insights into the realm of full-stack development. Stay tuned for delightful surprises!</p>
                <div className="main_body__nav">
                    {arr.map((el:any,id:number) => <NavButton props={el} key={id++}/>)}
                </div>
            </div>
        </div>
    )
}
export default MainBody
