#include <stdio.h>

int main(void)
{
	int a,b,c,answer;
	
	puts("请输入两个整数。");
	printf("整数A:"); scanf("%d",&a);
	printf("整数B:"); scanf("%d",&b);
	
	c=a-b;
	if(c>=0)
	  answer=c;
	else
	  answer=-c;
	
	printf("它们的差是%d。\n",answer); 
	  
	return 0;
 } 
