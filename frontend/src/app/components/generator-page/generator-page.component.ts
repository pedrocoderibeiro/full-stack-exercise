import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { CommunicationService } from '../../services/communication/communication.service';
import { LiveCodeComponent } from '../live-code/live-code.component';

@Component({
  selector: 'app-generator-page',
  templateUrl: './generator-page.component.html',
  styleUrl: './generator-page.component.scss',
})
export class GeneratorPageComponent implements OnInit {
  characterInput: string = '';
  liveCode: number | undefined;
  isLive: boolean = false;
  @ViewChild(GridComponent) gridComponentChild!: GridComponent;
  @ViewChild(LiveCodeComponent) liveCodeComponentChild!: LiveCodeComponent;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {}

  generate() {
    if (/^[a-zA-Z]$/.test(this.characterInput)) {
      this.gridComponentChild.generateGrid(this.characterInput);
    } else {
      this.gridComponentChild.generateGrid(this.characterInput);
    }

    this.communicationService.child1Data$.subscribe((data) => {
      this.liveCode = data?.code;
      this.isLive = data?.isLive ?? false;
      this.sendLiveCode();
    });
  }

  sendLiveCode() {
    this.liveCodeComponentChild.setLive(this.liveCode!, this.isLive);
  }
}
