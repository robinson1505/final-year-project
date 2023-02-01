CREATE DATABASE attendance_app;

USE attendance_app;

-- ==============VENUE TABLE====================--

CREATE TABLE
    venue (
        venue_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        venue_name VARCHAR(50) NOT NULL,
        venue_code VARCHAR(20) UNIQUE NOT NULL,
        venue_capacity INT(10) NOT NULL,
        PRIMARY KEY(venue_id)
    );

INSERT INTO
    venue (
        venue_name,
        venue_code,
        venue_capacity
    )
VALUES("MPH", "MPH_21", 300);

SELECT * FROM venue;

-- ===================  BEACON TABLE    ===================----

CREATE TABLE
    beacon (
        beacon_id CHAR(36) DEFAULT uuid() NOT NULL,
        beacon_mac_address VARCHAR(100) UNIQUE NOT NULL,
        beacon_venue VARCHAR(20) NOT NULL,
        UNIQUE(beacon_id),
        PRIMARY KEY (beacon_id),
        FOREIGN KEY (beacon_venue) REFERENCES venue(venue_code) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    beacon (
        beacon_mac_address,
        beacon_venue
    )
VALUES ("aaa-bb-cc", "MPH_21");

-- JOINING BEACON TABLE AND VENUE TABLE

SELECT
    beacon.beacon_id,
    beacon.beacon_mac_address,
    venue.venue_name,
    venue.venue_code,
    venue.venue_capacity
FROM beacon
    INNER JOIN venue ON beacon.beacon_venue = venue.venue_code;

-- ============== DEPARTMENT  TABLE =========================---

CREATE TABLE
    department(
        department_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        department_name VARCHAR(100) NOT NULL,
        department_code VARCHAR(20) UNIQUE NOT NULL,
        PRIMARY KEY(department_id),
    );

INSERT INTO
    department(
        department_name,
        department_code
    )
VALUES (
        "Computing and Communicating Technology",
        "CCT"
    );

SELECT * FROM department;

--==========================    LECTURER TABLE ====================------

CREATE TABLE
    lecturer(
        lecturer_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        lecturer_staff_number VARCHAR(50) UNIQUE NOT NULL,
        lecturer_first_name VARCHAR(50) NOT NULL,
        lecturer_middle_name VARCHAR(50) NOT NULL,
        lecturer_last_name VARCHAR(50) NOT NULL,
        lecturer_department VARCHAR(20) NOT NULL,
        PRIMARY KEY(
            lecturer_id,
            lecturer_staff_number
        ),
        FOREIGN KEY (lecturer_department) REFERENCES department(department_code) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    lecturer (
        lecturer_staff_number,
        lecturer_first_name,
        lecturer_middle_name,
        lecturer_last_name,
        lecturer_department
    )
VALUES (
        "NIT/STAFF/120",
        "JOVIN",
        "M",
        "KAMALA",
        "CCT"
    );

SELECT
    lecturer.lecturer_staff_number,
    department.department_name,
    department_code
FROM lecturer
    INNER JOIN department ON lecturer.lecturer_department = department.department_code;

-- ==================   PROGRAMS TABLE  =====================-----------

CREATE TABLE
    programs(
        program_id CHAR(36) DEFAULT uuid() NOT NULL,
        program_code VARCHAR(20) NOT NULL,
        program_name VARCHAR(100) NOT NULL,
        nta_level VARCHAR(30) UNIQUE NOT NULL,
        program_department VARCHAR(20) NOT NULL,
        PRIMARY KEY(program_id, nta_level),
        FOREIGN KEY (program_department) REFERENCES department(department_code) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    programs(
        program_code,
        program_name,
        nta_level,
        program_department
    )
VALUES (
        "BIT",
        "Bachelor Degree in Information and Technology",
        "NTA LEVEL 8",
        "CCT"
    );

INSERT INTO
    programs(
        program_code,
        program_name,
        nta_level,
        program_department
    )
VALUES (
        "BIT",
        "Bachelor Degree in Information and Technology",
        "NTA LEVEL 8",
        "CCT"
    );

SELECT * FROM programs;

-- =====================================    STUDENT TABLE   ========================------

CREATE TABLE
    student(
        student_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        student_registration_number VARCHAR(50) UNIQUE NOT NULL,
        student_first_name VARCHAR(50) NOT NULL,
        student_middle_name VARCHAR(50) NOT NULL,
        student_last_name VARCHAR(50) NOT NULL,
        student_nta_level VARCHAR(30) NOT NULL,
        academic_year VARCHAR(15) NOT NULL,
        PRIMARY KEY(
            student_id,
            student_registration_number
        ),
        FOREIGN KEY (student_nta_level) REFERENCES programs(nta_level) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    student (
        student_registration_number,
        student_first_name,
        student_middle_name,
        student_last_name,
        student_nta_level,
        academic_year
    )
VALUES (
        "NIT/BIT/2020/1229",
        "Robinson",
        "Emmanuel",
        "Anthony",
        "NTA LEVEL 8",
        "2022 / 2023"
    );

SELECT
    student.student_registration_number,
    student.student_first_name,
    student.student_middle_name,
    student.student_last_name,
    programs.program_name,
    student.student_nta_level,
    student.academic_year
FROM student
    INNER JOIN programs ON student.student_nta_level = programs.nta_level;

SELECT *
FROM student
WHERE
    student_registration_number = "NIT/BIT/2020/1229";

--  ================ MODULE TABLE ==============--

CREATE TABLE
    modules(
        module_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        module_code VARCHAR(20) UNIQUE NOT NULL,
        module_name VARCHAR(100) NOT NULL,
        semester INTEGER(2) NOT NULL,
        module_nta_level VARCHAR(30) NOT NULL,
        PRIMARY KEY(module_id, module_code),
        FOREIGN KEY (module_nta_level) REFERENCES programs(nta_level) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    modules(
        module_code,
        module_name,
        semester,
        module_nta_level
    )
VALUES (
        "ITU 08104",
        "MOBILE APPLICATION DEVELOPMENT",
        1,
        "NTA LEVEL 8"
    );

-- =================== TIMETABLE TABLE=======================--

CREATE TABLE
    timetable(
        timetable_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        timetable_code VARCHAR(20) UNIQUE NOT NULL,
        timetable_module VARCHAR(20) NOT NULL,
        timetable_venue VARCHAR(20) NOT NULL,
        timetable_lecturer VARCHAR(50) NOT NULL,
        module_day DATE NOT NULL,
        time_in TIME NOT NULL,
        time_out TIME NOT NULL,
        time_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY(timetable_id, timetable_code),
        FOREIGN KEY (timetable_module) REFERENCES modules(module_code) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (timetable_venue) REFERENCES venue(venue_code) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (timetable_lecturer) REFERENCES lecturer(lecturer_staff_number) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    timetable(
        timetable_code,
        timetable_module,
        timetable_venue,
        timetable_lecturer,
        module_day,
        time_in,
        time_out
    )
VALUES (
        "timetable_100",
        "ITU 08104",
        "MPH_21",
        "NIT/STAFF/120",
        "2023-2-6",
        "17:00:00",
        "19:00:00"
    );

-- ======================== ATTENDANCE  TABLE    =======================--

CREATE TABLE
    attendance(
        attendance_id CHAR(36) DEFAULT uuid() UNIQUE NOT NULL,
        attendance_code VARCHAR(20) UNIQUE NOT NULL,
        attendance_student VARCHAR(50) NOT NULL,
        attendance_module VARCHAR(20) NOT NULL,
        attendance_timetable VARCHAR(20) NOT NULL,
        attendance_status ENUM(
            'EXCELLENT',
            'VERY GOOD',
            'SATISFY',
            'BAD'
        ) DEFAULT 'SATISFY',
        PRIMARY KEY(attendance_id),
        UNIQUE(attendance_id),
        FOREIGN KEY (attendance_student) REFERENCES student(student_registration_number) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (attendance_module) REFERENCES modules(module_code) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (attendance_timetable) REFERENCES timetable(timetable_code) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO
    attendance(
        attendance_code,
        attendance_student,
        attendance_module,
        attendance_timetable,
        attendance_status
    )
VALUES (
        "attendance_100",
        "NIT/BIT/2020/1229",
        "ITU 08104",
        "timetable_100",
        "EXCELLENT"
    );

DESC table_name;

UPDATE programs
SET
    program_name = " Bachelor Degree in Information and Technology";

module_day VARCHAR(15) NOT NULL, 