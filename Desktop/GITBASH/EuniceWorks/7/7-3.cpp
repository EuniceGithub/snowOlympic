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
	
	printf("�������ʼ������");scanf("%d",&number);
	printf("����������λ����");scanf("%d",&right);
	printf("���ƺ��ֵΪ%d\n",rrotate(number,right)); 
	printf("����������λ����");scanf("%d",&left);
	printf("���ƺ��ֵΪ%d",lrotate(number,left)); 
} 
