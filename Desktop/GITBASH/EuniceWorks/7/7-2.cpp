#include <stdio.h>

int main() {
    unsigned int number;
    int x;
    int i;
    int number1;
    
    printf("�������ʼֵ:" );scanf("%d", &number);
    number1 = number;
    
    printf("���ƶ���λ:");scanf("%d", &x);
    number <<= x;
    printf("���ƺ��ֵ:%d",number);
    putchar('\n');
    
    for (i = 0; i < x; i++) {
        number1 *= 2;
    }
    printf("����2��ָ���ݵ�ֵ:%d", number1);

}
