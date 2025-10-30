
export default function Item({data}) {
    console.log(data)
    return (
        <div className = "imgData">

            {/* search bar */}

            <h2>{data[0].title}</h2>
            <p>{data[0].date}</p>

            <a href={data[0].url} target="_blank">Click here for a full screen view!</a>

            <img src ={data[0].url}/>
            <p>{data[0].explanation}</p>

            <button> Skip to next picture </button>


        </div>
    )
}