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
    {
        path: '/alarm-history/',        
        name: 'alarm-history',        
        componentUrl: './resources/pages/alarm-history.html',        
    },
    {
        path: '/messages-list/',        
        name: 'messages-list',        
        componentUrl: './resources/pages/messages-list.html',        
    },
    {
        path: '/messages/',        
        name: 'messages',        
        componentUrl: './resources/pages/messages.html',        
    },

 
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
