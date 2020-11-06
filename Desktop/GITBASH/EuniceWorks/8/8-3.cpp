#include <stdio.h>
#define swap(type,x,y) {int c;c=x;x=y;y=c;}

int main(void){
	int a,b;
	
	printf("请输入两个整数：\n");
	printf("整数一：");scanf("%d",&a);
	printf("整数二：");scanf("%d",&b);

	printf("顺序调换。\n");
	swap(int,a,b);
	printf("整数一：%d\n",a);
	printf("整数二：%d",b);
	
	return 0;
} 
