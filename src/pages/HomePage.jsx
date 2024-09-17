import { Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard.jsx'

const app_key = process.env.REACT_APP_API_KEY;
const app_id = process.env.REACT_APP_API_ID;

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${app_id}&app_key=${app_key}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRecipes("beef");
  }, []);

  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>

        <form action="">
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={"24"}/>
            <input type="text" className='text-sm md:text-md grow' placeholder='What do you want to cook today?'/>
          </label>
        </form>

        <h1 className='font-bold text-3xl md:text-5xl mt-4'>
          Recomended Recipes
        </h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
          Popular Choices
        </p>
        <div id='recipe grid' className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <RecipeCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage