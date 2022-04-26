#include <stdio.h>

int main(void)
{
    int i,j,n,m;

    puts("让我们来画一个长方形。");
    printf("一边："); scanf("%d",&i);
    printf("另一边："); scanf("%d",&j);

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
