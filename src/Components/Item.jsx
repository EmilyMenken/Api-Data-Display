export default function Item({ data }) {
    console.log(data)
    
    return (
        <div className="imgData">

            <h2>{data[0].title}</h2>
            <h5>{data[0].date}</h5>

            <a href={data[0].url} target="_blank">Click here for a full screen view!</a>
            
            <div className="contentRow">

                <div className="imgs">
                    <img src={data[0].url} />
                </div>

                <div className="txts">
                    <p>{data[0].explanation}</p>
                </div>

            </div>

            <button>Skip to next picture</button>

        </div>
    )
}
