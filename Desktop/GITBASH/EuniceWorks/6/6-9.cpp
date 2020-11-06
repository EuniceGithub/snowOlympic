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
	
	printf("请输入%d个元素的值：\n",NUMBER);
	for(i=0;i<NUMBER;i++){
		printf("元素%d：",i+1); scanf("%d",&v[i]);
	}
	
	rev_intary(v,NUMBER);
	
	printf("倒序排列了。\n");
	for(i=0;i<NUMBER;i++){
		printf("元素%d：%d\n",i+1,v[i]);
	}
	
	return 0;
} 
