import { customElement } from 'aurelia-framework';

@customElement("widget")
export class Widget {
    
    constructor() {
    }

    elmt: HTMLCanvasElement;

    resize(data) {
        this.elmt.width = data.width;
        this.elmt.height = data.height;
    }
}
