#include <stdio.h>

unsigned set( unsigned x, int pos)
{
    unsigned i=1;

    return (x | (i<<pos));
}

unsigned reset( unsigned x, int pos)
{
    unsigned i=1;

    return (x & ~(i<<pos));
}

unsigned inverse( unsigned x, int pos)
{
    unsigned i=1;

    return (x ^ (i<<pos));
}

int main(void)
{
	unsigned x,pos;

    printf("������������x��");
	scanf("%u",&x);
	printf("������λ��pos��");
	scanf("%u",&pos);

    printf("\n��%uλ��Ϊ1��%u\n",pos,set(x,pos));
    printf("��%uλ��Ϊ0��%u\n",pos,reset(x,pos));
    printf("��%uλȡ����%u\n",pos,inverse(x,pos));

    return 0;
}


