import './css/style.css'

import Field from "./js/field_module";
import Snake from "./js/snake_module";
import Food from "./js/food_module";


let field = new Field;
field.createField(500, 500, 100)

let snake = new Snake;

let food = new Food;

food.createFood();

snake.createSnake(6, 6);

snake.snakeMove();
snake.snakeMove();


//setInterval(snake.snakeMove, 1500);













