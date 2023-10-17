class Field {
   constructor() { }

   createField(fieldWidth, fieldHeight, numberOfCells, cellsY) {

      let field = document.querySelector('.game-field');

      field.innerHTML = '';

      let cell = document.createElement('div');

      field.appendChild(cell);
      cell.classList.add('empty-cell');
      cell.setAttribute('data-x', 1);
      cell.setAttribute('data-y', cellsY);

      for (let i = 1; i < numberOfCells; i++) {
         let cell = document.createElement('div');
         field.appendChild(cell);
         cell.classList.add('empty-cell');
         cell.setAttribute('data-x', ((i - ((Math.trunc(i / 10))) * 10) + 1));
         cell.setAttribute('data-y', 10 - (Math.trunc(i / 10)));
      }

      field.style.width = fieldWidth + 'px';
      field.style.height = fieldHeight + 'px';
   }

}


export default Field
