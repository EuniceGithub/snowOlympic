#include <stdio.h>
#define NUMBER	5
int rev_intary(int v2[],int n){
	int i;
	for(i=0;i<n/2-1;i++){
		int temp=v2[i];
		v2[i]=v2[n-1-i];
		v2[n-1-i]=temp;
	}
	
}
int intary_rcpy(int v1[],const int v2[],int n){
	int i;
	for(i=0;i<n;i++){
		v1[i]=v2[i];
	}
	
}

int main(void){
	int i;
	int v2[NUMBER];
	int v1[NUMBER];
	int n;
	
	printf("请输入%d个元素的值：\n",NUMBER);
	for(i=0;i<NUMBER;i++){
		printf("元素%d：",i+1); scanf("%d",&v2[i]);
	}
	
	rev_intary(v2,NUMBER);
	intary_rcpy(v1,v2,NUMBER);
	
	printf("倒序排列了。\n");
	for(i=0;i<NUMBER;i++){
		printf("元素%d：%d\n",i+1,v1[i]);
	}
	
	return 0;
} 
