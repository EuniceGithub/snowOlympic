#include <stdio.h>
#define NUMBER 5

void bsort(int a[],int n){
	int i,j;
	
	for(i=0;i<n-1;i++){
        for (j = n - 1; j > i; j--){
            if (a[j] > a[j - 1]){
                int temp = a[j];
                a[j] = a[j - 1];
                a[j - 1] = temp;
            }
        }
	}
} 
int main(void){
    int i;
    int v[NUMBER];
	
	printf("������%d�˵���ߡ�\n",NUMBER);
    for (i = 0; i < NUMBER; i++) {
        printf("%2d�ţ�", i+1);
        scanf("%d", &v[i]);
    }
    putchar('\n');

    bsort(v,NUMBER);
    for (i = 0; i < NUMBER; i++)
    {
        printf("%2d�ţ�%d\n", i+1,v[i]);
    }
}


