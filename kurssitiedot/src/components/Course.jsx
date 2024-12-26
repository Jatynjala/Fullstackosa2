import Header from "./Header"
import Content from "./Content"

const Course = ({ courses }) => {
    console.log("Course:")
    console.log(courses)
    return (
        <div>
            <h1>Web development curriculum</h1>
            <ul>
            {courses.map(course =>
                <li key={course.id}>
                <Header header={course.name}/>
                <Content content={course.parts}/>
                <h4>total of {course.parts.map(part => part.exercises).reduce((accumulator, currentvalue) => accumulator + currentvalue, 0,)} exercises</h4>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Course