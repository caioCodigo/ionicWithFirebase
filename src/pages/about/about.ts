import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../models/item/item.module';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ThrowStmt } from '@angular/compiler';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  item : Item = {
    name:'',
    descricao : '',
    horario : ''
  };

  constructor(public navCtrl: NavController, private shopping:ShoppingListService) {

  }

  addItem(item:Item){
    this.shopping.addItem(item).then(
      ref => {
        console.log(ref.key);
        this.navCtrl.setRoot(HomePage, ref.key );
        
    });
  }
}
