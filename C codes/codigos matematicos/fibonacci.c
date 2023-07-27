#include <stdio.h>

int main(){

    int x,z = 0;
    int y = 1;
    int num;

    printf("Ingrese un numero\n");
    scanf("%d", &num);

    for(int i=1; i <= num; i++){
        z=x+y;
        y=x;
        x=z;
        printf("%d", z);

    }

    return 0;
}