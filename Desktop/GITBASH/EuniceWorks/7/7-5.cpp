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

    printf("请输入正整数x：");
	scanf("%u",&x);
	printf("请输入位数pos：");
	scanf("%u",&pos);
	printf("请输入位移位数n：");
	scanf("%u",&n);

    printf("\n第%u位开始的n位设为1：%u\n",pos,set(x,pos,n));
    printf("第%u位开始的n位设为0：%u\n",pos,reset(x,pos,n));
    printf("第%u位开始的n位取反：%u\n",pos,inverse(x,pos,n));

    return 0;
}

