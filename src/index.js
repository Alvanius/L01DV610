const inputField = document.querySelector('input')
const recipeFrame = document.getElementById('recipeFrame')
const flavourCollection = ['Apple',
  'Banana',
  'Butter pecan',
  'Cherry',
  'Chocolate',
  'Chocolate Chip cookie dough',
  'Coffee',
  'Cookie dough',
  'Cookies and cream',
  'Cotton candy',
  'Mango',
  'Pistachio',
  'Peanut butter',
  'Raspberry Ripple',
  'Rocky road',
  'Rum and Raisin',
  'Strawberry',
  'Strawberry Cheesecake',
  'Superman',
  'Teaberry',
  'Caramel Cone Ice Cream',
  'Tutti frutti',
  'Vanilla']

const displayRecipe = () => {
const name = inputField.value
const title = ''
const flavors = []
if (name.includes('v')) {
  for (let i = 0; i < 5; i++) {
flavors.push(flavourCollection[Math.floor(Math.random() * flavourCollection.length)])
  }
} else if (name.length > 3 && name.includes(' ')) {
  flavors.push(flavourCollection[name.split(' ')[1].length])
}
recipeFrame.textContent = 'One ice cream with the flavours: ' + flavors.toString() + ' coming up just for you, ' + name + '!'
}

document.getElementById("generate").addEventListener("click", displayRecipe); 


const naming = ['Awesome', 'Brilliant', 'Candidly', 'Delightful', ]