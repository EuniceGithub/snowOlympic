#include <stdio.h>

int main(void)
{
	int a,b,c,d,min;
	
	puts("�������ĸ�������");
	printf("����A:"); scanf("%d",&a);
	printf("����B:"); scanf("%d",&b);
	printf("����C:"); scanf("%d",&c); 
	printf("����D:"); scanf("%d",&d); 
	
	min=a;
	if(b>min)min=b;
	if(c>min)min=c;
	if(d>min)min=d;
	
	printf("���ֵ��%d��\n",min); 
	  
	return 0;
 } 
