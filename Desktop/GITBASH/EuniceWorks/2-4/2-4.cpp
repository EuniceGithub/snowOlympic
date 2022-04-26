#include <stdio.h>

int main(void)
{
	int x1=1,x2=2;
	double y1=1.0,y2=2.0;
    
	printf("n1=%d\n",x1+x2);
	printf("n2=%d\n",x1*x2);
	printf("n3=%d\n",x1-x2);
	printf("n4=%d\n\n",x1/x2);
	
	printf("d1=%f\n",y1+y2);
	printf("d2=%f\n",y1*y2);
	printf("d3=%f\n",y1-y2);
	printf("d4=%f\n\n",y1/y2);
	
	printf("t1=%f\n",x1+y2);
	printf("t2=%f\n",x1*y2);
	printf("t3=%f\n",x1-y2);
	printf("t4=%f\n",x1/y2);
	
	return 0;
}
 
