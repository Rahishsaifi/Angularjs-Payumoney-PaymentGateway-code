 App.controller('payumoney', function($scope, $http, $window, $rootScope, SweetAlert,$crypthmac) {
     
       
		
		
		function guid() {
          return s4() + s4() +  s4() + s4();
		}

		function s4() {
		  return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}

		$scope.getTxnId = function(){
			
			 $scope.txnId = guid();
			
		}
		
		$scope.getTxnId(); // Get Random Transaction Id
		
			
		 $scope.payuMoneyFunc = function ($location,$sce) {
			  
			   var salt = "8BLOpr0p"; //Your Salt Key Provided By Payumoney
			 
			 //  $hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
			    console.log("Merchant Key"+$scope.marchentKey);
			    console.log("Transaction Key"+$scope.txnId);
			    console.log("Product Info"+$scope.productinfo);
			   
			    var string = $scope.marchentKey + '|' + $scope.txnId + '|' + $scope.amount + '|' + $scope.productinfo + '|' + $scope.firstname + '|' + $scope.email+'|||||||||||'+salt;
              
				var encrypttext = sha512(string);
			    console.log(encrypttext);
			    $scope.hash = encrypttext;
			 
		 }
		

    })