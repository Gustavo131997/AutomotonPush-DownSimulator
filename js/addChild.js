function addChild(doc, parent, child, childText, attributes) {
	if (typeof child == "string") {
		childNode = doc.createElement(child);
	} else {
		childNode = child;
	}
	if (typeof childText == "string") {
		childTextNode = doc.createTextNode(childText);
		childNode.appendChild(childTextNode);
	}
	if (attributes) {
		for (var att in attributes) {
			childNode.setAttribute(att,attributes[att]);
		}
	}
	parent.appendChild(childNode);
	return childNode;
}

var b;
function load() {
	b = document.getElementById('cuerpo');
}
function test() {
	var list = document.getElementsByTagName('p');
	b.removeChild(list.item(list.length-1));
}