# frontend-challenge

## Supuestos

* Ya que se pidió específicamente solo usar el endpoint de "list all products", no hice queries a las compras específicas, por ende el valor de `"Quedan <X> comprimidos"` junto con `"Para <Y> días"` quedaron hardcodeados
* Lo mismo aplica al efecto de "Clicked" para el primer producto
* Para cada producto, utilicé el `"display"` entregado por la API como texto alternativo, para sumarle un poco de accesibilidad
* Para el ejemplo tuve que hardcodear la url del endpoint. En producción se debería usar otra solución, como por ejemplo una variable de entorno, o si se utiliza un proxy inverso, añadir una ruta como /api/
* Por lo corto de la tarea no seguí un flujo de trabajo, pero se podría haber utilizado alguno como gitflow, o trunk-based development y Conventional Commits.

## Uso
Para ejecutar el proyecto se puede utilizar [Docker](https://docs.docker.com/compose/).
```bash
# Build the image
docker-compose build
# Run the container
docker-compose up
```
