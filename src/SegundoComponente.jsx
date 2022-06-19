/*let hola = [
    {
        name: "Juan Perez",
        title: "Programador FullStack"
    },
    {
        name: "Martin Rios",
        title: "Programador Front"
    }
]*/
const recorrido = () => {
    return "Hola"
}


export const SegundoComponente = () =>{
    return (
        <>
            <h2> {recorrido()} </h2>
            <p></p>
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/S7UCIDICLRENXMEJTJBYND4SKU.jpeg" alt="" width={500}/>
        </>
    );
};

export const TercerComponente = () =>{
    return(
        <div>
            <h3>Hola Nenas</h3>
        </div>
    )
}