#include <stdio.h>
unsigned set( unsigned x, int pos,int n)
{
    unsigned i=1;
	for ( ; n>0; n--) {
        i *= 2;
    }
    i=i-1;
    return (x | (i<<pos));
}

unsigned reset( unsigned x, int pos,int n)
{
    unsigned i=1;
	for ( ; n>0; n--) {
        i *= 2;
    }
    i=i-1;
    return (x & ~(i<<pos));
}

unsigned inverse( unsigned x, int pos,int n)
{
    unsigned i=1;
	for ( ; n>0; n--) {
        i *= 2;
    }
    return (x ^ (i<<pos));
}

int main(void)
{
	unsigned x;
	int pos,n;

    printf("������������x��");
	scanf("%u",&x);
	printf("������λ��pos��");
	scanf("%u",&pos);
	printf("������λ��λ��n��");
	scanf("%u",&n);

    printf("\n��%uλ��ʼ��nλ��Ϊ1��%u\n",pos,set(x,pos,n));
    printf("��%uλ��ʼ��nλ��Ϊ0��%u\n",pos,reset(x,pos,n));
    printf("��%uλ��ʼ��nλȡ����%u\n",pos,inverse(x,pos,n));

    return 0;
}

