export class Model{
  user;
  items;
public sortByDataItem():void{
  this.items.sort((a: TodoItem, b:TodoItem)=>{
    return +new Date(a.data)- +new Date(b.data);
  });
}
  constructor(){
    this.user="Gilberto";
    this.items=[]
}}
export class TodoItem{
  action;
  done;
  priority;
  data: Date;
  constructor(action, done, priority, data){
    this.action=action;
    this.done=done;
    this.priority=priority;
    this.data=data;
  }
 
}
