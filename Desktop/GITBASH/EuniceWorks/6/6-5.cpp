#include <stdio.h>

int sumup(int n){
	int sum=0;
	while(n-->0)
		sum+=n;
	return sum;
	
}
int main(void){
	int n;
	printf("������һ��������");scanf("%d",&n);
	printf("1��%d֮������������ֵ�ĺ�Ϊ%d��",n,sumup(n));
}
