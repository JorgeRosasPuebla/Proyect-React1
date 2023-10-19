# Interface UI

## Description

**Interface UI** is a mobile application under development that connects to an API created in Laravel to provide .

## Components

### App.js

- **Description**: The main component of the application.
- **Functionality**: It initializes and configures navigation between different screens of the application, including the welcome screen (Welcome), the login screen (Login), the home screen (Home), and any other screens related to the quoting functionality.

### Welcome.js

- **Description**: The welcome screen of the application.
- **Functionality**: It displays a welcome screen with a logo and options for authentication (fingerprint or traditional login). It uses `expo-local-authentication` for biometric authentication.

### Login.js

- **Description**: The login screen of the application.
- **Functionality**: It allows users to enter their username and password. If the credentials match predefined values or the API, the user is directed to the home screen (Home). It also provides the option for biometric authentication.

### Home.js

- **Description**: The home screen of the application.
- **Functionality**: It represents the main screen of the application after login. Users can log out by clicking the "Log Out" button, which redirects them to the login screen (Login).

## API and Connection

- **Laravel API**: The application connects to an API created in Laravel that provides the quoting functionality. Make sure to provide details on how to set up and use this API in your documentation.

## Dependencies

Make sure you have installed the following dependencies in your development environment before running the application:

- [`@react-navigation/native`](https://reactnavigation.org/native) and [`@react-navigation/stack`](https://reactnavigation.org/stack): Used for navigation between screens in the application.

  ```bash
  npm install @react-navigation/native @react-navigation/stack


expo-local-authentication: Used for biometric authentication on the login screen.
npx expo install expo-local-authentication

react-native-svg: Used for rendering SVG components, such as the circles on the home screen.
npm install react-native-svg

This README provides a complete structure with information about dependencies, the API, and other essential aspects of your project. Be sure to further customize it to fit your specific project as you progress with its development.

Feel free to use this README for your project and adapt it as needed.


ESPAÑOL 

# Interfas UI

## Descripción

**Interfas UI** es una aplicación móvil en desarrollo que se conecta a una API creada en Laravel para proporcionar un cotizador.

## Componentes

### App.js

- **Descripción**: Componente principal de la aplicación.
- **Funcionalidad**: Inicializa y configura la navegación entre las diferentes pantallas de la aplicación, incluyendo la pantalla de bienvenida (Welcome), pantalla de inicio de sesión (Login), pantalla de inicio (Home), y cualquier otra pantalla relacionada con el cotizador.

### Welcome.js

- **Descripción**: La pantalla de bienvenida de la aplicación.
- **Funcionalidad**: Muestra una pantalla de bienvenida con un logo y opciones para autenticación (huella dactilar o inicio de sesión tradicional). Utiliza `expo-local-authentication` para la autenticación biométrica.

### Login.js

- **Descripción**: La pantalla de inicio de sesión de la aplicación.
- **Funcionalidad**: Permite a los usuarios introducir su nombre de usuario y contraseña. Si las credenciales coinciden con los valores predefinidos o con la API, el usuario es dirigido a la pantalla de inicio (Home). También proporciona la opción de autenticación biométrica.

### Home.js

- **Descripción**: La pantalla de inicio de la aplicación.
- **Funcionalidad**: Representa la pantalla principal de la aplicación después del inicio de sesión. Los usuarios pueden cerrar la sesión pulsando el botón "Cerrar Sesión" que los redirige a la pantalla de inicio de sesión (Login).

## API y Conexión

- **API Laravel**: La aplicación se conecta a una API creada en Laravel que proporciona el cotizador. 

Dependencias

Asegúrate de haber instalado las siguientes dependencias en tu entorno de desarrollo antes de ejecutar la aplicación:

- [`@react-navigation/native`](https://reactnavigation.org/native) y [`@react-navigation/stack`](https://reactnavigation.org/stack): Utilizadas para la navegación entre pantallas en la aplicación.

  ```bash
  npm install @react-navigation/native @react-navigation/stack


expo-local-authentication: Utilizada para la autenticación biométrica en la pantalla de inicio de sesión.

npx expo install expo-local-authentication

react-native-svg: Utilizada para renderizar componentes SVG, como los círculos de la pantalla de inicio.

npm install react-native-svg


Este README proporciona una estructura completa con información sobre las dependencias, la API y otros aspectos importantes de tu proyecto. Asegúrate de personalizarlo aún más para que se adapte a tu proyecto específico a medida que avances en su desarrollo.
