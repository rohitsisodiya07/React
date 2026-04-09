  import React from 'react'
import { Search } from 'lucide-react'

const Home = () => {
  return (
    <div className='bg-slate-300 min-h-screen pt-10 font-comic'>

      <div className='flex justify-center'>
        <div className='relative w-3/4 max-w-2xl'>
          
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500' size={18} />
          
          <input 
            type="text" 
            placeholder='Search for restaurants or food' 
            className='w-full p-3 pl-10 outline-none rounded-md shadow'
          />
        </div>
      </div>


     <div className='mt-10 p-5 flex flex-wrap gap-10 justify-center'>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" 
            alt="Burger"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Burger</p> 
            <p className='text-xs text-gray-500'>Fast Food</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.5 • 30-35 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg" 
            alt="Pizza"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Pizza</p> 
            <p className='text-xs text-gray-500'>Italian cuisine</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.2 • 35-40 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://aartimadan.com/wp-content/uploads/2020/09/red-sauce-pasta-blog-4.jpg" 
            alt="red-pasta"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Pasta</p> 
            <p className='text-xs text-gray-500'>Red Sauce Pasta</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.1 • 30-45 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://www.whiskaffair.com/wp-content/uploads/2021/05/White-Sauce-Paste-2-3.jpg" 
            alt="white-pasta"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Pasta</p> 
            <p className='text-xs text-gray-500'>White Sauce Pasta</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.5 • 30-35 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://t4.ftcdn.net/jpg/06/75/19/37/360_F_675193787_vNvAbPWUT7poFJiC8xGJsze7Kp61Io5Y.jpg" 
            alt="momos"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Momos</p> 
            <p className='text-xs text-gray-500'>Fast Food</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 15-20 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://thumbs.dreamstime.com/b/vegetable-biryani-biriani-beriani-set-rice-based-foods-made-spices-rice-usually-basmati-meat-fish-eggs-80097710.jpg" 
            alt="veg-biryani"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Veg Biryani</p> 
            <p className='text-xs text-gray-500'>Biryani</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 5-10 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://www.shutterstock.com/shutterstock/videos/1098231383/thumb/10.jpg?ip=x480" 
            alt="chai"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Chai</p> 
            <p className='text-xs text-gray-500'>Tea</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 5-10 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="samosa"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Samosa</p> 
            <p className='text-xs text-gray-500'>BreakFast</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 5-10 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://t3.ftcdn.net/jpg/16/90/94/76/360_F_1690947676_f3nJRDbZ4XgXE9bVZHRQidLeFE1p2Eqw.jpg" 
            alt="Maggie"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Maggie</p> 
            <p className='text-xs text-gray-500'>Noodles</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 15-30 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2257.jpg" 
            alt="Pavbhaji"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Pav Bhaji</p> 
            <p className='text-xs text-gray-500'>Fast Food</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 50-60 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt="idlidosa"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Idli Dosa</p> 
            <p className='text-xs text-gray-500'>South Indian</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.7 • 30-40 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://www.shutterstock.com/image-photo/selective-focus-vada-pav-indias-600nw-2508474945.jpg" 
            alt="vadapav"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Vada Pav</p> 
            <p className='text-xs text-gray-500'>Mumbai</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 50-60 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://t3.ftcdn.net/jpg/15/60/30/02/360_F_1560300294_DvwMrW0ABmfsQjSsiGGzkp22AxlFhvjS.jpg" 
            alt="chole bhature"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Chole Bhature</p> 
            <p className='text-xs text-gray-500'>Lunch</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.6 • 50-60 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://recipesblob.oetker.in/assets/9447029b80054ee49f3ac21841884874/1272x764/dabeli.webp" 
            alt="dabeli"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Dabeli</p> 
            <p className='text-xs text-gray-500'>Dinner</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 50-60 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://www.shutterstock.com/shutterstock/videos/1086590207/thumb/8.jpg?ip=x480" 
            alt="brownie"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Brownie</p> 
            <p className='text-xs text-gray-500'>Choclate Brownie</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 20-30 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://media.istockphoto.com/id/1240257902/photo/cookie-dough-ice-cream-cake-with-chocolate-sauce-and-crushed-almonds.jpg?s=612x612&w=0&k=20&c=yg0LhXCVQk611wM1n5sNeNfM68aTPrxIiDkLlRFVYmk=" 
            alt="cake"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Cake</p> 
            <p className='text-xs text-gray-500'>Ice Cream Cake</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 70-80 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://t3.ftcdn.net/jpg/02/10/14/94/360_F_210149442_uQtMQbKDZNDoqia6j4tNzkyPOBpXEyjz.jpg" 
            alt="cake"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Cake</p> 
            <p className='text-xs text-gray-500'>Choclate Cake</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.7 • 40-50 mins
            </p>
          </div>
        </div>

        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://img.freepik.com/free-photo/ice-cream-waffle-with-candies_140725-6231.jpg?semt=ais_incoming&w=740&q=80" 
            alt="icecream"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Ice Cream</p> 
            <p className='text-xs text-gray-500'>Sweet</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 50-60 mins
            </p>
          </div>
        </div>
        
        <div className='bg-white w-80 h-80 rounded-lg shadow overflow-hidden hover:scale-105 transition duration-300'>
          <img 
            src="https://c4.wallpaperflare.com/wallpaper/177/901/134/chocolate-ice-cream-dessert-waffles-wallpaper-preview.jpg" 
            alt="chocobar"
            className='w-full h-3/5 object-cover'
          />
          <div className='border-t border-gray-300'></div>
          <div className='h-2/5 flex flex-col justify-center items-center text-center px-3'>
            <p className='font-semibold text-xl'>Scoop</p> 
            <p className='text-xs text-gray-500'>Ice Cream</p>
            <p className='text-sm mt-1 text-green-600 font-medium'>
              ★ 4.9 • 50-60 mins
            </p>
          </div>
        </div>



          
     </div>
    </div>
  )
}

export default Home