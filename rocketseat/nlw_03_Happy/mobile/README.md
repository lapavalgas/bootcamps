# configurações mobile

mobile nesse projeto utiliza expo e não um padrão ReactNative padrão

``` 
yarn global add expo-cli
npm install -g expo-cli
```

Pode ser necessário configurar a path

``` 
yarn global bin
```

Será necessário incluir no path (variaveis de ambiente)

para exevutar o expo

``` 
expo -h
expo --version
```

para cirar um projeto

``` 
expo init mobile
```

configuração do emulador : https://www.youtube.com/watch?v=eSjFDWYkdxM&ab_channel=Rocketseat

instalar o expo client no emulador do android

``` 
expo client:install:android
expo client:install:ios
```

instalação das funcionalidades de mapView no expo

``` 
expo install react-native-maps
```

exite um site para ver os icones online, o nome da lib é o nome do site em geral;

### trabalhando com as fontes do google fontes

a flag `` `expo-font` `` só precisa ser instalado 1 vez, que é a habilidade do expo trabalhar com as fontes do google fonts 

``` 
expo install @expo-google-fonts/nunito expo-font
```

## react navigation é o stack de roteamento utilizado 

essa lib tem o papel do .axios ou do .fetch nos projetos frontend: https://reactnavigation.org/docs/getting-started

``` 
yarn add @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

e instalar a stack navigator lib. que é um dos tipos de navegaão do react. Existe tres tipos de navegação, navegação stack (normalmente a navegação em botões), tab navegation (navegação por abas) e  drawer navigation (menu hamburguer)
```
yarn add @react-navigation/stack
```

para ligar um mapa para outro utiliza DeepLinks

### carregar e enviar requisição http
```
expo install expo-image-picker
```