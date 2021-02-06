import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempview2',
  templateUrl: './tempview2.component.html',
  styleUrls: ['./tempview2.component.css']
})
export class Tempview2Component implements OnInit {

  @ContentChild('headerContent', {static:true})
  header:ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    console.log('app-tempview2', this.header);
  }

}
