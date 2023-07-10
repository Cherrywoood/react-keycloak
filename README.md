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

# Кастомные темы Keycloak
Для кастомизации тем используется библиотека <a href="https://github.com/keycloakify/keycloakify">keycloakify</a>. Настоятельно рекомендуется ознакомиться с документацией и другой информацией проекта. А также ознакомиться со стартовым проектом <a href="https://github.com/keycloakify/keycloakify-starter">keycloakify-starter</a>. 

Для нашего проекта я удалила лишнии файлы(как мне показалось) из стартового проекта. Страницы keycloak находятся в директории keycloak-theme. Там представлены кастомные страницы для логина и регистрации. 

Для добавления библиотеки в свой проект необходимо выполнить команду npm i keycloakify и следующие строки в scripts в package.json: "prepare": "copy-keycloak-resources-to-public", "build-keycloak-theme": "npm run build && keycloakify". Про это в принципе написано в документации.

Для добавления новых страниц использовать команду npx eject-keycloak-page, а также добавить их в KcApp.tsx.

Стили можно определять в KcApp.css, а затем их добавлять к классам в KcApp.tsx.

Добавлять или менять сообщения можно в i18n.ts.

В kcContext.ts можно добавить валидацию на стороне клиента, пример есть.

Для тестирования у них есть Storybook, но у меня не получилось его подключить. Чтобы посмотреть, как выглядит страничка можно в kcContext.ts раскомментрировать 94 строчку и написать нужно страницу. 

После того, как странички будут готовы и захочется добавить их в keycloak использовать команду  "npm run  build-keycloak-theme". По пути build_keycloak/src/main/resources/theme/react-keycloak будут лежать файлы с темой. Необходимо в проект с бэкендом в директорию docker вставить build_keycloak/src/main/resources/theme/react-keycloak(прямо по этому пути). Перезагрузить контейнер.

Если возникнут вопрсоы и проблемы, можно репозитории библиотеки открыть обсуждение или проблему и человечек там ответит.
