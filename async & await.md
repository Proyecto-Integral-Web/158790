# Async #
La palabra reservada Async crea una función del tipo Async, que circular, la cual regresa un tipo de objeto llamado promesa.
Esta promesa puede ejecutarse de manera correcta, regresando el dato que la función proceso, o no,
regresando un error que deberá ser capturado.
Esto se usa para crear fragmentos de código que pueden tardar en su procesamiento y no es necesario mantener atorado el 
hilo principal de ejecución esperando algo que no es ultra necesario de mostrar.


# Await #
Este solo indica que se ve a ejecutar código de manera asíncrona y sirve para no detener la ejecución del
hilo principal de ejecución.
