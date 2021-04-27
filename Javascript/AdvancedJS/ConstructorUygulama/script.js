

function Employee(name,salary){

    if(!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    this.name = name;
    this.salary = salary;

}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1;
    var tax = 0, total = this.salary*month;

    if(total<=20000){
        tax = total*0.2;
    }else if(total >20000 && total <=30000){
        tax = total*0.25 ;
    }else{
        tax = total * 0.3 ;
    }

    return{
        tax : tax,
        paid : total - tax 
    }

}

var emp1 = Employee('yiğit',3000);
var emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel ${emp1_salary.tax} vergi kesintisi ile ${emp1_salary.paid} maaş almıştır.`)

var emp2 = new Employee('can',4000);
var emp2_salary = emp2.calculateSalary();



