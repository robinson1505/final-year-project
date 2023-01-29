CREATE DATABASE attendance_app;

USE attendance_app;

CREATE TABLE
    venue (
        venue_id CHAR(36) DEFAULT uuid() NOT NULL,
        venue_name VARCHAR(50) NOT NULL,
        venue_code VARCHAR(20) NOT NULL UNIQUE,
        venue_capacity INT(10) NOT NULL,
        UNIQUE(venue_id),
        PRIMARY KEY(venue_id)
    );

CREATE TABLE
    beacon (
        beacon_id CHAR(36) DEFAULT uuid() NOT NULL,
        beacon_mac_address VARCHAR(100),
        beacon_venue CHAR(36) NOT NULL,
        UNIQUE(beacon_id),
        PRIMARY KEY (beacon_id),
        FOREIGN KEY (beacon_venue) REFERENCES venue(venue_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    department(
        department_id CHAR(36) DEFAULT uuid() NOT NULL,
        department_name VARCHAR(100) NOT NULL,
        department_code VARCHAR(20) NOT NULL,
        PRIMARY KEY(department_id),
        UNIQUE(
            department_id,
            department_code
        )
    );

CREATE TABLE
    lecturer(
        lecturer_id CHAR(36) DEFAULT uuid() NOT NULL,
        lecturer_staff_number VARCHAR(50) NOT NULL,
        lecturer_first_name VARCHAR(50) NOT NULL,
        lecturer_middle_name VARCHAR(50) NOT NULL,
        lecturer_last_name VARCHAR(50) NOT NULL,
        lecturer_department CHAR(36) NOT NULL,
        PRIMARY KEY(
            lecturer_id,
            lecturer_staff_number
        ),
        UNIQUE(
            lecturer_id,
            lecturer_staff_number
        ),
        FOREIGN KEY (lecturer_department) REFERENCES department(department_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    programs(
        program_id CHAR(36) DEFAULT uuid() NOT NULL,
        program_code VARCHAR(20) NOT NULL,
        progrem_name VARCHAR(100) NOT NULL,
        nta_level VARCHAR(20) NOT NULL,
        academic_year VARCHAR(15) NOT NULL,
        program_department CHAR(36),
        PRIMARY KEY(program_id, program_code),
        UNIQUE(program_id, program_code),
        FOREIGN KEY (program_department) REFERENCES department(department_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    student(
        student_id CHAR(36) DEFAULT uuid() NOT NULL,
        student_registration_number VARCHAR(50) NOT NULL,
        student_first_name VARCHAR(50) NOT NULL,
        student_middle_name VARCHAR(50) NOT NULL,
        student_last_name VARCHAR(50) NOT NULL,
        student_program CHAR(36) NOT NULL,
        PRIMARY KEY(
            student_id,
            student_registration_number
        ),
        UNIQUE(
            student_id,
            student_registration_number
        ),
        FOREIGN KEY (student_program) REFERENCES programs(program_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    modules(
        module_id CHAR(36) DEFAULT uuid() NOT NULL,
        module_code VARCHAR(20) NOT NULL,
        module_name VARCHAR(50) NOT NULL,
        semester VARCHAR(50) NOT NULL,
        module_program CHAR(36) NOT NULL,
        module_day DATE NOT NULL,
        PRIMARY KEY(module_id, module_code),
        UNIQUE(module_id, module_code),
        FOREIGN KEY (module_program) REFERENCES programs(program_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    timetable(
        timetable_id CHAR(36) DEFAULT uuid() NOT NULL,
        timetable_module CHAR(36),
        timetable_venue CHAR(36),
        timetable_lecturer CHAR(36),
        time_in TIME NOT NULL,
        time_out TIME NOT NULL,
        time_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY(timetable_id),
        UNIQUE(timetable_id),
        FOREIGN KEY (timetable_module) REFERENCES modules(module_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (timetable_venue) REFERENCES venue(venue_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (timetable_lecturer) REFERENCES lecturer(lecturer_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    attendance(
        attendance_id CHAR(36) DEFAULT uuid() NOT NULL,
        attendance_status ENUM(
            'EXCELLENT',
            'VERY GOOD',
            'GOOD',
            'SATISFY',
            'BAD'
        ) DEFAULT 'SATISFY',
        attendance_student CHAR(36),
        attendance_module CHAR(36),
        attendance_timetable CHAR(36),
        PRIMARY KEY(attendance_id),
        UNIQUE(attendance_id),
        FOREIGN KEY (attendance_student) REFERENCES student(student_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (attendance_module) REFERENCES modules(module_id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (attendance_timetable) REFERENCES timetable(timetable_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

DESC table_name;