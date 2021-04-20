import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValueService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {
  onDataAdd = new EventEmitter;
  dimension: number = undefined;
  isError: boolean = false;
  size: number = 0; // 1S, 2M, 3L , 0:error
  type:string=''

  constructor(private _router: Router,
    private formValueService: FormValueService) { }

  ngOnInit(): void {
    
  }
submit(){
    this.type=this.formValueService.type;
    if(this.type==="shirt"){
      if(this.dimension>=85 && this.dimension<=95)
        this.size=1;
      else if(this.dimension>95 && this.dimension<=105)
      this.size=2;
      else if(this.dimension>105 &&this.dimension<=115)
      this.size=3;
    }
    console.log(this.size, this.isError)
    this.formValueService.setSize(this.size);
    if (this.size === 0) {
      this.isError = true;
    }
    else {
      this.onDataAdd.emit();
      this._router.navigateByUrl('/ar-vr');
    }
  }

}
