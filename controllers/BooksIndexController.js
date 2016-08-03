angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books'
  }).then(onIndexSuccess, onError)

  function onIndexSuccess(response){
      console.log("Success-- able to retrieve all book json data:" , response.data);
      vm.books = response.data.books;
  }
  function onError(err){
      console.log("ERROR! Could not display data.", err);
  }












}
