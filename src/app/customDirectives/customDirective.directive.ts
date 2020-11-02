import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[customDirective]'
})

export class customDirective implements OnInit {

    //another way to access and modify properites of elements is hostbinding...
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    
    // Two ways to modify an html element,
    // the second is better as it works in all cases,
    // The first is good enough if your website is only going to open in the browser.

    //First method
    // constructor(private elementRef: ElementRef){

    // }
    // ngOnInit(){
    //     this.elementRef.nativeElement.style.backgroundColor = 'green';
    // }

    //second method
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue');
    }
    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent');
    }
}