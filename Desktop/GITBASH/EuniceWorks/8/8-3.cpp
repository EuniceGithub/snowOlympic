#include <stdio.h>
#define swap(type,x,y) {int c;c=x;x=y;y=c;}

int main(void){
	int a,b;
	
	printf("����������������\n");
	printf("����һ��");scanf("%d",&a);
	printf("��������");scanf("%d",&b);

	printf("˳�������\n");
	swap(int,a,b);
	printf("����һ��%d\n",a);
	printf("��������%d",b);
	
	return 0;
} 
