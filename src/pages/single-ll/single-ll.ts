import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SLL } from '../../models/ll'
/**
 * Generated class for the SingleLlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-ll',
  templateUrl: 'single-ll.html',
})
export class SingleLlPage {
  linked_list ;
  cards : Array<any>;
  data : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.linked_list = new SLL(null);
      this.cards = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleLlPage');
  }
  
    updateCards()
    {
        
    }
  deleteNode(event, item)
  {
      console.log("Delete node Called : " + event + " " + item)
  }
    
  printnodes(){
      let current = this.linked_list;
      let tempCards : Array<any> = [];
      while(current != null ){
          console.log ("Print node elem =  " + current.elem)
          tempCards.push(current.elem)
          current = current.next;
      }
      
      this.cards = tempCards;
      
  }
  
  addNode() {
      let temp = new SLL(this.data)
      let current = this.linked_list;

      if(this.linked_list.elem == null){
          this.linked_list = temp;
          console.log ("First node elem =  " + this.linked_list.elem)
          return;
      }
      
      while (current.next != null){
          current = current.next;
      }
      current.next = temp;
      this.cards.push(current.elem)
      this.printnodes();
  }

    
}
