import CustiomImage from "./Customimage"


export default function RecipesCard({recipe}){
    return (
        <div className="recipe-card">
            <CustiomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <a className="view-btn" href="#!">View Recipe</a>
            </div>
        </div>
    )
}