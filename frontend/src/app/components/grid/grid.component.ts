import { Component, OnInit } from '@angular/core';
import { GridService } from '../../services/grid/grid.service';
import { CommunicationService } from '../../services/communication/communication.service';
import { Observable, interval, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  grid$: Observable<string[][]> | undefined;

  constructor(
    private gridService: GridService,
    private communicationService: CommunicationService
  ) {}

  ngOnInit(): void {}

  generateGrid(character?: string): void {
    const timer$ = interval(2000);

    this.grid$ = timer$.pipe(
      switchMap(() => {
        return this.gridService.getGrid(character);
      }),
      map((data) => {
        this.sendDataToGenerator(data.liveCode, true);
        return data.grid.coordinates;
      })
    );
  }

  generateDefaultGrid(): string[][] {
    return Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => '')
    );
  }

  sendDataToGenerator(code: number, isLive: boolean) {
    this.communicationService.sendDataFromChild({ code, isLive });
  }
}
