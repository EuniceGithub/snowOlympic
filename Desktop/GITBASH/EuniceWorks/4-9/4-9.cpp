#include <stdio.h>

int main(void)
{
    int no;
    
    printf("ÕýÕûÊý£º");
    scanf("%d",&no);

    if(no>=2){
        do{
        	no-=2;
    	    putchar('+');
    	    putchar('-');
    	}while(no>=2);
    	while(no==1){
    	    putchar('+');
    	    no-=1;
        } 
    }
    else if(no==1)
        putchar('+');

	return 0;      
} 
