#include<stdio.h>
#define num 128

int str_char(const char s[], int c) {
    int i,cnt=0;
    for (i = 0; i < num; i++) {
        if (*s++ == 'c') {
            cnt++;
        }
    }
    return cnt;
    
}

int main() {
    char c = 'c';
    char x[num];
    printf("ÇëÊäÈë×Ö·û´®:");
    scanf("%s", x);

    printf("%s", x);
    putchar('\n');
    printf("%d", str_char(x, c));
    
}
