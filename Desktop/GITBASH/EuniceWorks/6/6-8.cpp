#include <stdio.h>

#define NUMBER 5

int min_of(const int v[],int n)
{
	int i;
	int min=v[0];
	
	for(i=1;i<NUMBER;i++)
		if(v[i]<min);
			min=v[i];
	
	return min; 
}
int main(void)
{
	int i;
	int obj[NUMBER];
	int min;
	
	printf("������%d��Ԫ�ص�ֵ��\n",NUMBER);
	for(i=0;i<NUMBER;i++){
		printf("Ԫ��%d��",i+1); scanf("%d",&obj[i]);
	}
	
	min=min_of(obj,NUMBER);
	
	printf("��СֵΪ%d��",min);
	
	return 0; 
}
