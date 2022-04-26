#include <stdio.h>

int main(void)
{
	int i,h1,h2,m;
	
	printf("开始数值（cm)：");
	scanf("%d",&h1);
	printf("结束数值（cm）：");
	scanf("%d",&h2);
	printf("间隔数值（cm）：");
	scanf("%d",&m);
    
	for(i=h1;i<=h2;i+=5){
	printf("%dcm%8.2fkg\n",i,(i-100) * 0.9);
	}
		
	return 0;
}
