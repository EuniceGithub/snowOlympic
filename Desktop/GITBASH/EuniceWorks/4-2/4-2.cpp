#include <stdio.h>

int main(void)
{
	int cnt=0;
	int sum=0;
	int  a,b;
    
    puts("����������������");
    printf("����A��"); scanf("%d",&a);
    printf("����B��"); scanf("%d",&b);
    cnt=a;
	sum=a;
    
    do{
	  cnt=cnt+1;
	  sum=sum+cnt; 
	}while(cnt<b);
	
	printf("���ڵ���%dС�ڵ���%d�����������ĺ���%d",a,b,sum);
	
	return 0;
 } 
