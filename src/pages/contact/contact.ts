import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.module';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { HomePage } from '../home/home';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  item:Item;
  public itens;

  shoppingList$:Observable<Item[]>;


  constructor(public navCtrl: NavController, public navParams:NavParams, private shopping:ShoppingListService) {
    this.initializeItem();
  }
  ionViewWillLoad(){
    this.item = this.navParams.get('item');
    console.log(this.navParams.get('item'));
  }
 


  saveItem(item:Item){
    this.shopping.editItem(item).then(()=>{
      this.navCtrl.setRoot(HomePage);
    })
  }

  deleteItem(item:Item){
    this.shopping.removeItem(item).then(()=>{
      this.navCtrl.setRoot(HomePage);
    })
  }

  initializeItem(){
    this.itens = this.item;
        
  }
  getItems(ev: any) {
    
    this.initializeItem();

    const val = ev.target.value;

    

    
  }
}

