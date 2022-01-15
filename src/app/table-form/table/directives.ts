import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[caption]",
})
export class CaptionDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}
  @HostListener("mouseenter") onMouseEnter(): void {
    this.render.addClass(this.el.nativeElement, "caption");
  }
  @HostListener("mouseleave") onMouseLeave(): void {
    this.render.removeClass(this.el.nativeElement, "caption");
  }
}

@Directive({
  selector: "[date]",
})
export class DateDirective {
  @Input() value: string = "";
  val!: string;
  constructor(private el: ElementRef) {}
  @HostListener("mouseenter") onMouseEnter(): void {
    this.val = this.value;
    this.el.nativeElement.placeholder = "Month dd, yyyy";
  }
  @HostListener("mouseleave") onMouseLeave(): void {
    this.el.nativeElement.placeholder = this.val;
  }
}
