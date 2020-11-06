#include <stdio.h>

int sumup(int n){
	int sum=0;
	while(n-->0)
		sum+=n;
	return sum;
	
}
int main(void){
	int n;
	printf("请输入一个整数：");scanf("%d",&n);
	printf("1至%d之间所有整数的值的和为%d。",n,sumup(n));
}
