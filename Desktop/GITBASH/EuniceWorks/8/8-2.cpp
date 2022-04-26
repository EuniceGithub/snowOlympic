#include <stdio.h>
#define max(x,y) ((x>y)?(x):(y)) 

int main(void){
	int a,b,c,d;
	
	printf("请输入四个整数：\n");
	printf("整数一：");scanf("%d",&a);
	printf("整数二：");scanf("%d",&b);
	printf("整数三：");scanf("%d",&c);
	printf("整数四：");scanf("%d",&d);
	printf("这四个数中最大值是%d。",max(max(max(a,c),c),d));
} 
