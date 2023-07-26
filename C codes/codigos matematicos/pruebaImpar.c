#include <stdio.h>

int main(){
    char buffer[100];

    int num;
    printf("Ingrese un numero\n");
    scanf("%d", &num);

    if(num%2==0){
        sprintf(buffer, "El numero: %d, es par", num);
    }else{
        sprintf(buffer, "El numero: %d, es impar", num);
    }

    printf("%s\n", buffer);
    return 0;
}
