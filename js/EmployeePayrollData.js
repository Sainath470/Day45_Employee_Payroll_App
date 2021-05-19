// ------------UC1---------------
class EmployeePayrollData{

    /*constructor*/ EmployeePayrollData(...params) {
        this.id = params[0];
        this.name = params[1];
        this.profilePic = params[2];
        this.gender = params[3];
        this.department = params[4];
        this.salary = params[5];
        this.startDate = params[6];
        this.note = params[7];
      }
      
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is Incorrect';
        }
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        this._startDate = startDate;
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? 'undefined' : 
                        this.startDate.toLocaleDateString('en-US', options);
        return ("id=" + this.id + ", name=" + this.name + ", gender="
            + this.gender + ", profilePic=" + this.profilePic
            + ", departments=" + this.department + ", salary="
            + this.salary + ", startDate=" + empDate
            + ", note=" + this.note);
    }
}