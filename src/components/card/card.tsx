import "./card.css"

interface CardProps{
    price:number,
    title:string,
    image: string
}




export function Card({price}: CardProps){
    return(
        <div className="card">
            <img src="" alt="" />
            <h2></h2>
            <p><strong>Valor:</strong></p>

        </div>
    )


}