const MyRoutes = [];
MyRoutes.push({
    to:'/',
    text:'Home',
    hidden: false,
})
MyRoutes.push({
    to:'/blog',
    text:'Blog',
    hidden: false,
})
MyRoutes.push({
    to:'/profile',
    text:'Profile',
    hidden: true,
})
MyRoutes.push({
    to:'/login',
    text:'Login',
    hidden: false,
})
MyRoutes.push({
    to:'/logout',
    text:'Logout',
    hidden: true,
})
MyRoutes.push({
    to:'/secret',
    text:'Secret',
    hidden: true,
})

export { MyRoutes }