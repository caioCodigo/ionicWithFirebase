import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';


import { Item } from '../../models/item/item.module';
import { ContactPage } from '../contact/contact';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$:Observable<Item[]>;

  constructor(public navCtrl: NavController,private shopping:ShoppingListService, public navParams:NavParams) {
   
    this.shoppingList$ = this.shopping
    .getList() // DB list
    .snapshotChanges()
    .map(changes => {
        return changes.map(c => ({
          key : c.payload.key, 
          ...c.payload.val(),
        }));
      });
      
  }
  
  navegar(){
    this.navCtrl.push(AboutPage); 
  }

  editar(item){
    this.navCtrl.push(ContactPage,{item});
  }

  

}
