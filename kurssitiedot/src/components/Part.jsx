const Part = ({ name, num }) => {
    console.log("Part:")
    console.log(name)
    console.log(num)
    return (
        <p>{name} {num}</p>
    )
}

export default Part