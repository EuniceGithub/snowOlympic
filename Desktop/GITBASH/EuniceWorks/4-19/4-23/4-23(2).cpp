#include <stdio.h>

int main(void)
{

    int i,j,len;

    puts("����ֱ�������Ϸ��ĵ���ֱ�������Ρ�");
    printf("�̱ߣ�");scanf("%d",&len);

    for(i=1;i<=len;i++){
        for(j=1;j<i;j++){
            printf("  ");
        }    	
        for(j=i;j<=len;j++){
            printf("* ");
        }
        putchar('\n');
    }

    return 0;
}
