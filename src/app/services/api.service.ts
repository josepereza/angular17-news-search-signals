import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { Article, News } from '../interfaces/news';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiData = ['jar', 'jaw', 'hip', 'hop'];
  constructor() {}
  http = inject(HttpClient);
  news$ = signal<Article[]>([]);

  searchQuery = signal<string | null>('general');

  /*  public newsall = toSignal(
    this.http
      .get(
        `https://newsapi.org/v2/everything?q=${this.searchQuery()}&sortBy=publishedAt&apiKey=a218bb3ebc6c411da9c8d4aead14537d`
      )
      .pipe(map((res: any) => res.articles))
  );  */

  listFiltered= computed(()=>{
     const filter=this.searchQuery();
     
    this.http
    .get<News>(
      `https://newsapi.org/v2/everything?q=${this.searchQuery()}&sortBy=publishedAt&apiKey=a218bb3ebc6c411da9c8d4aead14537d`
    )
    .subscribe((news) => {
      this.news$.set(news.articles);
    });
    return this.news$();
  })
  

  news = this.news$.asReadonly();
}
