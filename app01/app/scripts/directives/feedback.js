angular.module('datepickerApp.directives')
    .directive('feedback', function($window, $log, $location)
    {
        return {
            restrict:   'E',
            scope:      {},
            template:   '<aside id="feedback">' +
			'<div class="bar">' +
			'	<h3>Feedback</h3>' +
			'	<span class="pos" ng-click="feedback.type = \'positive\'">&check;</span>' +
			'	<span class="neg" ng-click="feedback.type = \'negative\'">&times;</span>' +
			'</div>' + 
			'<div class="form" ng-hide="feedback.type == undefined">' +
			'	<h3 class="pos" ng-show="feedback.type == \'positive\'">Positive feedback</h3>' +
			'	<h3 class="neg" ng-show="feedback.type == \'negative\'">Negative feedback</h3>' +
			'	<form ng-submit="sendFeedback()">' +
			'		<textarea ng-model="feedback.message" ' +
			'		          class="form-control"></textarea>' +
			'		<button class="btn">Send</button>' +
			'	</form>' +
			'</div>' +
			'</aside>',
            link:       function(scope, iElement, iAttrs)
                        {
                            scope.sendFeedback = function()
                            {
                                if(iAttrs.debug !== undefined)
                                {
                                    $log.log('Feedback' + $location.path(), scope.feedback);
                                }
                                else
                                {
                                    alert("Currently not supported.");
                                }
                            }
                        }
        };
    });