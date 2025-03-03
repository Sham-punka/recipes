import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}/`)
            .then(response => setRecipe(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.name}</h1>
            <h3>Ингредиенты:</h3>
            <p>{recipe.ingredients}</p>
            <h3>Инструкции:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;