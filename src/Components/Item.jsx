export default function Item({ data, onNext, onPrev }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="imgData">
      <h2>{data.title}</h2>
      <p>{data.date}</p>

      <a href={data.url} target="_blank" rel="noreferrer">
        Click here for a full screen view!
      </a>

      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>

      <div className="buttons">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}
