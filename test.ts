interface month {
    numberOfDays : number
}

class June implements month {
    numberOfDays : number;
    constructor(number){
        this.numberOfDays = number;
    }
}