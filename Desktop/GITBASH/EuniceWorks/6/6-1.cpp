#include <stdio.h>

int max(int a,int b){
	return(a>b)?a:b;
}

int main(void)
{
	int a,b;
	
	puts("����������������");
	printf("����a��"); scanf("%d",&a); 
	printf("����b��"); scanf("%d",&b);
	
	printf("���ֵ��%d��\n",max(a,b)); 
} 
