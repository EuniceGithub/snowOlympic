#include <stdio.h>

int main(void)
{
	int i,no;
	
	do {
		printf("请输入一个正整数 ：");
    	scanf("%d",&no);
		if(no<=0)
		printf("\a请不要输入非正整数！");
	}while(no<=0);
	
	printf("%d的位数是",no);
	while(no>0){
		no/=10;
		i++;
	}
	printf("%d",i);
	
	return 0;
 } 
