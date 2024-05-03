import ChiefCard from "./ChiefCard"

export default function ChiefSection(){
    const chiefs=[
        {
            name :"Juan Carlos",
            img : "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuision : "Mexican"
        },
        {
            name :"John Doe",
            img : "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuision : "Japanese"
        },
        {
            name :"Erich Maria",
            img : "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuision : "Italian"
        },
        {
            name :"Chris Brown",
            img : "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuision : "American"
        },
        {
            name :"Blake Lively",
            img : "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuision : "French"
        },
        {
            name :"Ben Affleak",
            img : "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuision : "Indian"
        },
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief=> <ChiefCard key={chief.name} chief={chief}/>)}
            </div>
        </div>
    )
}