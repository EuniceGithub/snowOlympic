#include <stdio.h>
#include <math.h>

float length(float sqr){
	return sqrt(sqr);
} 

int main(void){
	float sqr;

	printf("�����������ε������");scanf("%f",&sqr);
	printf("�������εı߳�Ϊ%f��",length(sqr));
}
