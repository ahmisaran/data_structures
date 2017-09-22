/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
export class SLL {
    private elem;
    private next;

    constructor(elem) {
        this.elem = elem;
        this.next = null;
        console.log("this.elem = " + elem);
    }
}

export class DLL {
    private elem;
    private next;
    private previous;

    constructor(elem) {
        this.elem = elem;
        this.next = null;
        this.previous = null;
        console.log("this.elem = " + elem);
    }
}


