#include <stdio.h>

int main(void)
{
	int i,n;
	int sum=0;
	
	printf("n��ֵ��");
	scanf("%d",&n);
	
	for (i=0; i<= n;i++) {
         sum += i;
    }
    printf("1��%d�ĺ�Ϊ%d", i-1, sum);
    
    return 0;	
}
