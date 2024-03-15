import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, JsonPipe],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  apiService=inject(ApiService)

ngOnInit(): void {
 
}

}
