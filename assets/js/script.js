var elements = document.getElementsByTagName('*');
var container = document.getElementById('icons-target');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	if (element.getAttribute('icons-text')) {
		(function(element) {
			element.onmouseover = function() {
				container.innerHTML = element.getAttribute('icons-text');
			};

			element.onmouseout = function() {
			    container.innerHTML = '';
			};
		}(element));
	}
}
