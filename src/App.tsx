import {useState} from "react";
import {Header} from "./components/Header";
import {Post} from "./components/Post";
import styles from "./App.module.css";
import './global.css'
import {Sidebar} from "./components/Sidebar";

function App() {
    const [count, setCount] = useState(0);

    const postContents = {
        book1: {
            author: "J. K. Rowling",
            bookName: "Harry Potter e a Camara Secreta!"
        },
        book2: {
            author: "George R. R. Martin",
            bookName: "Game of Thrones - The winter is comming!"
        },
    };

    const book1 = postContents.book1.bookName;
    const book2 = postContents.book2.bookName;
    const author1 = postContents.book1.author
    const author2 = postContents.book2.author


    return (
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post
                        author={author1}
                        content={book1}
                    />
                    <Post
                        author={author2}
                        content={book2}
                    />
                </main>
            </div>


        </div>
    );
}

export default App;
