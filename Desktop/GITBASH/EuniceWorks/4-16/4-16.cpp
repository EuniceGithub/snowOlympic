#include <stdio.h>

int main(void)
{
	int n,i;
	
	printf("ÕûÊıÖµ£º");
	scanf("%d",&n);
	
	for(i=1;i<=n;i+=2)
	   printf("%-3d",i);
	
	return 0;
}
