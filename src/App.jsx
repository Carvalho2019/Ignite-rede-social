import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/antoniohenriquessoma.png',
      name: 'Antonio Soma',
      role: 'Analist Oas'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera ✌️',},
      {type: 'paragraph', content: 'qautem, at ullam eum similique reprehenderit in laborum voluptas qautem, auam expedita cupiditate ipsa ullam! Asperiores laboriosam odit'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-08-29 10:02:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/carvalho2019.png',
      name: 'Clesio Carvalho',
      role: 'Engenner Oak'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera ✌️',},
      {type: 'paragraph', content: 'qautem, at ullam eum similique reprehenderit in laborum voluptas qautem, auam expedita cupiditate ipsa ullam! Asperiores laboriosam odit'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-11-23 12:02:00'),
  },
]
function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </>
  );
}

export default App;
