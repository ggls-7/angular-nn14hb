import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";
@Component({
  selector: "todo-app",
  templateUrl: "./app.component.html",
   styleUrls: [ './app.component.css' ]
  })
export class AppComponent  {
  model = new Model();
  ArrayDeNomes = new Array();
  ArrayDeDatas = new Array();
  ArrayDePrioridades = new Array();

 
  
  getTodoItems(){
    return this.model.items.filter( function (item){ return !item.done});
  }
  addItem(newItem, prioridade, data){ 
    if (newItem == ""){
      alert("É necessário que você digite uma tarefa")
    }
    if(data==""){
      alert("data invalida")
    }
    if(this.ArrayDeNomes.indexOf(newItem)  > -1 && this.ArrayDeDatas.indexOf(data) > -1 && this.ArrayDePrioridades.indexOf(prioridade) > -1){
    alert("A tarefa já foi adicionada, adicione uma nova")
    }
    if(newItem !="" && data!=""){
      if(this.ArrayDeNomes.indexOf(newItem) == -1 ||  this.ArrayDeDatas.indexOf(data) == -1 || this.ArrayDePrioridades.indexOf(prioridade) == -1){
          
          this.ArrayDeNomes.push(newItem);
          this.ArrayDeDatas.push(data);
          this.ArrayDePrioridades.push(prioridade);

          this.model.items.push(new TodoItem(newItem, false, prioridade, data));
        }
      }
    this.model.sortByDataItes();
  }
  getTodoItemsFeitos(){
    return this.model.items.filter(function (item){ return item.done});
   }
  apagarT( items) { 
    var num = this.model.items.indexOf(items);
    this.model.items.splice(num, 1)
  }
  alterarT(newT, priority, data, i){
   if(newT!=""){
      this.model.items[i].action =newT;
      this.model.items[i].priority = priority;
   }
   if(data!=""){
     this.model.items[i].priority = priority;
    this.model.items[i].data = data;
   }
    if(newT !="" && data!=""){
    this.model.items[i].action =newT;
    this.model.items[i].priority = priority;
    this.model.items[i].data = data;
      
    }
  }

  }