# Использование Keycloak с React
1. В Keycloak realm "Recrutment-system" импортировать клиент из файла frontend-client.json в репозитории проекта. Для SPA-приложения успольнуется потом авторизации Authorization Code Flo with PKCE.
2. После создания клиента перейдите на Action вкладку в правом верхнем углу и выберите Download adapter config. Выберите Keycloak OIDC JSON для Format Option, затем нажмите Download. Загруженный keycloak.json файл должен быть размещен на вашем веб-сервере в том же месте, что и ваши HTML-страницы. Данный файл также расположен в репозитрии проекта в директории public.
3. Если нужны другие настройки редиректа после login и logout, то их можно настроить в Keycloak -> clients -> frontend-client
4. В React приложении установить <b>npm install --save keycloak-js @react-keycloak/web</b>
5. Создать файл keycloak.js (пример в src/helpers/keycloak.js)
6. Обернуть приложение в ReactKeycloakProvider и передать в пропсы настроенный keycloak из keycloak.js (пример в index.js). ReactKeycloakProvider должен быть вне StrictMode, иначе произойдет зацикливание.
7. Пример взаимодейсвтия Keycloak и React представлен в репозитории. В компоненте Header есть кнопки Login и Logout, которые инициируют аутентификацию и получение токена и выход соотствественно.
8. Получение токена можно найти в методе getToken() в файле keycloak.js.
9. С помощью хука useKeycloak можно получить доступ к экзампляру keycloak.
10. Проверить, аутентифицирован ли пользователь, можно с помощью keycloak.authenticated
11. Подробнее можно узнать в Источниках или в гугле

# Источники
<ul>
  <li><a href="https://blog.logrocket.com/implement-keycloak-authentication-react/"><b>How to implement Keycloak authentication in React</b></a></li>
  <li><a href="https://cagline.medium.com/authenticate-and-authorize-react-routes-component-with-keycloak-666e85662636"><b>Secure React Routes & Component with Keycloak</b></a></li>
  <li><a href="https://github.com/dasniko/keycloak-reactjs-demo"><b>Keycloak React.JS Demo</b></a></li>
  <li><a href="https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter"><b>Документация Keycloak: Адаптер JavaScript</b></a></li>
  <li><a href="https://github.com/react-keycloak/react-keycloak/blob/master/packages/web/README.md"><b>@react-keycloak/web git</b></a></li>
</ul>

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
