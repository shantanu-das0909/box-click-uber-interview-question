import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // you can change this array to manipulate the format of boxes
  BOX_SHAPE = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  CLICKED_BOX: number[][] = [];

  orderOfClick: number[][] = [];

  totalBox = 0;

  ngOnInit(): void {
    this.CLICKED_BOX = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.BOX_SHAPE.forEach((row) => {
      this.totalBox += row.filter((column) => column === 1).length;
    });
  }

  onBoxCLick(i: number, j: number) {
    this.CLICKED_BOX[i][j] = 1;
    this.orderOfClick.push([i, j]);

    if (this.orderOfClick.length === this.totalBox) {
      this.lastBoxCliecked();
    }
  }

  lastBoxCliecked() {
    const refreshId = setInterval(() => {
      if (this.orderOfClick.length === 0) {
        clearInterval(refreshId);
      }
      const tempClickedBox = this.orderOfClick.shift();
      this.CLICKED_BOX[tempClickedBox![0]][tempClickedBox![1]] = 0;
    }, 500);

    console.log(this.orderOfClick);
  }
}
