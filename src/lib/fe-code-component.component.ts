import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'fe-code-component',
  template: ` <div #script class="component component-code"></div> `,
  styles: [],
})
export class FeCodeComponentComponent implements AfterViewInit {
  @Input() async = true;
  @Input() declare src: string;
  @ViewChild('script') declare script: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    const script: HTMLScriptElement = this.renderer2.createElement('script');

    script.type = 'text/javascript';
    script.text = this.src;
    script.async = this.async;

    this.renderer2.appendChild(this.script.nativeElement, script);
  }
}
