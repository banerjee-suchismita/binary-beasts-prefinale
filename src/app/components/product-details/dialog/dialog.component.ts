import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  onDataAdd = new EventEmitter();
  dimension:number=undefined;
  isError:boolean=false;
  size:number=0; // 1S, 2M, 3L , 4:error
  constructor(private _router: Router) { }

  ngOnInit(): void {
    
  }

  submit(){
    this.size=this.dimension>=45&&this.dimension<=50?1:
                  (this.dimension>50&&this.dimension<=55?2:
                      (this.dimension>55&&this.dimension<60?3:4));
    console.log(this.size, this.isError)
    if(this.size===4){
     this.isError=true;
    }
    else{
    this.onDataAdd.emit();
    this._router.navigateByUrl('/ar-vr');
    }
  }

}
