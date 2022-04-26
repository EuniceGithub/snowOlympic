#include <stdio.h>
#define NUMBER 80
int  main(void)
{
    int i,j;
    int num;
    int tensu[NUMBER];
    int bunpu[11]={0};
    
    printf("请输入学生人数：");

    do{
        scanf("%d",&num);
        if(num<1||num>NUMBER){
            printf("\a请输入1~%d的数：",NUMBER);
        }
    }while(num<1||num>NUMBER);

    printf("请输入%d人的分数。\n",num);

    for(i=0;i<num;i++){
            printf("%d号：",i+1);
            do{
                scanf("%d",&tensu[i]);
                if(tensu[i]<0||tensu[i]>100){
                    printf("\a请输入0~100的数:");
                    printf("\a请输入0~100的数:");
                }
            }while(tensu[i]<0||tensu[i]>100);
            bunpu[tensu[i]/10]++;
    }

    puts("---分布图---");
    
    int max=bunpu[0];
	for(i=1;i<11;i++){
		max=(max>bunpu[i]?max:bunpu[i]);
	} 
	
	for(;max>0;max--){
		for(j=0;j<11;j++){
			if(bunpu[j]>=max)
				printf("*   ");
			else
				printf("    ");			
		}
		putchar('\n');
	}
	putchar('\n'); 
	puts("----------------------------------------");
	puts("0  10  20  30  40  50  60  70  80  90 100");
    
    return 0;
 }
  
