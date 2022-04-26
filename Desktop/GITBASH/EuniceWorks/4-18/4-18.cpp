#include <stdio.h>

int main(void)
{
	int n,i;
	
	printf("显示多少个*：");
	scanf("%d",&n);
		
	for(i=1;i<=n;i++){
		putchar('*');		

		if(i%5==0){
		  puts("\n");
		}  
	}	
    return 0;		
}
