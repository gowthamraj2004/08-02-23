var arr1=[1,2,3,4];
var arr2=[5,6,7,8];
var arr3=[...arr1,...arr2,9,10]//... is spread operator used to spread the elements in the array without adding and it can be also used to add the elements to the array by simply mention the element after ,
console.log(arr3);


function sum(...a){//... operator is here used as rest operator it is used to define the argument when we dont know the number of arguments
    console.log(a);
}

sum(1,2,3,4);
sum(1,2,3,4,5,6,7,8);




function Createstudent(name,reg)//it is a constructor function which is starting with capital letter in the beginning
{
    var newobj={};
    newobj.fname = name;
    newobj.regno = reg;
    return newobj;
}

var stu = Createstudent("gowtham",7767);
var stu1 = Createstudent("raj",8888);
var stu2 = Createstudent("vishnu",9999);//we can call the constructor function in normal method or using new keyword also

var stud1 = new Createstudent("Giri",5555);//it is now called as constructor function now its used as a constuctor function
console.log(stu);
console.log(stu1);
console.log(stu2);