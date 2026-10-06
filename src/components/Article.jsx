// Receives post details from ArticleList and displays a default date if omitted.
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;