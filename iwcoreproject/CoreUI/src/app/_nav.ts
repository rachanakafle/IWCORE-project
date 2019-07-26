interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },

  {
    title: true,
    name: ""
  },
  //   {
  //     name: 'Base',
  //     url: '/base',
  //     icon: 'icon-puzzle',
  //     children: [
  // //       // {
  // //       //   name: 'Cards',
  // //       //   url: '/base/cards',
  // //       //   icon: 'icon-puzzle'
  // //       // },

  //       {
  //         name: 'Forms',
  //         url: '/base/forms',
  //         icon: 'icon-puzzle'
  //       },
  //       // {
  //       //   name: 'Pagination',
  //       //   url: '/base/paginations',
  //       //   icon: 'icon-puzzle'
  //       // },

  //       {
  //         name: 'Tables',
  //         url: '/base/tables',
  //         icon: 'icon-puzzle'
  //       },
  //       {
  //         name: 'Tabs',
  //         url: '/base/tabs',
  //         icon: 'icon-puzzle'
  //       },

    //   ]
    // },

  {
    name: "Users",
    url: "/all-users",
    icon: "icon-people"
  },
  {
    name: "Partners",
    url: "/partners",
    icon: "icon-user"
  },
  {
    name: "Project Managers",
    url: "/projectmanagers",
    icon: "icon-user"
  },
  {
    name: "Developers",
    url: "/developers",
    icon: "icon-user",
   
  },
  {
    name: "Projects",
    url: "/projects",
    icon: "icon-docs"
  },

 

  //   {
  //     name: "Charts",
  //     url: "/charts",
  //     icon: "icon-pie-chart"
  //   }
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     // {
  //     //   name: 'Login',
  //     //   url: '/login',
  //     //   icon: 'icon-star'
  //     // },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
];
