$(function(){
	var WorkoutLog = (function($, undefined){
		var API_BASE = "http://localhost:3000/api/"
		var userDefinitions = []

		var setAuthHeader = function(sessionToken){
			window.localStorage.setItem("sessionToken", sessionToken)
			//Set the authorization header
			//This can be done on idividual calls
			//here we showcase ajaxSetup as a global tool
			$.ajaxSetup({
				"headers": {
					"Authorization": sessionToken
				}
			})
		}
		//public
		return {
			API_BASE: API_BASE,
			setAuthHeader: setAuthHeader
		}
	})(jQuery)
	//Ensure .disabled aren't clickable
	$(".nav-tabs a[data-toggle=tab]").on("click", function(e) {
		var token = window.localStorage.getItem("sessionToken");
		if ($(this).hasClass("disabled") && !token){
			e.preventDefault();
			return false;
		}
	})
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href"); //activated tab
		if (target === "#log") {
			WorkoutLog.log.setDefinitions();
		}
		if (target === "#history") {
			WorkoutLog.log.setHistory();
		}
	})
	//bind enter key
	$(document).on("keypress", function(e){
		if (e.which === 13) { //enter key
			if ($("#signup-model").is(":visable"))
			$("#signup").trigger("click");
		}
		if ($("#login-modal").is(":visable")){
			$("#login").trigger("click");
		}
	});
	var token = window.localStorage.getItem("sessionToken") 
	if (token){
		WorkoutLog.setAuthHeader(token)
	}
	//expose this to the other workoutlo modules
	window.WorkoutLog = WorkoutLog
})

