export default function Item({data}) {
    return (
        <>
            <h1>This is the item</h1>
            <p>{data[0].date}</p>
        </>
    )
}