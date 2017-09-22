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
  reversed ;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.linked_list = new SLL(null);
      this.reversed = new SLL(null);
      this.cards = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleLlPage');
  }
  
  deleteNode(event, item)
  {
      let current = this.linked_list;
      let next = this.linked_list.next;
      
      if ( current.elem == item ){
          this.linked_list = next;
          this.printnodes(this.linked_list);
          if(this.cards.length == 0 )
          {
              this.linked_list = new SLL(null);
          }
          return;
      }
      while(current != null){
          if (next.elem == item){
              current.next = next.next;
              this.printnodes(this.linked_list);
              break;
          }
          current = next;
          next = next.next;
      }
  }
    
  printnodes(current){
      
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
          this.printnodes(this.linked_list);
          return;
      }
      
      while (current.next != null){
          current = current.next;
      }
      current.next = temp;
      
      this.printnodes(this.linked_list);
  }
  
  reverse(linked_list){
      let current = this.reversed;
      this.reverseFn(linked_list)
      current = this.reversed;
      while (current!=null){
          console.log("Reversed : " +  current.elem);
          current = current.next;
      }
      this.printnodes(this.reversed);
      this.linked_list = this.reversed;
  }
  
  reverseFn(linked_list){
      
      
      let current = this.reversed;
      if ( linked_list.next  === null)
      {
          console.log("First Element : " + linked_list.elem)
          this.reversed = new SLL(linked_list.elem)
          return ;
      }
      
      this.reverseFn(linked_list.next)

      
      current = this.reversed;
      while(current.next!=null){
          current = current.next;
      }
      current.next = new SLL(linked_list.elem);
      console.log("Next Element : " + current.elem)

      return ;
  }
  
  
    
}
