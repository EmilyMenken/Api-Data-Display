export default function Item({ data, onNext, onPrev }) {
  if (!data) return <p>Loading...</p>;

  return (
    <div className="imgData">
      <h2>{data.title}</h2>
      <h5>{data.date}</h5>

      <a href={data.url} target="_blank" rel="noreferrer">
        Click here for a full screen view of the current image!
      </a>

      <div className="contentRow">

        <div className="imgs">
          <img src={data.url} alt={data.title} />
        </div>

        <div className="txts">
          <p>{data.explanation}</p>
        </div>

      </div>

      <div className="buttons">
        <button onClick={onPrev}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}
