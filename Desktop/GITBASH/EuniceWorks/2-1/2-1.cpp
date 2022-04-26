#include <stdio.h>

int main(void)
{
	int n1,n2;
	int n3=100;
	
	puts("请输入两个整数。");
	printf("整数x：");  scanf("%d",&n1);
	printf("整数y：");  scanf("%d",&n2);
	
	printf("x值是y值的%d%%。\n",n1*n3/n2);
}
