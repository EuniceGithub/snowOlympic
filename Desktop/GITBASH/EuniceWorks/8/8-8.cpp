#include <stdio.h>
int gcd(int x,int y){
	int max;
	if(x>y){
		x-=y;
		max=gcd(x,y); 
	}
	else if(x<y){
		y-=x;
		max=gcd(x,y);
	}
	else if(x=y)
		max=x;
		
	return max;
} 
int main(void)
{
    int x, y;
    printf("x:");
    scanf("%d", &x);
    printf("y:");
    scanf("%d", &y);
    printf("x和y的最大公数为%d\n",gcd(x, y));
    
    return 0;
}
