#include <stdio.h>

int main(void)
{
	int a,b,c,d,min;
	
	puts("请输入四个整数。");
	printf("整数A:"); scanf("%d",&a);
	printf("整数B:"); scanf("%d",&b);
	printf("整数C:"); scanf("%d",&c); 
	printf("整数D:"); scanf("%d",&d); 
	
	min=a;
	if(b>min)min=b;
	if(c>min)min=c;
	if(d>min)min=d;
	
	printf("最大值是%d。\n",min); 
	  
	return 0;
 } 
