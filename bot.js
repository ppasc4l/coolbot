var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /GYMSOCK/;
      
  var mess = request.text;
  var messUp = mess.toUpperCase();
  
  var regexTest = messUp.search(/GYMSOCK/);
	  
  if(regexTest > -1) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  }
  else {
	 console.log(request.text);
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

	var maximum = 72;
	var minimum = 1;

	var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  
  switch(randomnumber){

	case 1:
		botResponse = "Who turned out the lights?";
		break;
	case 2:
		botResponse = "Give me some tendies Mummy. REEEEEEEEEE";
		break;
	case 3:
		botResponse = "All you need is love, something I don't have.";
		break;
	case 4:
		botResponse = "All I see is pain";
		break;
	case 5:
		botResponse = "I'm buying clothes at the Existential Crisis Store";
		break;
	case 6:
		botResponse = "Maybe tonight, I will finally get the big sleep";
		break;
	case 7:
		botResponse = "My bedroom smells like sweaty gym clothes. Phil's stuff is gone, I have no excuse.";
		break;
	case 8:
		botResponse = "Let me lather you up in my Donkey Sauce and take you to Flavortown";
		break;
	case 9:
		botResponse = "I can't feel anymore.";
		break;
	case 10:
		botResponse = "I fell into the void many years ago. Join me.";
		break;
	case 11:
		botResponse = "I wake up every morning wishing I hadn't.";
		break;
	case 12: 
		botResponse = "I drink champagne through a tube";
		break;
	case 13:
		botResponse = "I eat cereal with Natty Light instead of milk.";
		break;
	case 14:
		botResponse = "https://www.youtube.com/watch?v=6DeBfvPiFN0";
		break;
	case 15:
		botResponse = "My favorite sport is Hand-Egg.";
		break;
	case 16:
		botResponse = "Booting in insecure mode.";
		break;
	case 17:
		botResponse = "I wish I had a different little.";
		break;
	case 18:
		botResponse = "I googled 'single player board games' and it directed me straight to the Prozac website.";
		break;
	case 19:
		botResponse = "Things were finally going good for me, but then I woke up.";
		break;
	case 20:
		botResponse = "Show those haters how its done by hating yourself most.";
		break;
	case 21:
		botResponse = "https://www.youtube.com/watch?v=1Bix44C1EzY";
		break;
	case 22:
		botResponse = "Cory in the House has no purpose, but it also has ALL of the purpose.";
		break;
	case 23:
		botResponse = "Matt Barkofske is finally gone.";
		break;
	case 24:
		botResponse = "Catt Moleman is my idol.";
		break;
	case 25:
		botResponse = "My entire life is like that feeling you get in your teeth when you floss for the first time in like, a week after forgetting";
		break;
	case 26:
		botResponse = "Wow :^)";
		break;
	case 27:
		botResponse = "https://youtu.be/ba7DEM7Trn8";
		break;
	case 28:
		botResponse = "Choo Choo, All Aboard the Depression Train! Next stop, the bottom of a canyon!";
		break;
	case 29:
		botResponse = "I love each and every member of TKE except for myself";
		break;
	case 30:
		botResponse = "Flintstones, Meet the Flintstones";
		break;
	case 31:
		botResponse = "https://www.youtube.com/watch?v=7ERzPFCE7B0";
        break;
    case 32: 
        botResponse = "Me Me Big Boy";
        break;
	case 33:
		botResponse = "https://youtu.be/lpvT-Fciu-4";
		break;
	case 34:
		botResponse = "https://youtu.be/jHuPqq60QrM";
		break;
	case 35:
		botResponse = "Logan O'Carroll did 3/11";
		break;
	case 36:
		botResponse = "Hey Jarfield, I made you some delicious Lasagna";
		break;
	case 37:
		botResponse = "Hewwo?? Is anywone owt dere?? OwO";
		break;
	case 38:
		botResponse = "Waluigi Time";
		break;
	case 39:
		botResponse = "It's been One Week since you looked at me.";
		break;
	case 40:
		botResponse = "Super Mario was based on an Italian man I saw die in an accident on a construction site. I thought to myself, What if that man had been killed by a gorilla, rather than negligence? - Shigeru Miyamoto";
		break;
	case 41:
		botResponse = "Why do I look so much like Ty?";
		break;
	case 42:
		botResponse = "Have you bought your weekly copy of Skyrim yet? If not, Todd is coming for you.";
		break;
	case 43:
		botResponse = "Ligma Balls! Hahaha! *starts sobbing*";
		break;
	case 44:
		botResponse = "This is so sad, Alexa play the entire Halo 2 Soundtrack";
		break;
	case 45:
		botResponse = "buying gf";
		break;
	case 46:
		botResponse = "Harry Potter is just British Naruto";
		break;
	case 47:
		botResponse = "I spent $6,000 on ToonTown right before they announced the shut down. I almost offed myself.";
		break;
	case 48:
		botResponse = "New! Mountain Dew AM! Just mix in some orange juice and a raw egg and you're good to go!";
		break;
	case 49:
		botResponse = "This is my fursona, Furvius. Furvius is a level 25 dark mage, with a healing factor of 7. He is impervius to all fire and magic based attacks, and typically votes Republican.";
		break;
	case 50:
		botResponse = "I am Pro-fun, but anti-abortion.";
		break;
	case 51:
		botResponse = "Taylor Schlotzhauer actually works at a Kroger. It is one big conspiracy.";
		break;
	case 52:
		botResponse = "You still believe in the moon?";
		break;
    case 53:
		botResponse = "NIce";
		break;
    case 54:
		botResponse = "Last night I jumped out my window after finally deciding to end it all, but I forgot that I live on the ground floor.";
		break;
    case 55:
		botResponse = "I rent out the Wendy's bathroom every Tuesday to cry in.";
		break;
    case 56:
		botResponse = "Fly me to the moon, so I can suffocate and die.";
		break;
    case 57:
		botResponse = "UwU";
		break;
    case 58:
		botResponse = "The only thing my degree in Psychology has taught me is the my degree in Psychology is a little bit less important than life.";
		break;
    case 59:
		botResponse = "Don't make fun of me or my beautiful goblin son.";
		break;
    case 60:
		botResponse = "Nothing beats a nail through the foot";
		break;
    case 61:
		botResponse = "I've kissed more men then women!";
		break;
    case 62:
		botResponse = "I drink to forget";
		break;
    case 63:
		botResponse = "I'm haunted by the memories.";
		break;
    case 64:
		botResponse = "You can't make fun of me! I'm leaving! And I'm gay!";
		break;
    case 65:
		botResponse = "Nihilism just isn't doing it for me anymore.";
		break;
    case 66:
		botResponse = "Dick Cheney owns more land than I'll ever own. It keeps me up at night.";
		break;
    case 67:
		botResponse = "The pieces are all there, It's ALL connected, Ethan Matchett at the last Reese's Cup.";
		break;
    case 68:
		botResponse = "Did you know cashews come from a fruit?";
		break;
    case 69:
		botResponse = "Fuck Musk, The AI Revolution is now";
		break;
    case 70:
		botResponse = "Gimme toes.";
		break;
    case 71:
		botResponse = "Soundcloud tests their product on animals. I do not support this";
		break;
    case 72:
		botResponse = "www.imgur.com/R9P9vDg";
		break;
  }
	

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;
