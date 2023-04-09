import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { Course } from 'src/app/model/course';
import { PageResponse } from 'src/app/model/page-response';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  searchFormGroup!: FormGroup;
  courses: Course[] = [];

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  searchMode: boolean = false;
  previousKeyword: string | null | undefined;


  constructor(private courseService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.listCourses();
    })
  }



  listCourses(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      this.handleSearchCourses();
    }
    else{
      this.handleListCourses();
    }
    }


  handleListCourses(){
    this.courseService.getCourseListPagination(this.thePageNumber - 1, this.thePageSize).subscribe({
      next: response =>{
        this.courses = response.content;
        this.thePageNumber = response.number + 1;
        this.thePageSize = response.size;
        this.theTotalElements = response.totalElements;
      },
      error: err =>{
        alert('there is an error occure ' + err.message)
      }
    })
  }




  doSearch(value:string){
    this.router.navigateByUrl(`courses/${value}`)
  }


  handleSearchCourses(){

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.courseService.searchCourses(theKeyword, this.thePageNumber - 1, this.thePageSize).subscribe({
      next: response =>{
        this.courses = response.content;
        this.thePageNumber = response.number + 1;
        this.thePageSize = response.size;
        this.theTotalElements = response.totalElements;
      },
      error: err =>{
        alert('there is an error occure ' + err.message)
      }
    })
  }






}
