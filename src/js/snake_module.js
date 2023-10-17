class Snake {
   constructor() {
      this.snakeBody = [];
      this.headCoordinates = [];
      this.direction = 'right';
      this.velocity = 500;
   }

   createSnake(headX, headY) {

      this.headCoordinates = [headX, headY];
      this.snakeBody = [document.querySelector(`div[data-x = '${this.headCoordinates[0]}'][data-y = '${this.headCoordinates[1]}']`),
      document.querySelector(`div[data-x = '${this.headCoordinates[0] - 1}'][data-y = '${this.headCoordinates[1]}']`),
      document.querySelector(`div[data-x = '${this.headCoordinates[0] - 2}'][data-y = '${this.headCoordinates[1]}']`)];

      for (let i = 0; i < this.snakeBody.length; i++) {
         this.snakeBody[i].classList.add('snake-body');
      }

      this.snakeBody[0].classList.add('snake-head');

      console.log('sb ' + this.snakeBody);
      console.log('sb2 ' + this.snakeBody[0]);

      return [this.snakeBody, this.headCoordinates]
   }

   snakeMove() {

      //console.log(this.snakeBody);
      this.snakeHead = document.querySelector(".snake-head");
      // console.log('h ' + this.snakeHead);

      this.snakeHead.classList.remove('snake-head');

      this.snakeLength = this.snakeBody.length;

      this.snakeBody[this.snakeLength - 1].classList.remove('snake-body');
      this.snakeBody.pop();
      this.snakeBody.unshift(document.querySelector(`div[data-x = '${this.headCoordinates[0] + 1}'][data-y = '${this.headCoordinates[1]}']`));
      this.snakeBody[0].classList.add('snake-head');

      for (let i = 0; i < this.snakeLength; i++) {
         this.snakeBody[i].classList.add('snake-body');
      }

      let headX = this.headCoordinates[0] + 1;
      let headY = this.headCoordinates[1];
      this.headCoordinates = [headX, headY];
   }



   snakeGo(int) {

      //snakeMove = this.snakeMove
      setInterval(this.snakeMove, int);
   }

}



export default Snake;

