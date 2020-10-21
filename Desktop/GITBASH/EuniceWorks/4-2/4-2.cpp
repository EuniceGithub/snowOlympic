#include <stdio.h>

int main(void)
{
	int cnt=0;
	int sum=0;
	int  a,b;
    
    puts("请输入两个整数。");
    printf("整数A："); scanf("%d",&a);
    printf("整数B："); scanf("%d",&b);
    cnt=a;
	sum=a;
    
    do{
	  cnt=cnt+1;
	  sum=sum+cnt; 
	}while(cnt<b);
	
	printf("大于等于%d小于等于%d的所有整数的和是%d",a,b,sum);
	
	return 0;
 } 
