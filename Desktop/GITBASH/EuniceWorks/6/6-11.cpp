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
	
	printf("请输入%d个元素的值：\n",NUMBER);
	for(i=0;i<NUMBER;i++){
		printf("元素%d：",i+1); scanf("%d",&v[i]);
	}
	printf("请输入要查找的元素：\n"); scanf("%d",&key);	
	
	printf("一共找到元素%d个：\n",search_idx(v,idx,key,NUMBER)); 	
	
} 
