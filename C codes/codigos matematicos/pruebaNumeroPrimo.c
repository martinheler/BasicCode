#include <stdio.h>


int main(){
    char buffer[100];

    int num, counter=0;
    printf("Ingrese un numero\n");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
    {
        if (num % i == 0)
        {
            counter++;
        }
        
    }
    
    if(counter == 2){
        sprintf(buffer, "El numero: %d, es primo", num);
    }else{
        sprintf(buffer, "El numero: %d, no es primo", num);
    }

    printf("%s\n", buffer);
    return 0;
}