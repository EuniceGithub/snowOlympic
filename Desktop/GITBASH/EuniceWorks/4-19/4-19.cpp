#include <stdio.h>

int main(void)
{
	int n,i;
	int num=0;
	
	printf("����ֵ��");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++){
		if(n%i==0){
		  printf("%d\n",i);
		  num++;
		}  
	}	
	
	printf("Լ����%d����",num);
    return 0;	
}
