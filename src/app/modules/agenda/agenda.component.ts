import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css', '../../shared/css/header-views.css']
})
export class AgendaComponent {
  date: String = new Date().toISOString().split('T')[0];
}
