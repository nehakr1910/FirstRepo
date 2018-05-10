import { Component, OnInit ,Input,Output,EventEmitter,OnChanges} from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit//,OnChanges 
{
 @Input('title') info:string;
 @Input('things') items:string[];
 @Output('notify') notifyParent:EventEmitter<string>=new EventEmitter<string>();
 newone:string;

 box:string="redbox";
  constructor() { 
    console.log("constructor running!!!"+this.info);
  }

  ngOnInit() {
    console.log("on init running!!!"+this.info);
  }
  /*
  ngOnChanges(){
    console.log("values changed...!!!");
  }*/

  sendToParent():void{
    this.notifyParent.emit(this.newone);
  }

  

  update(x:number):void{
    if(x===1)
      this.box="redbox";
    else
      this.box="bluebox";
  }

}
