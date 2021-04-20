var captions = [];

// Page 1
captions[1] = [ 
"You are a student at L. Roman High School, a special high school for the most ordinary, average students.<br> Today is Monday. On Friday, every student will take a Very important exam, which will determine whether they succeed or fail in life.", 

"What is your name?" ];

// Page 2, etc.
captions[2] = [
"Your name is Honda Accord. (Your parents gave you this name because they were driving by the Honda dealership on the way home from the Baby Factory.) Don't be fooled by this name; you are truly an ordinary human sitting in a very overcrowded, stale-aired classroom.<br><br>Your eyes are focused on the mysterious text on the blackboard.",

"Teacher: Students! Pay close attention to what is written on the board! <b>This is a very important exam.</b> Every one of you will be required to take it. It is not graded like your typical assignments. There is only two possible grades on this exam; you can either pass or fail. <br><br>If you fail the exam, you are never leaving this school. You will be sent back to \"The Third Grade\". None of you want that now, do you? I didn't think so.<br><br><b>Now, class, are there any questions before we move on?</b>"
];

captions[3] = [
"Teacher: Yes, Accord.<br><br>Accord: Teacher, can we review \"Dee's\"?<br><br>Teacher: What are \"Dee's\"?<br><br>Accord: Dee's Nu--",

"Teacher: <b>Nonononononononono. That's it. I think it's time for you to leave. We'll be fine, you just have to <i>go.</i></b><br><br>(You are forcibly expulsed from class for a little while due to your disruption. The hallway is nearly empty because students are currently in class right now... the well-behaving ones at least...) <br><br>(Where do you go now?)"
];

captions[4] = [
"You sneak into the school cafeteria and swiftly snatch all the Dootos™ from the back room without making a sound. Now the school's entire supply of Dootos™ is finally yours. (The rest of the cafeteria food was decidedly Not Very Tasty.)<br><br>You wonder what the red button does. Hmm.. that could be dangerous. It's not good to bring attention to yourself at this time. (However, if the urge comes to you, there really is no way to stop it...)"
];

captions[5] = [
"A shiver travels down your spine and your heart races as you remember the terrible Dootos™ Incident...<br><br>One year ago, an unidentified masked person entered the campus carrying an incendiary explosive made from Spicy Hot Dootos™ dust. The entire school was suddenly engulfed in flames and evacuated.<br><br>You remember smelling the burnt Dooto™ dust everywhere... and the earth-shattering explosions in every direction... and... ██████████████...<br><br>It was never disclosed how many people lived or died. Discussing the Incident has been strictly forbidden ever since.",

"While you were having the flashbacks, a school administrator sneaks up behind you, suspicious of what you are up to.<br><br>Admin: <b>What are you doing with all these Dootos™???</b>"
]

captions[6] = [
"Accord: <b>IM NOT BUILDING EXPLOSIVES</b><br>Admin: ...<br>Admin: ...<br>Admin: ...",
"Admin: Well... okay, if you say so. <br>Admin: Also... you should... get back to class!! There's... umm... an hour till lunch!",
"The cafeteria is totally empty once more. The red button is still there unpressed, but it is probably unwise to press it.<br> Your teacher might be waiting for you... or perhaps enjoying the peace and quiet? You could choose to return to class, or go somewhere else instead... <br><br>Also, what in the world are you going to do with all those Dootos™???"
]

captions[7] = [
"You try to pick up the red button. Huh... you're right! It isn't attached to anything. But there is this warning written on it... hmm... this is probably just inconsequential boilerplate text...",
"(You have obtained the Emergency Button. Try not to sit a certain way or it might go off in your pocket...)",
"You are still walking around the cafeteria. The clock says 11:03 AM-- 57 minutes till lunch. There isn't anyone in sight. What do you do now?"
]

var commands = [ 
"begin",
"name: Honda accord",
"\"Teacher, can we review 'Dee's'\"?",
"Raid the cafeteria for food while everyone else is in class",
"shiver and recall The Dootos™ Incident",
"immediately blurt out that you're not building explosives",
"Take the red button with you for later, just in case. Nobody ever said it was attached to anything....!"
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
		
		// Controls to go onto the next page
		
		code += "<div class=\"controls\">"
		if ( this.index < commands.length ){
			code += "<h3> > <a href=\"" + (this.index+1) + ".html\">" + commands[this.index] + "</a> </h3>"
		}
		code += "</div>"
		
		// Back button
		
		if (this.index == 1){
			code +=	"<h3><a href=\"index.html\"><== </a></h3>"
		}else{
			code +=	"<h3><a href=\"" + (this.index - 1) + ".html\"><== </a></h3>"
		}
		
		
		return code;
	}
}

// The index of the page is found between the slash and the dot (i.e. "/1.html")

var slashindex = location.pathname.lastIndexOf("/") + 1;
var dotindex   = location.pathname.lastIndexOf(".");
var pagename = location.pathname.substring(slashindex, dotindex);
var pageindex = parseInt( pagename, 10 );

var page = new Page(pageindex);

var maindiv = document.getElementById("maindiv"); 
var innercode = maindiv.innerHTML;

innercode += page.getHTML();

maindiv.innerHTML = innercode;

if( window.localStorage )
{
if( !localStorage.getItem('firstLoad') )
{
  localStorage['firstLoad'] = true;
  window.location.reload(true); console.log("loaded without cache");
}  
else
  localStorage.removeItem('firstLoad');
}

