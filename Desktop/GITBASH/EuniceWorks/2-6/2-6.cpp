#include <stdio.h>

int main(void)
{
	int h;
	
	printf("请输入您的身高："); scanf("%d",&h);
	printf("您的标准体重是%.1f。\n",(double)(h-100)*0.9);
	
	return 0;
 } 
