angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject=['$http', '$routeParams', '$location'];
  function BooksShowController($http, $routeParams, $location) {
    var vm = this;
    var bookId = $routeParams.id;

  $http({
    method: 'GET',
  url: 'https://super-crud.herokuapp.com/books/'+bookId
  }).then(onShowSuccess, onError);

  function onShowSuccess(response){
      console.log("SUCCESS! Able to get json for the following book:", bookId + response.data);
      vm.book = response.data;
  }
  function onError(err){
      console.log("Error! Could not retrive data for:", bookId + "error:", err);
  }










}
