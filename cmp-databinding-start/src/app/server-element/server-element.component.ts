import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input('srvElement')
  element!: { type: string; name: string; content: string; };
  
  @ViewChild('heading')
  header!: ElementRef;

  constructor() {  }

  ngOnInit(): void {
    console.log(this.header);
  }

  ngAfterViewInit(){
    console.log(this.header);
  }

}
