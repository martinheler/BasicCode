def Fibonacci():
        x=0 #numero trans-anterior
        y=1 #numero anterior
        z=0 #resultado final de suma de numeros

        cantidad = int(input('ingrese el ultimo numero de la serie fibonacci: '))+1
        #cantidad sera la variable donde el usuario coloque el limite de la serie fibonacci
        fibonacci = []
        #fibonacci sera la lista final con la serie fibonacci
        for i in range(1,cantidad):
                z=x+y
                y=x #guarda el numero actual en x
                x=z #guarda el resultado de la suma actual
                #con esto sumamos el numero anterior y trans-anterior en la serie
                fibonacci.append(z) #adjuntamos la suma en la lista
        return fibonacci
print(Fibonacci())