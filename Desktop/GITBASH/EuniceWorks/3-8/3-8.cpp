#include <stdio.h>

int main(void)
{
	int a,b,c,answer;
	
	puts("����������������");
	printf("����A:"); scanf("%d",&a);
	printf("����B:"); scanf("%d",&b);
	
	c=a-b;
	if(c>=0)
	  answer=c;
	else
	  answer=-c;
	
	printf("���ǵĲ���%d��\n",answer); 
	  
	return 0;
 } 
