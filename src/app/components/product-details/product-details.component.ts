import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormValueService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product_id: string;
  product: any;
  type: string;
  selectedType: any;
  product_name: string;
  product_price: string;
  showContent: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private formValueService: FormValueService,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //fetching the product id from
    this.product_id = this.formValueService.product_id;

    // fetching the type of the product
    this.type = this.formValueService.type;

    // fetching data based on product type
    if (this.type === 'cap') {
      this.selectedType = this.formValueService.cap;
    } else if (this.type === 'plants') {
      this.selectedType = this.formValueService.plant;
    }else if (this.type === 'frame') {
      this.selectedType = this.formValueService.frame;
    }else if (this.type === 'shirt') {
      this.selectedType = this.formValueService.shirt;
    }

    if (this.selectedType) {
      // setting the product
      this.selectedType.products.forEach((element) => {
        if (element.id == this.product_id) {
          this.product = element;
        }
      });
      this.product_name = this.product.name;
      this.product_price = this.product.price;
      this.showContent = true;
    }
  }

  // Snackbar for Wishlist
  openWishlistSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Snackbar for Cart
  openCartSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['snackbar'],
    });
  }

  openDialog() {
    if(this.type=='plants'||this.type==='frame'){
      this._router.navigateByUrl('/ar-vr');
    }
    else if(this.type=="cap"){
      console.log('open')
      const dialog_ref = this.dialog.open(DialogComponent,{
        width: '400px'
      });
      dialog_ref.componentInstance.onDataAdd.subscribe(() => {
        this.dialog.closeAll();
      });
    }    else if(this.type=="shirt"){
      console.log('open')
      const dialog_ref = this.dialog.open(Dialog1Component,{
        width: '400px'
      });
      dialog_ref.componentInstance.onDataAdd.subscribe(() => {
        this.dialog.closeAll();
      });
    }

  }

  closeDialog(){
    this.dialog.closeAll();
  }

}
