import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit {

  @Input() images!: string[];
  @Input() interval!: number;

  currentIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.startImageSequence();
  }

  startImageSequence() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, this.interval);
  }

}
