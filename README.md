# Práctica - 02 - DPS - G04L

Repositorio para el desarrollo de la práctica 02 de la materia Diseño y Programación de Software Multiplataforma DPS104.

---

# Alumnos

## Presentado por:

| Nombres                   | Carné    | GitHub Users | Rama   |
| ------------------------- | -------- | ------------ | ------ |
| Luis Eduardo Cañas Santos | CS171609 | luisedu99    | luis   |
| José Samuel Mena Reyes    | MR171621 | JSamuelM     | samuel |

# Enlace a video

Enlace al video donde se explica construcción y funcionamiento. [Enlace aquí](https://drive.google.com/file/d/1GkvQuqrKQduqeOO4-reLQKeK7Ofzv648/view?usp=sharing).

# Uso de librerías

En este proyecto se uso [React Native](https://reactnative.dev/) y para el gestor de dependencias se utilizó [Yarn](https://yarnpkg.com/) al clonar el repositorio debería ejecutar el siguiente comando

```
yarn install
```

### Navigation

Para la práctica se utilizaron las siguientes librerias de [React Navigation](https://reactnavigation.org/)

```
@react-native-community/masked-view
@react-navigation/bottom-tabs
@react-navigation/core
@react-navigation/native
@react-navigation/native-stack
```

### Iconos

También se utilizaron iconos para darle una mejor visión a la navegación, la cual se utilizó la guía de instalación del siguiente [repositorio](https://github.com/oblador/react-native-vector-icons).

```
react-native-vector-icons
```

### Formateo de números

Para dar un formato de números con comas y decimales. Por Ejemplo **1,590.85** en este caso que tenemos que estamos emulando en un dispositio Android, fue necesaria la instalación de **Intl** que es utilizado en JavaScript, para más información revisar [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl), de manera nativa es fácil de usar pero para dispositivos Android se requiere de su instalación.

```
intl
```

Y en el archivo `index.js` se agrego el siguiente codigo.

```javascript
// solo android necesita polyfill
if (Platform.OS === 'android') {
  require('intl'); // importanto el objeto intl
  require('intl/locale-data/jsonp/es-US'); // cargar los detalles de la configuración regional necesarios, por ejemplo, aunque no es necesario para este proyecto.
}
```
