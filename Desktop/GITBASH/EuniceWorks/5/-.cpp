#include <stdio.h>

int main(void)
{
	int i,j,sum,selfsum;
	int tensu[6][2]={{70,80},{90,80},{75,85},{95,80},{75,76},{95,88}};
	
	sum=0;
	for(i=0;i<6;i++){
		sum+=tensu[i][0];
	}
	printf("�����ܷ֣�%d\n",sum);
	printf("����ƽ���֣�%d\n",sum/6);
	sum=0;
	for(i=0;i<6;i++){
		sum+=tensu[i][1];
	}
	printf("��ѧ�ܷ֣�%d\n",sum);
	printf("��ѧƽ���֣�%d\n",sum/6);
	
	for(j=0;j<6;j++){
		selfsum=0;
		selfsum+=tensu[j][0]+tensu[j][2];
		printf("ѧ��%d���ܷ֣�%d\n",j+1,selfsum);
	}
	for(j=0;j<6;j++){
		selfsum=0;
		selfsum+=tensu[j][0]+tensu[j][2];
		printf("ѧ��%d��ƽ���֣�%d\n",j+1,selfsum/2);
	}
	return 0;
}
