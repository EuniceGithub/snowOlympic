#include <stdio.h>
#define max(x,y) ((x>y)?(x):(y)) 

int main(void){
	int a,b,c,d;
	
	printf("�������ĸ�������\n");
	printf("����һ��");scanf("%d",&a);
	printf("��������");scanf("%d",&b);
	printf("��������");scanf("%d",&c);
	printf("�����ģ�");scanf("%d",&d);
	printf("���ĸ��������ֵ��%d��",max(max(max(a,c),c),d));
} 
