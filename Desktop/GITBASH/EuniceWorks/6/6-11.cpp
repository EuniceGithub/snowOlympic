#include <stdio.h>
#define NUMBER 5
int search_idx(const int v[],int idx[],int key,int n){
	int i;
	int m=0;
	
	for(i=0;i<n;i++){
			if(v[i]==key){
			idx[m]=v[i];
			m++;
			}
	}
	return m;
} 
int main(void){
	int i;
	int v[NUMBER];
	int idx[NUMBER];
	int key;
	
	printf("������%d��Ԫ�ص�ֵ��\n",NUMBER);
	for(i=0;i<NUMBER;i++){
		printf("Ԫ��%d��",i+1); scanf("%d",&v[i]);
	}
	printf("������Ҫ���ҵ�Ԫ�أ�\n"); scanf("%d",&key);	
	
	printf("һ���ҵ�Ԫ��%d����\n",search_idx(v,idx,key,NUMBER)); 	
	
} 
