import { Trash, ThumbsUp } from "phosphor-react";

import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleLikeComment() {
    setLikeCount((stage)=>{
      return stage + 1;
    });
  }
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/carvalho2019.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Clesio Carvalho</strong>
              <time title="11 de Maio as 8:13" dateTime="2023-05-11 08:12:99">
                Publicado há 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplauddir <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
