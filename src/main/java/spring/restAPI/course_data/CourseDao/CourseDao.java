package spring.restAPI.course_data.CourseDao;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.restAPI.course_data.entities.Course;

public interface CourseDao extends JpaRepository <Course, Long>{
    
}
