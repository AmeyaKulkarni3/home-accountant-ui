import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../auth/models/category.model';
import { environment } from '../../../environment/environment.development';
import { ApiResponse } from '../auth/models/api-response';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private readonly http = inject(HttpClient);

  getCategories() {
    return this.http.get<ApiResponse<Category[]>>(`${environment.apiUrl}/categories`)
      .pipe(
        map(response => response.data)
      );
  }
}
