#include <stdio.h>

int main(void)
{
    int i,j,len;

    puts("让我们来画一个向下的金字塔");
    printf("金字塔有几层：");scanf("%d",&len);

    for(i=1;i<=len;i++){
        for(j=1;j<i;j++){
            printf(" ");
        }
        for(j=0;j<=len-(i-1)*2+3;j++){
            printf("%d",i%10);
        }
        putchar('\n');
    }
    return 0;
}
