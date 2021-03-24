//对文件中的字符进行统计并整理
//李长泉
//3.18 
#include<stdio.h>
void Task1(void);
void Task2(void);
void Task3(void);
int judge(char ch);//此函数用来判断是哪一种类型 
void Print(int capital[],int lowercase[]);
int main(void)
{
	int task;
	scanf("%d",&task);
	switch(task)
	{
		case 1:
			Task1();
			break;
		case 2:
			Task2();
			break;
		case 3: 
			Task3();
			break;
		default:
			break;
	}
	return 0;
}
void Task1(void)
{
	FILE *fp;
	char ch;
	int capital=0,lowercase=0,digit=0,others=0,type;
	fp=fopen("dict.dic","r");
	ch=fgetc(fp);
	while( ch != EOF )
	{
		type=judge(ch);
		switch (type)
		{
			case 1:
				capital++;
				break; 
			case 2:
				lowercase++;
				break;
			case 3:
				digit++;
				break;
			case 4:
				others++;
				break;
		}
		ch=fgetc(fp);
	}
	 printf("Task1:\n"
			"capital: %d\n"
			"lowercase: %d\n"
			"digit: %d\n"
			"others: %d\n",capital,lowercase,digit,others);
	fclose(fp);
}
int judge(char ch)
{
	if( ch >='A' && ch <= 'Z' )
	return 1;
	else if( ch >= 'a' && ch <= 'z' )
	return 2;
	else if( ch >= '0' && ch <= '9' )
	return 3;
	else
	return 4;
}
void Task2(void)
{
	FILE *fp;
	char ch;
	int max=0,min=1e8,count=0,sum=0;//count代表每行的个数，sum是总行数 
	fp=fopen("dict.dic","r");
	ch=fgetc(fp);
	while( ch != EOF )
	{
		if( ch == '\n' )
		{
			if( count > max ) max=count;
			if( count < min ) min=count;
			sum++;
			count=0;
		}
		else
		{
			count++;
		}
		ch=fgetc(fp);
	}
	if( count > max ) max=count;
	if( count < min ) min=count;
	sum++;
	 printf("Task2:\n" 
			"line: %d\n"
			"%d characters in max line.\n"
			"%d characters in min line.\n",sum,max,min); 
	fclose(fp);
}
void Task3(void)
{
	int capital[26],lowercase[26],i,j,k;//i,j,k充当数组下标 
	char ch;
	FILE *fp=fopen("dict.dic","r");
	for( i=0;i<26;i++ )
	{
		capital[i]=0;
		lowercase[i]=0;
	}
	ch=fgetc(fp);
	while( ch != EOF )
	{
		if( ch >= 'A' && ch <= 'Z' )
		{
			j=ch-'A'; 
			capital[j]++;
		}
		else if( ch >= 'a' && ch <= 'z' )
		{
			k=ch-'a';
			lowercase[k]++;
		}
		ch=fgetc(fp);
	}
	printf("Task3:\n");
	Print(capital,lowercase);
	fclose(fp);
}
void Print(int capital[],int lowercase[])
{
	int i,j;
	char ch;
	printf("CAPITAL:\n");
	ch='A';
	for( i=0;i<26;i++ )
	{
		printf("%c:%d\n",ch,capital[i]);
		ch++;
	}
	printf("LOWERCASE:\n");
	ch='a';
	for( i=0;i<26;i++ )
	{
		printf("%c:%d\n",ch,lowercase[i]);
		ch++;
	}
}
