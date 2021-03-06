import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValueService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  onDataAdd = new EventEmitter();
  dimension: number = undefined;
  isError: boolean = false;
  size: number = 0; // 1S, 2M, 3L , 0:error
  type:string=''
  constructor(private _router: Router,
    private formValueService: FormValueService) { }

  ngOnInit(): void {

  }

  submit() {
    this.type=this.formValueService.type;
 if(this.type==="cap"){
      this.size = this.dimension >= 45 && this.dimension <= 50 ? 1 :
      (this.dimension > 50 && this.dimension <= 55 ? 2 :
        (this.dimension > 55 && this.dimension < 60 ? 3 : 0));
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
