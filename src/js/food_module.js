class Food {
   constructor() { }

   createFood() {

      let xFood = Math.trunc(Math.random() * 9 + 1);
      let yFood = Math.trunc(Math.random() * 9 + 1);

      let newFood = document.querySelector(`[data-x="${xFood}"][data-y="${yFood}"]`);
      newFood.classList.add('food');

      while (newFood.classList.contains('snake-body')) {

         xFood = Math.trunc(Math.random() * 9 + 1);
         yFood = Math.trunc(Math.random() * 9 + 1);

         newFood = document.querySelector(`[data-x="${xFood}"][data-y="${yFood}"]`);
         newFood.classList.add('food');
      }
   }
}


export default Food



