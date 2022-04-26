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

    printf("请输入正整数x：");
	scanf("%u",&x);
	printf("请输入位数pos：");
	scanf("%u",&pos);

    printf("\n第%u位设为1：%u\n",pos,set(x,pos));
    printf("第%u位设为0：%u\n",pos,reset(x,pos));
    printf("第%u位取反：%u\n",pos,inverse(x,pos));

    return 0;
}


