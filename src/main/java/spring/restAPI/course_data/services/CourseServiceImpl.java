package spring.restAPI.course_data.services;

// import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.restAPI.course_data.CourseDao.CourseDao;
import spring.restAPI.course_data.entities.Course;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseDao courseDao;

    // List <Course> list;

    // public CourseServiceImpl(){
    //     list = new ArrayList<>();
    //     list.add(new Course(145, "Java Core Course", "This contains basics of Java"));
    //     list.add(new Course(5369, "Spring Boot Course", "This contains Spring Boot basics"));
    // }

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
        // return list;

    }


    @Override
    public Optional<Course> getCourse(long courseId) {
        return Optional.ofNullable(courseDao.findById(courseId)
        .orElseThrow(() -> new RuntimeException("Course Not Found") ));
    }

    // @Override
    // public Course getCourse(long courseId) {
        
        // Course c = null;
        // for (Course course : list){
        //     if (course.getId() == courseId){
        //         c = course;
        //         break;
        //     }
        // }
        // return c;
    // }

    @Override
    public Course addCourse(Course course) {
        courseDao.save(course);
        return course;
        // list.add(course);
        // return course;
    }

    @Override
    public Course updateCourse(Course course) {
        courseDao.save(course);
        return course;
        // list.forEach(c -> {
        //     if (c.getId() == course.getId()){
        //         c.setTitle(course.getTitle());
        //         c.setDescription(course.getDescription());
        //     }
        // });
        // return course;
    }

    @Override
    public void deleteCourse(long courseId) {
        courseDao.deleteById(courseId);        
    }

    // @Override
    // public void deleteCourse(long courseId) {
    //     list.removeIf(course -> course.getId() == courseId);
        
    // }

    

    
}
