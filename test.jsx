import airFreshenerImg from '../assets/gameItems/airFreshener.png'
import coconutMilkImg from '../assets/gameItems/coconutMilk.png'
import dogTreatsImg from '../assets/gameItems/dogTreats.png'
import hotSauceImg from '../assets/gameItems/hotSauce.png'
import iceCreamImg from '../assets/gameItems/iceCream.png'
import redBullImg from '../assets/gameItems/redBull.png'

const GameContainer = () => {
  const gamePieces = [
    {
      image: airFreshenerImg,
      name: 'Air Freshener',
      price: 1.09
    },
    {
      image: coconutMilkImg,
      name: 'Coconut Milk',
      price: 4.29
    },
    {
      image: dogTreatsImg,
      name: 'Dog Treats',
      price: 13.49
    },
    {
      image: hotSauceImg,
      name: 'Hot Sauce',
      price: 3.79
    },
    {
      image: iceCreamImg,
      name: 'Ice Cream',
      price: 5.99
    },
    {
      image: redBullImg,
      name: 'Red Bull',
      price: 7.99
    },
  ]



  {(message === 'You won!' || message === 'You lost!') ? <button className="bg-blue-500 text-white p-2 h-20 hover:bg-blue-600  shadow-md rounded-lg transition-colors" onClick={handleReset}>Reset</button>
  :
  <button className="bg-blue-500 text-white p-2 h-20 hover:bg-blue-600 transition-colors shadow-md rounded-lg" onClick={comparePrices}>Compare Prices</button>
}