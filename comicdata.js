var captions = [];
captions[1] = [ 
"You are a student at L. Roman High School, a special high school for the most ordinary, average students.<br> Today is Monday. On Friday, every student will take a Very important exam, which will determine whether they succeed or fail in life.", 

"What is your name?" ];

var commands = [ 
"begin",
"name: Honda accord" 
];

class Panel {
	constructor(){
		this.image   = "";
		this.caption = "";
	}
	
	getHTML(){
		
		var outstring = "";
		
		// The image panel
		outstring += "<div class=\"panel\">"
		outstring += "<img src=\"" + this.image + "\">"
		outstring += "</div>"
		
		// The caption panel
		outstring += "<div class=\"bodydiv\">"
		outstring += this.caption
		outstring += "</div>"
		
		return outstring;
	}
}

class Page {
	constructor( index ){
		this.panels = [];
		this.index  = index;
		
		for (i = 0; i < captions[index].length; i++){
			
			this.addPanel( new Panel() );
			
		}
	}
	
	addPanel( panel ){
		
		var captionstring = captions[this.index][this.panels.length];
		panel.caption = captionstring;
		
		this.panels.push( panel );
		
		var imagestring = "img/" + this.index + "_" + this.panels.length + ".png"
		panel.image = imagestring;

	}
	
	getHTML(){
		var code = "";
		
		// Top bar with the command of last time
		
		code += "<div class=\"tittle\">"
		code += "<h2>> " + commands[ this.index - 1 ] + "</h2>"
		code += "</div>"
		
		// Contents of all panels
		
		for (i = 0; i < this.panels.length; i++){
			var panel = this.panels[i];
			
			code += panel.getHTML();
		}
		
		code += "<div class=\"controls\">"
		code += "<h3> > <a href=\"" + (this.index+1) + ".html\">" + commands[this.index] + "</a> </h3>"
		code += "</div>"
		
		if (this.index == 1){
			code +=	"<h3><a href=\"index.html\"><== </a></h3>"
		}else{
			code +=	"<h3><a href=\"" + (this.index - 1) + ".html\">"<== </a></h3>"
		}
		
		
		return code;
	}
}

var page = new Page(1);

var maindiv = document.getElementById("maindiv"); 
var innercode = maindiv.innerHTML;

innercode += page.getHTML();

maindiv.innerHTML = innercode;