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
		"COM_MSG08": "Email",
		"COM_MSG09": "Off",
		"COM_MSG10": "On",
		"COM_MSG11": "Send Message",
		"COM_MSG12": "Suspend",
		"COM_MSG13": "Day",
		"COM_MSG14": "Days",

		"PROMPT_MSG00": "You can leave Notes for this Alarm below",
		"PROMPT_MSG01": "There is no Alarms",
		"PROMPT_MSG02": "Are you sure you want to close the application?",	
		"PROMPT_MSG03": "Enter Notes",
		"PROMPT_MSG04": "Enter Your Message",
		"PROMPT_MSG05": "There was no registered Alarm in selected period",
		"PROMPT_MSG06": "There is no Messages",	

		"HOME_MSG00": "Home",
		"HOME_MSG01": "Change Status",
		"HOME_MSG02": "Call Customer",
		"HOME_MSG03": "Send SMS",
		"HOME_MSG04": "Client Info",	
		"HOME_MSG05": "Send Email",
		"HOME_MSG06": "Alarm History",		

		"LOGIN_MSG01": "The login(email) or password you entered is incorrect.",
		"LOGIN_MSG02": "Login Name / Email",
		"LOGIN_MSG03": "Password",
		"LOGIN_MSG04": "Sign In",
		"LOGIN_MSG05": "Forgot password?",		

		"MENU_MSG00": "Home",
		"MENU_MSG01": "Logout",
		"MENU_MSG02": "Messages",

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
		"ALARM_INFO_MSG04": "Message",

	
		"ASSET_POSITION_MSG000": "Geolock",
		"ASSET_POSITION_MSG001": "Asset Name",
		"ASSET_POSITION_MSG002": "Status",
		"ASSET_POSITION_MSG003": "Position Time",
		"ASSET_POSITION_MSG004": "Mileage",
		"ASSET_POSITION_MSG005": "Speed",
		"ASSET_POSITION_MSG006": "Ignition",
		"ASSET_POSITION_MSG007": "Battery",
		"ASSET_POSITION_MSG008": "Power",
		"ASSET_POSITION_MSG009": "Fuel",
		"ASSET_POSITION_MSG010": "Direction",
		"ASSET_POSITION_MSG011": "Coordinates",
		"ASSET_POSITION_MSG012": "Address",
		"ASSET_POSITION_MSG013": "Update Method",
		"ASSET_POSITION_MSG014": "Moving",
		"ASSET_POSITION_MSG015": "Stopped",
		"ASSET_POSITION_MSG016": "idle",
		"ASSET_POSITION_MSG017": "Last Movement",
		"ASSET_POSITION_MSG018": "Stopped Time",
		"ASSET_POSITION_MSG019": "Engine Hours",

		"ALARM_HISTORY_MSG00": "At this section you can view Alarm History in selected period of time",
		"ALARM_HISTORY_MSG01": "Show Last"
		

		
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