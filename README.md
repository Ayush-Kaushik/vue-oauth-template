# vue-oauth-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

<hr/>

## Firebase Auth with Vue

-This is a basic application created in Vue to understand the syntax and apply authentication via firebase
- Follow this tutorial to create your own firebase app and receive credentials that can be placed here to run the application: `https://dev.to/ayushkaushik/firebase-auth-react-1dj`
- Add .env file to the root level of this project and map the creds received from firebase app to these keys:

```javascript
VUE_APP_API_KEY=XXX
VUE_APP_AUTH_DOMAIN=XXX
VUE_APP_DATABASE_URL=XXX
VUE_APP_PROJECT_ID=XXX
VUE_APP_STORAGE_BUCKET=XXX
VUE_APP_MESSAGING_SENDER_ID=XXX
VUE_APP_APP_ID=XXX
```


For reference, here are the tutorials that I followed:
- https://github.com/bradtraversy/vue-crash-2021
- https://www.vuemastery.com/blog/getting-started-with-typescript-and-vuejs/
- https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties
- https://blog.logrocket.com/vue-firebase-authentication/
- https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
- https://bezkoder.com/vue-typescript-crud/
- https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function
- https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
- https://medium.com/js-dojo/how-to-implement-route-guard-in-vue-js-9929c93a13db
- https://github.com/vuejs/vue-router/pull/2497#issuecomment-474010032 ~ This explains the type to be used for next in route guard
- https://openclassrooms.com/en/courses/5664336-create-a-web-application-with-vue-js/6536106-retrieve-data-from-vuex