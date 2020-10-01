var elements = document.getElementsByTagName('*');
var container = document.getElementById('social-icons-target');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	if (element.getAttribute('social-icon-text')) {
		(function(element) {
			element.onmouseover = function() {
				container.innerHTML = element.getAttribute('social-icon-text');
			};

			element.onmouseout = function() {
			    container.innerHTML = '';
			};
		}(element));
	}
}
