#include <stdio.h>

int main(void)
{
    int i,j,len;

    puts("����������һ��������");
    printf("�������м��㣺");scanf("%d",&len);

    for(i=1;i<=len;i++){
        for(j=1;j<=len-i;j++){
            printf(" ");
        }
        for(j=1;j<=(i-1)*2+1;j++){
            printf("*");
        }
        putchar('\n');
    }
    return 0;
}
