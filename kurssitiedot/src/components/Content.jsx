import Part from "./Part"

const Content = ({ content }) => {
    console.log("Content:")
    console.log(content)
    return (
        <ul>
        {content.map(part =>
            <li key={part.id}>
            <Part name={part.name} num={part.exercises} />
            </li>
        )}
        </ul>
    )
}

export default Content