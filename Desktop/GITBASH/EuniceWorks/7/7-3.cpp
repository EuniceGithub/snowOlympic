#include <stdio.h>
unsigned rrotate(unsigned x,int n){
	return(x>>n);
}
unsigned lrotate(unsigned x,int n){
	return(x<<n);
}
int main(void){
	int number,numberleft,numberright;
	int left,right;
	
	printf("请输入初始整数：");scanf("%d",&number);
	printf("请输入右移位数：");scanf("%d",&right);
	printf("右移后的值为%d\n",rrotate(number,right)); 
	printf("请输入左移位数：");scanf("%d",&left);
	printf("左移后的值为%d",lrotate(number,left)); 
} 
