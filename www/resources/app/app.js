// Dom7
var $$ = Dom7;

var htmlTemplate = $$('script#loginScreenTemplate').html();
var compiledTemplate = Template7.compile(htmlTemplate);
$('#app').prepend(compiledTemplate);

// Framework7 App main instance
var app  = new Framework7({
    root: '#app', // App root element
    id: 'com.sinopacific.monitoring', // App bundle ID
    name: 'QuikTtrak Monitoring', // App name
    theme: 'auto', // Automatic theme detection
	touch: {
	    tapHold: true //enable tap hold events
	},
	on: {
        routerAjaxStart: function () {          
            app.progressbar.show();
        },
        routerAjaxComplete: function () {           
            app.progressbar.hide();
        },
        
    },
  // App root data
    data: function () {
        var maxPopupWidth = 280;
        if (this.device.desktop) {
            maxPopupWidth = 300;
        }

        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
            MaxMapPopupWidth: maxPopupWidth,
            MarkerIcon: [
                L.icon({
                    iconUrl: 'resources/images/marker.svg',                       
                    iconSize:     [60, 60], // size of the icon                        
                    iconAnchor:   [17, 55], // point of the icon which will correspond to marker's location                        
                    popupAnchor:  [0, -60] // point from which the popup should open relative to the iconAnchor
                }),
                L.icon({
                    iconUrl: 'resources/images/marker2.svg',                       
                    iconSize:     [60, 60], // size of the icon                        
                    iconAnchor:   [17, 55], // point of the icon which will correspond to marker's location                        
                    popupAnchor:  [0, -60] // point from which the popup should open relative to the iconAnchor
                }),
                L.icon({
                    iconUrl: 'resources/images/marker3.svg',                       
                    iconSize:     [40, 40], // size of the icon                        
                    iconAnchor:   [20, 39], // point of the icon which will correspond to marker's location                        
                    popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor
                })
            ],
        };
    },    
  // App root methods
    methods: {       
        logout: function(){
            console.log('logout');
            localStorage.ACCOUNT = '';
            //mainView.router.navigate('/login-screen/');
            app.loginScreen.open('.login-screen');  
        },
        login: function(){

            app.dialog.progress();
            setTimeout(function(){
                app.loginScreen.close();
                app.dialog.close();
                localStorage.ACCOUNT = 'Demo';
            }, 1000);
                    /*app.dialog.progress();
                    app.request.get(API_URL.LOGIN, {}, function (data, xhr, status) { 
                                             

                        app.dialog.close();
                    },
                    function (xhr, status) {            
                        app.dialog.close();
                        //app.dialog.alert('Error occurred during get categories request!');
                        app.dialog.alert('Error occured');             
                    },
                    'json');   */
        },
        callTo: function(phone){
            if (phone) {
                window.open('tel:'+phone);
            }
        },
        createMap: function(option){
            var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { name: 'osm', attribution: '' });            
            var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
                maxZoom: 22,
                subdomains:['mt0','mt1','mt2','mt3']
            });           
            var googleSatelitte = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
                maxZoom: 20,
                subdomains:['mt0','mt1','mt2','mt3']
            });  
             
            var map = L.map(option.target, { zoomControl: false, center: option.latLng, zoom: option.zoom, layers: [googleStreets] }); 
                            
            var layers = {
                "<span class='mapSwitcherWrapper googleSwitcherWrapper'><img class='layer-icon' src='resources/images/googleRoad.png' alt='' /> <p>Map</p></span>": googleStreets,
                "<span class='mapSwitcherWrapper satelliteSwitcherWrapper'><img class='layer-icon' src='resources/images/googleSatellite.png' alt='' />  <p>Satellite</p></span>": googleSatelitte,
                "<span class='mapSwitcherWrapper openstreetSwitcherWrapper'><img class='layer-icon' src='resources/images/openStreet.png' alt='' /> <p>OpenStreet</p></span>": osm,                 
            };           
            
            L.control.layers(layers).addTo(map);  

            return map;
        },
    },
    // App routes
    routes: routes,
});

// Init/Create main view
// Init/Create main view
var mainView = app.views.create('.view-main', {
    //url: app.view.pushStateRoot ? app.view.pushStateRoot : '/',
    stackPages: true,
    url: '/',

    on: {
        
    }
});

document.addEventListener("deviceready", onDeviceReady, false ); 

function onDeviceReady(){ 
    //AppDetails.appId = BuildInfo.packageName;

    //fix app images and text size
    if (window.MobileAccessibility) {
        window.MobileAccessibility.usePreferredTextZoom(false);    
    }
    if (StatusBar) {
        StatusBar.styleDefault();
    } 
    

    document.addEventListener("backbutton", backFix, false); 
    //alert(JSON.stringify(window.device));
}


function backFix(event){     
    if (app.views.main.router.currentRoute.url == "/" ){ 
        app.dialog.confirm(LANGUAGE.PROMPT_MSG02, function () {        
            navigator.app.exitApp();
        });
    }else{
        mainView.router.back();
    } 
}

function hideKeyboard() {
    document.activeElement.blur();
    $$("input").blur();
}

$$('body').on('submit', '.login-form', function (e) {    
    e.preventDefault();     
    //preLogin(); 
    app.methods.login();
    hideKeyboard();
    return false;
});

$$('body').on('click', '.password-toggle', function(){
    var password = $(this).siblings("input[name='password']");
    if(password.prop("type") == "text"){
        password.prop("type", "password");
    }else{
        password.prop("type", "text");   
    }  
    $$(this).toggleClass('text-color-black');     
});

/*var parrent = $$(e.target).closest('.password-toggle');
                var input = parrent.siblings('input[name="password"]');
                if (input.attr('type') == 'password') {
                    input.attr('type','text');
                    parrent.addClass('text-color-black');
                }else{
                    input.attr('type','password');
                    parrent.removeClass('text-color-black');
                }*/