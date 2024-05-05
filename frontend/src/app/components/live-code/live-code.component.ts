import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrl: './live-code.component.scss',
})
export class LiveCodeComponent implements OnInit {
  liveCode: number | undefined;
  isLive: boolean = false;
  ngOnInit(): void {}

  setLive(code: number, isLive: boolean) {
    this.liveCode = code;
    this.isLive = isLive;
  }
}
