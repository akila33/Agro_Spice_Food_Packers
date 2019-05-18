import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: any;

  constructor(
    private data: DataService,
    private rest: RestApiService
  ) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:3030/api/recipes'
      );
      data['success']
        ? (this.recipes = data['recipes'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
