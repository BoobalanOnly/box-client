import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoxService } from '../box.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss',
})
export class BoxComponent {
  @Input() index!: number;
  @Input() id!: string | number;
  @Input() title!: string;
  @Output() delete: EventEmitter<boolean> = new EventEmitter();
  boxId: string = '';
  boxTitle: string = '';

  constructor(
    private _boxService: BoxService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.boxId = this._route.snapshot.params['id'];
  }
  ngOnInit() {
    if (this.boxId) this.getBox();
  }
  onDeleteBox() {
    this._boxService.deleteBox(this.id).subscribe({
      next: (response: any) => {
        if (response.status === true) this.delete.emit(true);
      },
    });
  }
  navigateToBox() {
    this._router.navigateByUrl('box/' + this.id);
  }
  getBox() {
    this._boxService.getBox(this.boxId).subscribe({
      next: (response: any) => {
        if (response?.status === true) {
          this.boxTitle = response.data?.title || '';
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  navigateBack() {
    this._router.navigateByUrl('');
  }
}
