import {PencilLine} from "@phosphor-icons/react";
import styles from "./Sidebar.module.css"
import profileImg from "../assets/profile-img.jpg"
import backgroundImg from "../assets/marsbg.jpg"


export function Sidebar() {

    const imgFromGithub = "https://avatars.githubusercontent.com/u/41518685?v=4"
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={backgroundImg}/>
            <div className={styles.profile}>
                <img className={styles.avatar} src={imgFromGithub}/>
                <strong>Elias Fernandes</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )

};