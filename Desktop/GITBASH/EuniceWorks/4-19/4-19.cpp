#include <stdio.h>

int main(void)
{
	int n,i;
	int num=0;
	
	printf("整数值：");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++){
		if(n%i==0){
		  printf("%d\n",i);
		  num++;
		}  
	}	
	
	printf("约数有%d个。",num);
    return 0;	
}
