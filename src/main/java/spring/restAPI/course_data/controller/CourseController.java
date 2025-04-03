package spring.restAPI.course_data.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.restAPI.course_data.entities.Course;
import spring.restAPI.course_data.services.CourseService;

@RestController
public class CourseController {
    @Autowired
    private CourseService courseService;
    @GetMapping("/home")
    public String home(){
        return "Welcome to Courses Application Homepage";
    }

    //get the courses
    @GetMapping("/courses")
    public List <Course> getCourses(){
        return this.courseService.getCourses();

    }

    //get a single course
    @GetMapping("/course/{courseId}")
    public Optional<Course> getCourse(@PathVariable String courseId){
        return this.courseService.getCourse(Long.parseLong(courseId));
    }
    // @GetMapping("/course/{courseId}")
    // public Course getCourse(@PathVariable String courseId){
    //     return this.courseService.getCourse(Long.parseLong(courseId));
    // }

    //add course
    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return this.courseService.addCourse(course);
    }

    @PutMapping("/course/{courseId}")
    public Course updateCourse(@RequestBody Course course){
        return this.courseService.updateCourse(course);
    }

    // @DeleteMapping("/course/{courseId}")
    // public void deleteCourse(@PathVariable String courseId){
    //     this.courseService.deleteCourse(Long.parseLong(courseId));
    // }
    @DeleteMapping("/course/{courseId}")
    public void deleteCourse(@PathVariable String courseId){
    this.courseService.deleteCourse(Long.parseLong(courseId));
    }

}
