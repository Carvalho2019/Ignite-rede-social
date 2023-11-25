import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post very good"]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentInvalid (){
    event.target.setCustomValidity('Esse campo é obrigatorio');
  }

  function deleteComment(commentToDelete) {
    const commentWithOutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentWithOutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      {/** Cabeçario da Postagem */}
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      {/** Conteudo do Post ou postagem */}
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if ((line.type = "link")) {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }

          return line;
        })}
      </div>
      {/** Formulario  de envio*/}
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      {/* Comentários da postagem*/}
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}
