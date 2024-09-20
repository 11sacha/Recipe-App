import React, { useState } from 'react'
import { Heart, Soup, HeartPulse } from 'lucide-react'

const getTwoValuesFromArray = (arr) => {
  return [arr[0], arr[1]];
}

function RecipeCard({recipe, bg, badge}) {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavourites, setIsFavourites] = useState(localStorage.getItem("favourites")?.includes(recipe.label));

  const addRecipeToFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isRecipeAlreadyInFavourites = favourites.some((fav) => fav.label === recipe.label);

    if(isRecipeAlreadyInFavourites) {
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setIsFavourites(false);
    } else {
      favourites.push(recipe);
      setIsFavourites(true);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
  }

  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
        <a 
          href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} 
          className='relative h-32'
        >
          <img src={recipe.image} alt="recipe img" className='rounded-md w-full h-full object-cover cursor-pointer' />

          <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
            <Soup size={16}/> {recipe.yield} Servings
          </div>

          <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
            <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />
          </div>

        </a>
        <div className='flex mt-1'>
          <p className='font-bold tracking-wide'>{recipe.label}</p>
        </div>
        <p className='my-2'>
          {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen
        </p>

        <div className='flex gap-2 mt-auto'>
          {healthLabels.map((label, index) => (
            <div key={index} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
              <HeartPulse size={16} />
              <span className='text-sm tracking-tighter font-semibold'>{label}</span>
            </div>
          ))}
        </div>

    </div>
  )
}

export default RecipeCard