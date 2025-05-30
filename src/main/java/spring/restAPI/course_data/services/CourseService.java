package spring.restAPI.course_data.services;

import java.util.List;
import java.util.Optional;

import spring.restAPI.course_data.entities.Course;

public interface CourseService {
    public List<Course> getCourses();
    
    public Optional<Course> getCourse(long courseId);

    // public getCourse(long courseId);

    public Course addCourse(Course course);

    public Course updateCourse(Course course);

    public void deleteCourse(long courseId);

    // public void deleteCourse(Course course);
}