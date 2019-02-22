window.LanguagePackages= {
	"zh":{
		
	},
	"en":{
		"COM_MSG00": "Submite",
		"COM_MSG01": "Cancel",
		"COM_MSG02": "Search",
		"COM_MSG03": "Close",
		"COM_MSG04": "SMS",
		"COM_MSG05": "Call",	
		"COM_MSG06": "Back",
		"COM_MSG07": "Nothing found",

		"PROMPT_MSG00": "You can leave Notes for this Alarm below",
		"PROMPT_MSG01": "There is no Alarms",			

		"HOME_MSG00": "Home",
		"HOME_MSG01": "Status",
		"HOME_MSG02": "Call Customer",
		"HOME_MSG03": "Send SMS",
		"HOME_MSG04": "Client Info",		

		"LOGIN_MSG01": "The login(email) or password you entered is incorrect.",
		"LOGIN_MSG02": "Login Name / Email",
		"LOGIN_MSG03": "Password",
		"LOGIN_MSG04": "Sign In",
		"LOGIN_MSG05": "Forgot password?",		

		"MENU_MSG00": "Home",
		"MENU_MSG01": "Logout",

		"CLIENT_INFO_MSG00": "First Name",
		"CLIENT_INFO_MSG01": "Last Name",
		"CLIENT_INFO_MSG02": "Login Name",
		"CLIENT_INFO_MSG03": "Account Name",
		"CLIENT_INFO_MSG04": "Email",
		"CLIENT_INFO_MSG05": "Phone",
		"CLIENT_INFO_MSG06": "Emergency Contact",

		"ALARM_INFO_MSG00": "Alarm info",
		"ALARM_INFO_MSG01": "Asset Name",
		"ALARM_INFO_MSG02": "Alarm Type",
		"ALARM_INFO_MSG03": "Notes",

		
	},
	"ua":{
		
	},
	"ru":{
		
	},
	"es":{
		
	}
};
var lang = navigator.browserLanguage ? navigator.browserLanguage.toLowerCase() : navigator.language.toLowerCase();
if(lang.indexOf("en") >= 0) {
	lang = "en";
}
else if(lang.indexOf("es") >= 0) {
	lang = "en";
}
else if(lang.indexOf("zh") >= 0) {
	lang = "en";
}	
else if(lang.indexOf("ua") >= 0 || lang.indexOf("uk") >= 0) {
	//lang = "ua";
	lang = "en";	
}
else if(lang.indexOf("ru") >= 0) {
	//lang = "ru";
	lang = "en";	
}	
else {
	lang = "en";		
}
window.LANGUAGE = LanguagePackages[lang];
if(!Template7.global)
{
	Template7.global = {};
}

Template7.global.LANGUAGE = window.LANGUAGE;