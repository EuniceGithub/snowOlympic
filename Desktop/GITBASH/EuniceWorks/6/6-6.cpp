#include <stdio.h>

void alret(int n){
	printf("\a");
}
int main(void){
	int n,i;
	printf("ÇëÊäÈëÏìÁå´ÎÊı£º");scanf("%d",&n);
	for(i=1;i<=n;i++){
		alret(n); 
	}
}
