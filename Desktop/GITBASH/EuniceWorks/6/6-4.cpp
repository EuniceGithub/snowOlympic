#include <stdio.h>

int sqr(int x){
	return x*x;
}    
int sqr2(int y){
	return y*y;
}
int main(void){
	int n;
	printf("������һ��������");scanf("%d",&n);
	printf("���������Ĵ���Ϊ%d��",sqr2(sqr(n)));
}
