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
	printf("������һ��������");scanf("%d",&n);
	printf("�������Ľ׳˽��Ϊ%d��",factorial(n));
}
