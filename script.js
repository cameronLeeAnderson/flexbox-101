const aboutFlexbox = [`Modern layout mode in <strong>CSS3</strong>`, `"flex" is a value for the <strong>display</strong> property`, `<strong>Replaces floats</strong>; much more elegant to work with`, `<strong>flex-direction</strong> aligns items both horizontally (row - this is the default) and vertically (column)`, `Children (<strong>flex items</strong>) can be re-ordered via CSS`]

const list = document.getElementById("flexbox-list")

aboutFlexbox.forEach((item, i) => {
	const li = document.createElement("li")
	const pointers = "👉🏼 ".repeat(i + 1)
	li.innerHTML = pointers + " " + item
	list.appendChild(li)
})
