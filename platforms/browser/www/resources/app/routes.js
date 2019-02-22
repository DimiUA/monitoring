routes = [
	{
        path: '/',
        componentUrl: './resources/pages/home.html',
        name: 'home',         
    },
    {
        path: '/panel-left/',
        panel: {
            componentUrl: './resources/pages/panel-left.html',
        }
    },
    /*{
        path: '/login-screen/',        
        name: 'login-screen',
        loginScreen:{
            componentUrl: './resources/pages/login-screen.html',
        }
    },*/
    {
        path: '/client-info/',        
        name: 'client-info',        
        componentUrl: './resources/pages/client-info.html',
        
    },
    {
        path: '/alarm-info/:AlarmType/',        
        name: 'alarm-info',        
        componentUrl: './resources/pages/alarm-info.html',        
    },
    {
        path: '/asset-position/',        
        name: 'asset-position',        
        componentUrl: './resources/pages/asset-position.html',        
    },
 
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
