#include<stdio.h>
#include<string.h>
#define num 128

void put_stringr(const char s[]) {
    int g = strlen(s);
    int i;
    char m[num];
    for (i = 0; i < g; i++) {
        m[i] = s[g -i- 1];
        putchar(m[i]);
    }
    

}
int main() {
    
    char x[num];
    printf("�������ַ���:");
    scanf("%s", x);
    printf("%s", x);
    putchar('\n');
    put_stringr(x);

    
}
