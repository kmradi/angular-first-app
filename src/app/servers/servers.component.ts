import { Component, OnInit } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'server not created'
  allowNewServer = false
  msgBgColor = "bg-warning";
  inputText = '';
  oddOrEven:number;
  isOddOrEven:string = '';
  // twoWayBindingText = 'default text';//not required to create
  twoWayBindingText = ''
  constructor() {
    // setTimeout(()=>{
    //   this.allowNewServer = true
    // },4000)
   }
   //for ngSwitch
   value = 15;

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'server created successfully: '+this.twoWayBindingText;
    this.msgBgColor = 'bg-success';
    this.twoWayBindingText = '';
  }
  onInput(event){
    this.inputText = event.target.value;
    // this.inputText = event.data //gives the current character
  }
  LocalRefOddEven(inputRef){
    if(inputRef.value%2==0)
      this.isOddOrEven = "even"
    else
      this.isOddOrEven = "odd"
  }
  pColor(){
    return 'red';
  }

}
