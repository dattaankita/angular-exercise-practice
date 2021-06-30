import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterViewInit {
  @Input('srvElement')
  element!: { type: string; name: string; content: string; };
  
  @ViewChild('heading')
  header!: ElementRef;

  @ContentChild('contentParagraph')
  para!: ElementRef;

  constructor() {  }

  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log(this.para.nativeElement.textContent);
  }

}
