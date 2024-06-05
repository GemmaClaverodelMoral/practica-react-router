# PRACTICA DE REACT ROUTER


## PARA CREAR EL PROYECTO
### `npx create-react-app practica-react-router`
## PARA TRABAJAR CON REACT.ROUTER.DOM (cojemos el 6 para esta practica)
### `npm install --save react-router-dom@6`
### Para facilitar el deploy a github se importa  HashRouter de react
### En ese caso todas las URLs de las rutas incluyen  `<proyecto>/#/<ruta>`
- Usando `<NavLink>` no se necesita especificar /#/
- Ademas se puede llamar a funciones en los atributos de la etiqueta
- Para no repetir las propiedades que se repiten en cada ruta se crea un array de rutas
- uso de :slug en las rutas
- Hook useParams: renderizacion dinamica de los blogs con el 
- Hook useNavigate: para cambiar de un componente a otro sin necesidad de link solo poniendo el slug en el hook
- Hook Oulet: ( nested routes )Para renderizar varias rutas a la vez. Cosas dentro de cosas (nested routes).
- Manejo de Autenticaciones: Creacion de useAuth: Manejo de rutas privadas. login y logout. uso de React.useNavigate
- evitar navegacion no autorizada desde Menu.js usando el atributo de las rutas: (route.hidden) y atrubutos del useAuth (!auth.user) 
- evitar navegacion no autorizada desde Url creando un componente ProtectRoutes que proteja el llamado a las rutas en App.js.
-  
- Manejo de Autorizaciones: Se crean boton de eliminacion en el componente BlogPost que solo se renderiza si eres administrador (!!auth.user?.isAdmin) o si eres creador del Post (auth.user?.userName === blogpost.author) 
- Un ruta secreta solo se renderiza si el auth.user.userName = 'Gemma' desde el menu y desde la Url ademas de iniciar ocultamente.
- hacer el que boton de borrar Blogs funcione y borre el blog


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### En carpeta public:
archivo _redirects que contiene una linea: /*  /index.htlm  200 

### En package.json:
 "homepage": "https://gemmaclaverodelmoral.github.io/practica-react-router/",

 En scripts:
 "predeploy": "npm run build", 
    "deploy": "gh-pages -d build", 
### `npm run build`
### `git remote add origin https://github.com/GemmaClaverodelMoral/practica-react-router.git`
### `git push --set-upstream origin master`
### `npm add gh-pages`
### `npm run deploy`

Y cada vez que se actualice un archivo:
### `npm run deploy`
