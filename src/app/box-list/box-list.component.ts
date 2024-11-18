import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BoxService } from '../box.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-list',
  standalone: true,
  imports: [CommonModule, BoxComponent, FlexLayoutModule, FormsModule],
  templateUrl: './box-list.component.html',
  styleUrl: './box-list.component.scss',
})
export class BoxListComponent {
  boxes: any[] = [];
  title: string = 'hello';
  constructor(private _boxService: BoxService) {}
  ngOnInit() {
    this.getBoxList();
  }
  getBoxList() {
    this._boxService.getBoxes().subscribe({
      next: (response: any) => {
        if (response?.status === true) {
          this.boxes = response.data || [];
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onAddBox() {
    if (!this.title) {
      window.alert('Enter title!');
      return;
    }
    this._boxService.addBox(this.title).subscribe({
      next: (response: any) => {
        if (response?.status === true) {
          this.getBoxList();
          this.title = '';
        }
      },
    });
  }
  onDeleteBox() {
    this.getBoxList();
  }
}
