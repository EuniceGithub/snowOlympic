#include <stdio.h>

int main(void)
{
	int a,b,c,min;
	
	puts("����������������");
	printf("����A:"); scanf("%d",&a);
	printf("����B:"); scanf("%d",&b);
	printf("����C:"); scanf("%d",&c); 
	
	min=(a<b)?a:b;
	min=(min<c)?min:c;
	
	printf("��Сֵ��%d��\n",min); 
	  
	return 0;
 } 
