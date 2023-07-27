def encontrarNumeroPrimo(numero):
    contadorDivisionExacta = 0
    for i in range(1,numero+1):
        if(numero%i==0):
            contadorDivisionExacta+=1
    
    if(contadorDivisionExacta==2):
        return "{} es un numero primo".format(numero)
    else:
        return "{} no es un numero primo".format(numero)


print(encontrarNumeroPrimo(97))