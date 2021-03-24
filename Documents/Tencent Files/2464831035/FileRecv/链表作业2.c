#include<stdio.h>
#include<stdlib.h>
#include<string.h>
struct linklist{
	int num;
	struct linklist *next;
};
typedef struct linklist node;
void sort(node *head);
void freelist(node *head);
void print(node *head);
node *create();
int main()
{
	node *head=NULL,*current=NULL;
	int max,min,sum;
	head=create();
	sort(head);
	print(head);
	freelist(head);
	return 0;
} 
node *create()
{
	node *head,*current;
	head=(node *)malloc(sizeof(node));
	current=head;
	int n=1;
	current->num =n;
	scanf("%d",&n);
	while(n!=-1)
	{
		current->next=(node *)malloc(sizeof(node));
		current=current->next ;
		current->num =n;
		current->next =NULL;
		scanf("%d",&n);
	}
	return head;
}
void sort(node *head)
{
   	node *pre,*p,*end;
    end=NULL;
    while (head->next!=end)
    {
        pre=head;
        p=head->next;
        while (p->next!=end)
        {
            if (p->num> p->next->num)
            {
                pre->next=p->next;
                p->next=pre->next->next;
                pre->next->next=p;
            }
            else
            {
            	p=p->next;
			}
            pre=pre->next;
        }
        end=p;
    }
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
void print(node *head)
{
	node *current;
	if(head!=NULL)
	{
		printf("The new list is:%d",head->next->num );
	}
	current=head->next->next ;
	while(current!=NULL)
	{
		printf(" %d",current->num );
		current=current->next ;
	}
	printf("\n");
 } 
