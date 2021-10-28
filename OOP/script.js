

// TASK 1

//1__Create a showFullName() method that returns the student's first and last name.

class Student {
	constructor(fullName, direction) {
		this.fullName = fullName;
		this.direction = direction;
	}
	showFullName() {
		return this.fullName;
	}
}

let stud1 = new Student("Ivan Petrenko", "web");
console.log(stud1.showFullName());

// -----------------------------------------------------------------------------


//2__Create a nameIncludes(data) method that, using the showFullName() method, 
// checks for the text data argument in the student’s name and 
// returns true if a match is found or false if not found.
// !не зробив

// class Student {
// 	constructor(fullName, direction) {
// 		this.fullName = fullName;
// 	}
// 	showFullName() {
// 	}

// 	// nameIncludes() {
// 	// 	return this.showFullName;
// 	// }
// }

// const stud1 = 'Ivan Petrenko';
// stud1.includes('Ivan');
// stud1.includes('Denysenko');

// console.log(stud1.includes('Ivan'));
// console.log(stud1.includes('petro'))
// console.log(stud1.includes(''))  //якщо пусто

// =================================================================



// 3__Create a static studentBuilder() method that returns a new instance
// of the class named ‘Ihor Kohut’ and the direction ‘qc’.

// class Student {
// 	constructor(fullName, direction) {
// 		this.fullName = fullName;
// 		this.Direction = direction;
// 	}
// 	static studentBuilder() {
// 		return stud3.fullName + " " + stud3.Direction
// 	};
// }

// let stud3 = new Student("Ihor Kohut", "qc");
// console.log(Student.studentBuilder());



// ==============================================================
// 4

// class Student {
// 	constructor(name, direction) {
// 		this._name = name;
// 		this._direction = direction;
// 	}
// 	get direction() {
// 		return this._direction;
// 	}

// 	set direction(value) {
// 		if (value.length <= 1) {
// 			alert("Your direction is too short");
// 			return;
// 		}
// 		this._direction = value;
// 	}

// 		static studentBuilder() {
// 		return stud3.direction
// 	};

// get name() {
// 	return this._name;
// }

// set name(value) {
// 	if (value.length <= 15) {
// 		alert("Your direction is too short");
// 		return;
// 	}
// 	this._direction = value;
// }


// };

// let stud1 = new Student("Ivan Petrenko", "web");
// alert(stud1.direction);
// // alert(stud1.name);

// let stud2 = new Student("Sergiy Koval", "python");
// alert(stud2.direction);

// let stud3 = new Student("Ihor Kohut", "qc");
// alert(Student.studentBuilder());

// let stud4 = new Student("Ivan petrovich");
// stud4.direction = "c";

// ====================================================

// Task 2
// ---------------------------------------

// class Person {
// 	constructor(name, surname) {
// 		this.firstName = name;
// 		this.lastName = surname;
// 	}
// 	showFullName() {
// 		return this.firstName + " " + this.lastName;
// 	}
// };

// class Student extends Person {
// 	constructor(name, surname, year, midleName) {
// 		super(name, surname);
// 		this.year = year;
// 		this.midleName = midleName;
// 	}
// 	showFullName() {
// 		super.showFullName();
// 		return this.firstName + " " + this.lastName + " " + this.midleName
// 	}
// 	showCourse() {
// 		return nowYear - this.year;
// 	}
// };

// let person1 = new Person('Ivan', 'Probiygolova');
// // console.log(person1.showFullName());

// let stud1 = new Student('Ivan', 'Probiygolova', 2018, 'Mykhailovych');
// let nowYear = 2021;

// console.log("Current course: " + stud1.showCourse());
// console.log(stud1.showFullName());
// // console.log(stud1.showFullName() + " " + stud1.midleName);

// ======================================================================

// Task 3
// ---------------------------------------

// class Worker {
// 	#limit1 = 1.2;
// 	#limit2 = 1.5;

// 	get salaryLimit() {
// 		return this.#limit1;
// 	}
// 	set salaryLimit(value) {
// 		this.#limit1 = value;
// 	}
// 	// -------
// 	get salaryLimit2() {
// 		return this.#limit2;
// 	}
// 	set salaryLimit2(value) {
// 		this.#limit2 = value;
// 	}

// 	constructor(fullName, dayRate, workingDays) {
// 		this.fullName = fullName;
// 		this.dayRate = dayRate;
// 		this.workingDays = workingDays;
// 	}

// 	showSalary() {
// 		return this.dayRate * this.workingDays;
// 	}
// 	worker1
// 	showSalaryWithExperience() {
// 		return worker1.salaryLimit * worker1.showSalary();
// 	}
// 	showSalaryWithExperience2() {
// 		return worker1.salaryLimit2 * worker1.showSalary();
// 	}
// 	worker2
// 	showSalaryWithExperience3() {
// 		return worker2.salaryLimit2 * worker2.showSalary();
// 	}

// 	showSalaryWithExperience4() {
// 		return worker3.salaryLimit2 * worker3.showSalary();
// 	}
// }

// const worker1 = new Worker("John Johnson", 20, 23);

// console.log(worker1.fullName);                                                     //John Johnson
// console.log(worker1.fullName + " salary: " + worker1.showSalary());                //John Johnson salary: 460
// console.log("New experience: " + worker1.salaryLimit);                             //New experience: 1.2
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());  //John Johnson salary: 552
// console.log("New experience: " + worker1.salaryLimit2);                            //New experience: 1.5
// console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience2()); //4 John Johnson salary: 690

// const worker2 = new Worker("Tom Tomson", 48, 22);

// console.log(worker2.fullName);
// console.log(worker2.fullName + " salary: " + worker2.showSalary());

// const worker3 = new Worker("Andy Ander", 29, 23);

// console.log(worker3.fullName);
// console.log(worker3.fullName + " salary: " + worker3.showSalary());

// //! З цим не впорався тому хоть так:

// let myarray = [
// 	" " + worker3.fullName + " salary: " + worker3.showSalaryWithExperience4(),
// 	" " + worker2.fullName + " salary: " + worker2.showSalaryWithExperience3(),
// 	" " + worker1.fullName + " salary: " + worker1.showSalaryWithExperience2()
// ];

// myarray.sort(function (a, b) {
// 	return b - a;
// })
// myarray.reverse();
// console.log("Sorted salary: " + myarray)

