var button = document.GetElementById ("button");
button.onclick = function(event) {
	return function add_els()
};
function add_els() {
        var src = "http://elwiki.net/wiki/images/Elsword_Portrait.png";
        show_image("http://elwiki.net/wiki/images/Elsword_Portrait.png", 333, 499, "els");
    }


    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.body.appendChild(img);
    }