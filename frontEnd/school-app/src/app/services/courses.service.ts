import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageResponse } from '../model/page-response';
import { Course } from '../model/course';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private http:HttpClient) { }

  // http://localhost:8082/courses/all-courses?page=0&size=5
  // public getCourseList(page:number, size:number):Observable<Course[]>{
  //   return this.http.get<GetResponse>(`${environment.backendHost}/courses/all-courses?page=${page}&size=${size}`).pipe(
  //     map(response => response.content)
  //   )
  // }

   // http://localhost:8082/courses/all-courses?page=0&size=5
   public getCourseListPagination(page:number, size:number):Observable<GetResponse>{
    return this.http.get<GetResponse>(`${environment.backendHost}/courses/all-courses?page=${page}&size=${size}`).pipe(
      map(response => response)
    )
  }


  // http://localhost:8082/courses/search?keyword=co&page=0&size=5
  public searchCourses(keyword:string, page:number, size:number):Observable<GetResponse>{
    return this.http.get<GetResponse>(`${environment.backendHost}/courses/search?keyword=${keyword}&page=${page}&size=${size}`).pipe(
      map(response => response)
    )
  }


  // http://localhost:8082/courses/delete/{courseId}
  public deleteCourse(courseId: number){
    return this.http.delete(`${environment.backendHost}/courses/delete/${courseId}`);
  }




}

interface GetResponse{
  content: Course[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}

