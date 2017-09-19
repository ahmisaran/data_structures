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
          this.printnodes();
          if(this.cards.length == 0 )
          {
              this.linked_list = new SLL(null);
          }
          return;
      }
      while(current != null){
          if (next.elem == item){
              current.next = next.next;
              this.printnodes();
              break;
          }
          current = next;
          next = next.next;
      }
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
          this.printnodes();
          return;
      }
      
      while (current.next != null){
          current = current.next;
      }
      current.next = temp;
      this.cards.push(current.elem)
      this.printnodes();
  }
  
  reverse(linked_list){
      let current = this.reversed;
      this.reverseFn(linked_list, current)
      while (current!=null){
          console.log("Reversed : " +  current.elem);
          current = current.next;
      }
  }
  
  reverseFn(linked_list, current){
      
      let temp ;
      if ( linked_list.next  === null)
      {
          console.log("Next Element : " + linked_list.elem)
          temp = new SLL(linked_list.elem)
          current = temp;
          return 
      }
    //  console.log("Current Element : " + linked_list.elem)
      current.next = new SLL(null)
      this.reverseFn(linked_list.next, current.next)
      console.log("Next Element : " + linked_list.elem)
      temp = new SLL(linked_list.elem)
      current = temp
      return ;
  }
  
  
    
}
