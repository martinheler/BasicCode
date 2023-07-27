def pruebaImpar(numero):
    if (numero%2==0):
        return "{} es un numero par".format(numero)
    else:
        return "{} es un numero impar".format(numero)
    
print(pruebaImpar(2))