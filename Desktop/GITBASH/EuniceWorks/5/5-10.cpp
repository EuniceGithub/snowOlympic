#include <stdio.h>

int main(void){
	int i,j,k,m,n;
	int a[4][3],b[3][4],c[4][4];
	
	puts("������һ��4��3�еľ���");
	for(i=0;i<4;i++){
		for(j=0;j<3;j++){
			scanf("%d",&a[i][j]);
		}
		putchar('\n');
	} 
	puts("������һ��3��4�еľ���");
	for(i=0;i<3;i++){
		for(j=0;j<4;j++){
			scanf("%d",&b[i][j]);
		}
		putchar('\n');
	} 
	
	for(i=0;i<4;i++){
		for(k=0;k<4;k++){
			c[i][k]=0;
			for(j=0;j<4;j++){
				c[i][k]+=a[i][j]*b[j][k];
			}
		}
	} 
	
	puts("������������˵Ľ���ǣ�");
	for(m=0;m<4;m++){
		for(n=0;n<4;n++){
			printf("%5d",c[m][n]);
		} 
	 	printf("\n");
	} 
	
	
	return 0;
} 
