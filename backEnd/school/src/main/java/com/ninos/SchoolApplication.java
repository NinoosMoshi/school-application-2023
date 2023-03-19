package com.ninos;

import com.ninos.dao.*;
import com.ninos.utility.OperationUtility;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@AllArgsConstructor
@SpringBootApplication
public class SchoolApplication { //implements CommandLineRunner

//	private final UserDao userDao;
//	private final CourseDao courseDao;
//	private final InstructorDao instructorDao;
//	private final StudentDao studentDao;
//	private final RoleDao roleDao;

	public static void main(String[] args) {
		SpringApplication.run(SchoolApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
////		OperationUtility.userOperations(userDao);
////		OperationUtility.roleOperations(roleDao);
////		OperationUtility.assignRolesToUsers(userDao, roleDao);
////		OperationUtility.instructorOperations(userDao,instructorDao,roleDao);
////		OperationUtility.studentOperations(userDao,studentDao,roleDao);
////		OperationUtility.coursesOperations(courseDao, instructorDao,studentDao);
//
//	}
}
