window.onload = function() {
	document.querySelectorAll('pre code').forEach((el) => {
		hljs.highlightElement(el)
	})
}
