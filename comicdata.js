class Panel {
	constructor(caption){
		this.image   = "";
		this.caption = caption;
	}
	
	getHTML(){
		
		var outstring = "";
		
		outstring += "<div class=\"panel\">"
		outstring += "<img src=\"" + this.image + "\">"
		outstring += "</div>"
		
		return outstring;
	}
}

class Page {
	constructor( index ){
		this.panels = [];
		this.index  = index;
	}
	
	addPanel( panel ){
		
		this.panels.push( panel );
		var imagestring = "img/" + this.index + "_" + this.panels.length + ".png"
		panel.image = imagestring;
	}
}

var panel = new Panel("");

var p1    = new Page(1); p1.addPanel(panel);

var maindiv = document.getElementById("maindiv"); 
var innercode = maindiv.innerHTML;

for (i = 0; i < p1.panels.length; i++){
	var panel = p1.panels[i];
	
	innercode += panel.getHTML();
}

maindiv.innerHTML = innercode;