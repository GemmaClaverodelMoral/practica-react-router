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

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
