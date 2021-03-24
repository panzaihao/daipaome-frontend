#include<stdio.h>
#include<stdlib.h>
#include<string.h>
struct linklist{
	int num;
	struct linklist* next; 
};
typedef struct linklist node;
int judge(node *head1,node *head2);
node *create();
void freelist(node *head);
int length;
int main(){
	node *head1,*head2;
	int m,n,i;
	head1=create();
	m=length;
	length=0;
	head2=create();
	n=length;
	if(n>m)
	{
		i=0;
	}
	else i=judge(head1,head2);
	if(i==1)
	{
		printf("ListB is the sub sequence of ListA.");
	}
	else	printf("ListB is not the sub sequence of ListA.");
	freelist(head1);
	freelist(head2); 
	return 0;
}
node *create(){
	node *head=NULL,*current=NULL;
	int n;
	scanf("%d",&n);
	while(n!=-1){
		if(head==NULL){
			head=(node *)malloc(sizeof(node));
			current=head;
			current->num =n;
			current->next =NULL;
			length++;
		}
		else
		{
			current->next=(node *)malloc(sizeof(node));
			current=current->next ;
			current->num =n;
			current->next =NULL;
			length++;
		}
		scanf("%d",&n);
	}
	return head;
}
int judge(node *head1,node *head2)
{
	node *current1,*current2,*p,*q;
	for(p=head1;p!=NULL;p=p->next )
	{
		current1=p;
		for(q=head2;q!=NULL;q=q->next )
		{
			if(current1->num==q->num )
			{
				if(current1->next !=NULL)
					current1=current1->next ; 
				if(q->next ==NULL)
				{
					return 1;
				}
			}
			else break;
		}
	}
	return 0;
 } 
void freelist(node *head)
{
	node *current=head;
	while(current->next !=NULL)
	{
		current=head;
		head=current->next ;
		free(current);
	}
}
