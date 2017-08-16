var app = angular.module("expenseTrackerApp", ['ngStorage']);

app.controller("controller", function($scope, $localStorage) {
	$scope.title = "This is a list of your expenses"

	// Sample data for display
	var sampleData = [{date: "2017-07-26", description: "Chevron Gas", amount: "20.00"}, {date: "2017-07-26", description: "Starbucks", amount: "2.36"}];

	// Load the sample data if first launch, otherwise load from local storage
	$scope.expenses = $localStorage.expenses == null ? sampleData : $localStorage.expenses;

	// Calculate the total expense
	var total = 0.0;
	var i;
	for (i=0; i<$scope.expenses.length; i++) {
		var amount = parseFloat($scope.expenses[i].amount)
		total += amount
	}
	$scope.total = parseFloat(total);

	// Add a new item to the array of expenses
	$scope.addExpense = function(date, description, amount) {
		var newEntry = {date: date, description: description, amount: amount}
		$scope.expenses = $scope.expenses.concat(newEntry)
		
		// add to the total
		$scope.total += parseFloat(amount)
		
		// archive to the localstorage
	   $localStorage.expenses = $scope.expenses
	};

	// Remove the selected item from the array of expenses
	$scope.removeExpense = function(index) {
		var amount = $scope.expenses[index].amount
		$scope.expenses.splice(index, 1)

		// remove from the total
		$scope.total -= parseFloat(amount)

		// update localstorage
		$localStorage.expenses = $scope.expenses
	}

});
