#include <stdio.h>
#define NUMBER	5
int rev_intary(int v[],int n){
	int i;
	for(i=0;i<n/2-1;i++){
		int temp=v[i];
		v[i]=v[n-1-i];
		v[n-1-i]=temp;
	}
	
}

int main(void){
	int i;
	int v[NUMBER];
	int n;
	
	printf("������%d��Ԫ�ص�ֵ��\n",NUMBER);
	for(i=0;i<NUMBER;i++){
		printf("Ԫ��%d��",i+1); scanf("%d",&v[i]);
	}
	
	rev_intary(v,NUMBER);
	
	printf("���������ˡ�\n");
	for(i=0;i<NUMBER;i++){
		printf("Ԫ��%d��%d\n",i+1,v[i]);
	}
	
	return 0;
} 
