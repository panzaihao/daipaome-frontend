#include<stdio.h>
#include<string.h>
#define MAX 10001
void change(char *data,int size);
void outputChange(char *data,int size);
int main(){
	char sentence[MAX];
	int len;
	gets(sentence);
	len=strlen(sentence);
	change(sentence,len);
	//;
	outputChange(sentence,len);
	return 0;
}
void change(char *data,int size){
	int state,count;
	state=0;
	count=0;
	while(*data!='\0'&&count<size){
		if(*data<='Z'&&*data>='A'){
			state=1;
		}
		else if(*data<='z'&&*data>='a'){
			state=1;
		}
		if(state==1&&*data==' '){
			*data='\0';
			state=0;
		}
		data++;
		count++;
	}
		
}
void outputChange(char *data,int size){
	int count;
	count=0;
	while(count<size){
		if(*data=='\0'){
			printf("\n");
		}
		else{
			printf("%c",*data);
		} 
		data++;
		count++;
	}
}

