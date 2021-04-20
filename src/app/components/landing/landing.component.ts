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

  constructor(private formValueService: FormValueService, private router: Router) {}

  ngOnInit(): void {}

  // setting the searhed_keyword value
  setSearchKey(): void {
    this.searched_value = this.searched_value.toLocaleLowerCase();
    this.formValueService.changeMessage(this.searched_value);
  }

  //enter key to search
  onKeyDownEvent(event: any) {
    this.searched_value = this.searched_value.toLocaleLowerCase();
    this.formValueService.changeMessage(this.searched_value);
    this.router.navigate(['/catalog']);
  }
}
