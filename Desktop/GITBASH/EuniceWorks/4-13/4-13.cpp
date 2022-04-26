#include <stdio.h>

int main(void)
{
	int i,n;
	int sum=0;
	
	printf("n的值：");
	scanf("%d",&n);
	
	for (i=0; i<= n;i++) {
         sum += i;
    }
    printf("1到%d的和为%d", i-1, sum);
    
    return 0;	
}
