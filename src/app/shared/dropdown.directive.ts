import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{

    @HostBinding('class.open') isOpen = false;
    constructor(private el: ElementRef){}

    @HostListener('click') onClick(){
        this.isOpen = !this.isOpen;
    }

}