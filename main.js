var app = angular.module("expenseTrackerApp", []);

app.controller("controller", function($scope) {
	$scope.title = "This is a list of your expenses"

	// Sample data to display
	$scope.expenses = [{date: "2017-07-26", description: "Chevron Gas", amount: "20.00"}, 
						{date: "2017-07-26", description: "Starbucks", amount: "2.36"}, 
						{date: "2017-07-27", description: "Safeway", amount: "11.25"}]

	// Add a new item to the array of expenses
	$scope.addExpense = function(date, description, amount) {
		var newEntry = {date: date, description: description, amount: amount}
		$scope.expenses = $scope.expenses.concat(newEntry)
	};



});
