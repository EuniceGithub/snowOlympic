#include <stdio.h>

int main(void)
{
    int i,j,len;

    puts("����������һ�����µĽ�����");
    printf("�������м��㣺");scanf("%d",&len);

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
