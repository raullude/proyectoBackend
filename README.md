# Proyecto Backend
Este proyecto trata sobre la realización de un backend usando mongoDB y javascript.
Mi proyecto es un backend con un CRUD sobre una base de datos de coches

Arquitectura Rest:

| Ruta  |      POST     |             GET         |   PUT | DELETE |
| /cars | Crea un coche | Obtener lista de coches | error | error |
| /cars/{id} | error | obtener un coche con ese id | Actualizar un coche | Borrar un coche |
| /cars/vin/{vin} | error | obtener un coche con ese vin | error | error |
| /cars/make/{make} | error | obtener una lista de coches de la misma marca | error | error|
| /cars/year/{year} | error | obtener una lista de coches del mismo año | error | error |