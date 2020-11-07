#include <stdio.h>
int factorial(int n){
	int i,x;
	x=1;
	for(i=1;i<=n;i++){
		x=x*i;
	}
	return x;
} 
int main(void){
	int n;
	printf("请输入一个整数：");scanf("%d",&n);
	printf("该整数的阶乘结果为%d。",factorial(n));
}
