#include <stdio.h>

int cube(int x){
	return x*x*x;
}

int main(void)
{
	int x;
	
	printf("������һ��������"); scanf("%d",&x);
	printf("��������������%d��",cube(x)); 
}
