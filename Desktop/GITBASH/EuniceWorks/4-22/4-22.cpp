#include <stdio.h>

int main(void)
{
    int i,j,n,m;

    puts("����������һ�������Ρ�");
    printf("һ�ߣ�"); scanf("%d",&i);
    printf("��һ�ߣ�"); scanf("%d",&j);

    if(i>=j){
        for(n=1;n<=j;n++){
            for(m=1;m<=i;m++){
                printf("*");
            }
            putchar('\n');
        }
    }
    else{
        for(n=1;n<=i;n++){
            for(m=1;m<=j;m++){
                printf("*");
            }
            putchar('\n');
        }
    }
    
    return 0; 
}
