#include <stdio.h>

int main(void)
{
    int ch, i = 0;

    while ((ch=getchar())!=EOF) {
        if (ch == '\n')   
			i++;
    }
    printf("输入的行数为%d", i);

    return 0;

}
