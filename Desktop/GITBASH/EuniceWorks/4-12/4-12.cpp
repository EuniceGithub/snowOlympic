#include <stdio.h>

int main(void)
{
	int i,no;
	
	do {
		printf("������һ�������� ��");
    	scanf("%d",&no);
		if(no<=0)
		printf("\a�벻Ҫ�������������");
	}while(no<=0);
	
	printf("%d��λ����",no);
	while(no>0){
		no/=10;
		i++;
	}
	printf("%d",i);
	
	return 0;
 } 
