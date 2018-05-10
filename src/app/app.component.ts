import { Component,AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
// implements AfterViewInit ,AfterContentInit,AfterContentChecked,AfterViewChecked{
{
  title = 'First APP';
  childtitles:string[]=
  ["Electronics Items","Stationaries","Sport Items"];
  things:string[][]=[
    ["RAM","Pendrive","Hard disk","Tablet","Keyboard"],
    ["Pen","Pencil","Paper","Eraser"],
    ["Bat","Ball","Gloves","Pad"]
  ]
  newItem:string;

  subscribedInfo(info,boxnumber):void{
    this.newItem=info;
    this.childtitles[boxnumber]="new title";
    this.things[boxnumber].push(info);
  }/*
  ngAfterViewInit(){
     console.log("View Init Running..!!!")
  }
  ngAfterContentInit(){
     console.log("Content Init running...!!!");
  }

  ngAfterContentChecked(){
    console.log("Content Checked...!!!");
  }*/
/*
  ngAfterViewChecked(){
    console.log("ViewChecked...!!")
  }*/
  


}
