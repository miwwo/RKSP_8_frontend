import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import {listRecipes} from "../../sevices/RecipeService";
import {useSelector} from "react-redux";
import RecipeCreateForm from "./RecipeCreateForm";


const RecipeList = () => {
    const { token } = useSelector((state) => state.user);

    const [recipes, setRecipes] = useState([]);
    const [recipeCreateForm, setRecipeCreateForm] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("im here");
        const fetchRecipes = async () => {
            try {
                const response = await listRecipes(token)
                setRecipes(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [token]);


    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
            <button onClick={() => setRecipeCreateForm(true)}>Создать рецепт</button>
           <RecipeCreateForm trigger = {recipeCreateForm} setTrigger={setRecipeCreateForm}></RecipeCreateForm>
            <h1>Список рецептов</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Recipe recipe={recipe} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;