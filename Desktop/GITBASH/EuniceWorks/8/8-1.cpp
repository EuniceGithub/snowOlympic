#include <stdio.h>
#define diff(x,y) ((x>y)?(x-y):(y-x)) 

int main(void){
	int x,y;
	
	printf("����������������\n");
	printf("����һ��");scanf("%d",&x);
	printf("��������");scanf("%d",&y);
	printf("���������Ĳ���%d��",diff(x,y));
} 
