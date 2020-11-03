#include <stdio.h>

int max(int a,int b){
	return(a>b)?a:b;
}

int main(void)
{
	int a,b;
	
	puts("请输入两个整数：");
	printf("整数a："); scanf("%d",&a); 
	printf("整数b："); scanf("%d",&b);
	
	printf("最大值是%d。\n",max(a,b)); 
} 
