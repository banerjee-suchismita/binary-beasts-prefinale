import { Component, OnInit } from '@angular/core';
import { FormValueService } from 'src/app/services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  // type
  type: string;

  // type of product's data
  selectedType: any;

  // the searched keyword
  searched_value: string;

  showCatalog:boolean=false;

  constructor(private formValueService: FormValueService) {
    // this.searched_value=''
  }

  ngOnInit(): void {
    // fetching the searched_value from the landing component
    this.searched_value = this.formValueService.searched_value;
    var catagories=['hats' ,'caps' ,'hat' ,'cap','plants' ,'plant','shirts' ,'shirt' ,'tshirt' ,'t-shirt' ,'top' ,'tshirts' ,'t-shirts' ,'tee','frame' ,'photo frame' ,'picture frame' ,'frames' ,'frame set'
  ];
    if(catagories.indexOf(this.searched_value)>=0){
      this.showCatalog=true;
    }
    // fetching the type of the product
    this.type = this.formValueService.type;

    // fetching data based on product type
    if (this.type === 'cap') {
      this.selectedType = this.formValueService.cap;
      console.log(this.type)
      console.log(this.selectedType)
    } else if (this.type === 'plants') {
      this.selectedType = this.formValueService.plant;
      console.log(this.selectedType.name);
    }else if (this.type === 'frame') {
      this.selectedType = this.formValueService.frame;
      console.log(this.selectedType.name);
    }else if (this.type === 'shirt') {
      this.selectedType = this.formValueService.shirt;
      console.log(this.selectedType.name);
    }
  }

  // setting the product ID
  setProductId(id: string) {
    this.formValueService.changeID(id);
  }
}
