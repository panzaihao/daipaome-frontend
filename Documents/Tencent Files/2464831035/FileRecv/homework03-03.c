#include<stdio.h>
#include<stdlib.h>
#define STOP 1
#define SKIP 0
//find the beginning row
void findStartRow(FILE* fp,int input,int data[],int elementsize,char* currentCh);
//skip all the comments and print only the valid part
void skipComments(FILE* fp,char* currentChptr,int* countRow);
//skip the single row comments
void skipToNextNote(FILE* fp,char* currentChptr,int* countRow);
//skip the multi row comments
void skipToNextLine(FILE* fp,char* currentChptr,int* countRow);
int main()
{
	FILE *fp;
	char currentCh,tmpCh;
	int rowNum[6],i,countRow=0;
	int input;
	int state=SKIP;
	rowNum[0]=5;
	if((fp=fopen("dict.dic","r"))==NULL)
	{
		printf("the file could not be opened..\n");
		exit(0);
	}
	for(i=1;i<=5;i++)
		fscanf(fp,"%d\n",&rowNum[i]);
	//input the number
	scanf("%d",&input);
	//find the beginning row
	findStartRow(fp,input,rowNum,5,&currentCh);
	//skip all the comments in the setting area
	while(countRow<rowNum[input]-rowNum[input-1]&&!feof(fp))
		skipComments(fp,&currentCh,&countRow);
	//close file
	fclose(fp);
	return 0;
}
void findStartRow(FILE* fp,int input,int data[],int elementsize,char* currentCh)
{
	int countRow=0;
	*currentCh=fgetc(fp);
	//to move to the beginning row(-5 is necessary)
	while(countRow<data[input-1]-5)
		{
			if(*currentCh=='\n')
				countRow++;
			
			*currentCh=fgetc(fp);
		}
}
void skipComments(FILE* fp,char* currentChptr,int* countRow)
{
	int state=SKIP;//initiate state to SKIP to enter the loop
	while((*currentChptr)=='/'&&state==SKIP)
		{
			(*currentChptr)=fgetc(fp);
			if((*currentChptr)=='/')
				skipToNextLine(fp,currentChptr,countRow);
			else if((*currentChptr)=='*')
				skipToNextNote(fp,currentChptr,countRow);
			else
			{
				printf("%c",'/');//if it's not a comment note then print '/'
				state=STOP;
			}
				
		}
		//if current char is \n then countRow++
		if((*currentChptr)=='\n')
			(*countRow)++;
			
		//print the char
		printf("%c",(*currentChptr));
		//move to the next position and initiate state to SKIP	
		(*currentChptr)=fgetc(fp);
		state=SKIP;
}
void skipToNextLine(FILE* fp,char* currentChptr,int* countRow)
{
	*currentChptr=fgetc(fp);
	//stop when reach \n or EOF note
	while(*currentChptr!='\n'&&*currentChptr!=EOF)
		*currentChptr=fgetc(fp);
}
void skipToNextNote(FILE* fp,char* currentChptr,int* countRow)
{
	*currentChptr=fgetc(fp);
	int state=0;//initiate state
	//if find */ of EOF then stop
	while(*currentChptr!=EOF&&state!=2)
	{
		if(*currentChptr=='\n')
			(*countRow)++;
		if(*currentChptr=='/'&&state==1)
			state++;
		if(state==1)
			state=0;//if state keeps the value of 1 then change it back to 0
		if(*currentChptr=='*')
			state++;	
		
		*currentChptr=fgetc(fp);
	}
}
