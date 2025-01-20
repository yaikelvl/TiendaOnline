<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>



# Tienda Online

1. Clonar proyecto

2. Instalar los modulos de Node.
```
yarn install
```
3. Renombrar el fichero ```.env.template``` a ```.env```

4. Cambiar las variables de entorno.

5. Levantar la Base de Datos.
```
docker-compose up -d
```

6. Ejecutar SEED para poblar la Base de Datos.
```
http://localhost:3000/api/seed/
```

7. Levantar modo de desarrollo.
```
yarn start:dev
```