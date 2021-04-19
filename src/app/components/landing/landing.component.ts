import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValueService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  searched_value: string = '';

  constructor(private formValueService: FormValueService, private _router: Router) {}

  ngOnInit(): void {}

  // setting the searhed_keyword value
  setSearchKey(): void {
    this.searched_value = this.searched_value.toLocaleLowerCase();
    this.formValueService.changeMessage(this.searched_value);
  }
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.setSearchKey();
      this._router.navigateByUrl('/catalog');
    }
  }
}
