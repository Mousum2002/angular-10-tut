import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'top-menu',
  imports: [CommonModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css',
})
export class TopMenu {
  topMenuItems:string[] = ['Help', 'Exchange & Returns', 'Order Tracker','SignUp / Login' ]


}
