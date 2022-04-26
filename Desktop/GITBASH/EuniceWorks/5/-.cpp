#include <stdio.h>

int main(void)
{
	int i,j,sum,selfsum;
	int tensu[6][2]={{70,80},{90,80},{75,85},{95,80},{75,76},{95,88}};
	
	sum=0;
	for(i=0;i<6;i++){
		sum+=tensu[i][0];
	}
	printf("语文总分：%d\n",sum);
	printf("语文平均分：%d\n",sum/6);
	sum=0;
	for(i=0;i<6;i++){
		sum+=tensu[i][1];
	}
	printf("数学总分：%d\n",sum);
	printf("数学平均分：%d\n",sum/6);
	
	for(j=0;j<6;j++){
		selfsum=0;
		selfsum+=tensu[j][0]+tensu[j][2];
		printf("学生%d的总分：%d\n",j+1,selfsum);
	}
	for(j=0;j<6;j++){
		selfsum=0;
		selfsum+=tensu[j][0]+tensu[j][2];
		printf("学生%d的平均分：%d\n",j+1,selfsum/2);
	}
	return 0;
}
