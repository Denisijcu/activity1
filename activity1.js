class Developer{
    constructor(firstName,lastName){
       this.firstName = firstName;
       this.lastName = lastName;
    }

    getFullName(){
        return this.firstName+ ' '+ this.lastName;
    }
    
}

student = new Developer('Edith','Flores');
console.log(student.getFullName());

class JavaScriptDeveloper extends Developer {

   
    constructor(job){
       super();
        this.job = job;
    }

   getJob(){
     
      return this.job;
   
   }
}

worker = new JavaScriptDeveloper('Denis', 'Sanchez', 'Web Dev');
console.log(worker.getFullName()); 
console.log(worker.getJob());

//  import React from 'react';

const myComponent = () =>  "Welcome to React Dev"; 