#include <stdio.h>
#include <math.h>

float length(float sqr){
	return sqrt(sqr);
} 

int main(void){
	float sqr;

	printf("请输入正方形的面积：");scanf("%f",&sqr);
	printf("该正方形的边长为%f：",length(sqr));
}
