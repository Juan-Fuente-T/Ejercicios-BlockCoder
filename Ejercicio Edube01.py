"""Beatles = []
print("Paso 1:", Beatles)
   
# paso 2
Beatles  = Beatles.append("JL", "PM", "GH")
print("Paso 2:", Beatles)

# paso 3
print("Paso 3:", Beatles)

# paso 4
print("Paso 4:", Beatles)

# paso 5
print("Paso 5:", Beatles)


# probando la longitud de la lista
print("Los Fav", len(Beatles))"""

my_list = [1, 2, 4, 4, 1, 4, 2, 6, 2, 9]
#
# Escribe tu código aquí.
#
lista = []


for numero in range (len(my_list)):
    borrar = my_list[numero]
    if borrar not in lista:
        lista.append(borrar)
print("La lista con elementos únicos es:", lista)

nuevo = int(input ("Introduce un numero de los que falta:"))
if nuevo not in lista:
    lista.append(nuevo)
    mocos = sorted(lista)
print("La lista con elementos únicos es:", mocos)

# Lista original
numeros = [1, 2, 3, 4, 5, 2, 4, 6, 7, 8, 3, 1]

# Lista temporal para trabajar
numeros_sin_repeticiones = []

# Iterar a través de la lista original y agregar cada número solo si no está en la nueva lista
for numero in numeros:
    if numero not in numeros_sin_repeticiones:
        numeros_sin_repeticiones.append(numero)

# Imprimir la lista nueva sin repeticiones
print(numeros_sin_repeticiones)


