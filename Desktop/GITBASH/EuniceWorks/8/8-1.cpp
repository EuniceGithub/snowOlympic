#include <stdio.h>
#define diff(x,y) ((x>y)?(x-y):(y-x)) 

int main(void){
	int x,y;
	
	printf("请输入两个整数：\n");
	printf("整数一：");scanf("%d",&x);
	printf("整数二：");scanf("%d",&y);
	printf("这两个数的差是%d。",diff(x,y));
} 
