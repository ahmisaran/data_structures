import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DLL } from '../../models/ll'

/**
 * Generated class for the DoublyLlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doubly-ll',
  templateUrl: 'doubly-ll.html',
})
export class DoublyLlPage {
  data;
  dlinked_list;
  cards : Array<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.dlinked_list = new DLL(null)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoublyLlPage');
  }
  
  reverse(){
      let current = this.dlinked_list;
      let tempCards : Array<any> = [];
      while(current.next != null){
          current = current.next;
      }
      let last = current;
      
      while(last!=null){
          
          tempCards.push(last.elem);
          last = last.previous;
      }
      
      this.cards = tempCards;
  }
  
  addNode(){
      let temp = new DLL(this.data)
      let current = this.dlinked_list;
      let previous = null;
      if ( current.elem == null ){
          this.dlinked_list = temp;
          console.log("Added element at First node : " + this.dlinked_list.elem )
          this.printnodes();
          return;
      }
      
      previous = current ;
      while (current.next != null){
          
          
          current = current.next; 
          previous = current ;
          console.log("Previous Element While: " +  previous.elem)
      }
      console.log("Previous Element : " +  previous.elem)
      current.next = temp;
      current.next.previous = previous;
      console.log("current Element : " +  current.elem)
      console.log("Previous Element : " +  current.next.previous.elem)
      
      this.printnodes();
  }
  
  printnodes(){
      let current = this.dlinked_list;
      let tempCards : Array<any> = [];
      while(current!=null){
          console.log("Added Element to cards : " + current.elem);
          tempCards.push(current.elem)
          current = current.next;
          
          
      }
      this.cards=tempCards;
  }
  
  deleteNode(event, item){
      
  }

}
