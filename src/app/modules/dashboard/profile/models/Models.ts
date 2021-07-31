export class GuardianInfo {
    guardianName: string;
    guardianRelation: string;
    guardianMonIncome: string;
    guardianCellNo: string;
    guardianOccupation: string;
    guardianCNIC: string;
    guardianNTN: string;

    constructor(data?) {

        data = data || {};
        this.guardianName = data.guardianName;
        this.guardianRelation = data.guardianRelation;
        this.guardianMonIncome = data.guardianMonIncome;
        this.guardianCellNo = data.guardianCellNo;
        this.guardianOccupation = data.guardianOccupation;
        this.guardianCNIC = data.guardianCNIC;
        this.guardianNTN = data.guardianNTN;
    }
}

export class PersonalInfo {

    name: string;
    fatherName: string;
    motherName: string;
    cnic: string;
    dob: Date;
    gender: string;
    religion: string;
    bloodGroup: string;
    passportNumber: string;
    maritalStatus: string;
    nameOfNextOfKin: string;
    nextOfKinRelation: string;


    constructor(data?) {
        data = data || {};
        this.name = data.name;
        this.fatherName = data.fatherName;
        this.motherName = data.motherName;
        this.cnic = data.cnic;
        this.dob = data.dob;
        this.gender = data.gender;
        this.religion = data.religion;
        this.bloodGroup = data.bloodGroup;
        this.passportNumber = data.passportNumber;
        this.maritalStatus = data.maritalStatus;
        this.nameOfNextOfKin = data.nameOfNextOfKin;
        this.nextOfKinRelation = data.nextOfKinRelation;
    }
}

export class AcademicMetricLevelInfo {
    examPassed: string;
    school: string;
    board: string;
    yearOfPassing: string;
    serialNo: string;
    referenceNo: string;
    marksObtained: string;
    totalMarks: string;
    constructor(data?) {
        data = data || {};
        this.examPassed = data.examPassed;
        this.school = data.school;
        this.board = data.board;
        this.yearOfPassing = data.yearOfPassing;
        this.serialNo = data.serialNo;
        this.referenceNo = data.referenceNo;
        this.marksObtained = data.marksObtained;
        this.totalMarks = data.totalMarks;
    }
}

export class AcademicInterLevelInfo {
    school: string;
    board: string;
    yearOfPassing: string;
    rollNo: string;
    registrationNo: string;
    marksObtained: string;
    totalMarks: string;
    constructor(data?) {
        data = data || {};
        this.school = data.school;
        this.board = data.board;
        this.yearOfPassing = data.yearOfPassing;
        this.rollNo = data.rollNo;
        this.registrationNo = data.registrationNo;
        this.marksObtained = data.marksObtained;
        this.totalMarks = data.totalMarks;
    }
}
