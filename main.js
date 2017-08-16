var app = angular.module("expenseTrackerApp", ['ngStorage']);

app.controller("controller", function($scope, $localStorage) {
	$scope.title = "This is a list of your expenses"

	// Sample data for display at initial launch
	var sampleData = [{date: "2017-07-26", description: "Chevron Gas", amount: "20.00"}, {date: "2017-07-26", description: "Starbucks", amount: "2.36"}];

	// Load the sample data if first launch, otherwise load from local storage
	$scope.expenses = $localStorage.expenses == null ? sampleData : $localStorage.expenses;


	// Calculate the total expense
	var total = 0.0;
	var i;
	for (i=0; i<$scope.expenses.length; i++) {
		var amount = $scope.expenses[i].amount
		total += parseFloat(amount)
	}
	$scope.total = total;

	// Add a new item to the array of expenses
	$scope.addExpense = function(date, description, amount) {
		var newEntry = {date: date, description: description, amount: amount}
		$scope.expenses = $scope.expenses.concat(newEntry)
		
		// update total
		$scope.total += parseFloat(amount)
		
		// archive to the localstorage
	   $localStorage.expenses = $scope.expenses
	};

});
