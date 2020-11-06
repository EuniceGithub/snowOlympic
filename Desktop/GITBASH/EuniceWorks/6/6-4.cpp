#include <stdio.h>

int sqr(int x){
	return x*x;
}    
int sqr2(int y){
	return y*y;
}
int main(void){
	int n;
	printf("请输入一个整数：");scanf("%d",&n);
	printf("该整数的四次幂为%d。",sqr2(sqr(n)));
}
