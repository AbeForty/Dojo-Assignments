import random
class Hospital(object):
    def __init__(self,name):
        self.patients=[]
        self.name = name
        self.queueSize=0
        self.capacity = 5
    def admit(self, pat):
        if self.queueSize < self.capacity:
            self.patients.append(pat)
            pat.bed = random.randint(1,5)
            self.queueSize += 1
            print "~Patient admitted.~"
        else:
            print "~Too many patients. Please wait for discharge of another patient.~"
    def discharge(self, pat):
        for i in range(0,len(self.patients)):
            # print "i: " + str(i)
            # print "Number of patients: " + str(len(self.patients))
            if self.patients[i].id == pat.id:
                self.patients.pop(i)
                break
        self.queueSize -= 1
        print "~Patient discharged. Have a nice day!~"

class Patient(object):
    def __init__(self, name, *allergies):
        self.id = random.randint(1,100000)
        self.name = name
        self.allergies = allergies
        self.bed = None
    def display_patient(self):
        print self.id
        print self.name
        print self.allergies
        print self.bed
my_hospital = Hospital("Mercy Hearts Hospital")
my_other_hospital = Hospital("Hill Valley Hospital")
my_other_other_hospital = Hospital("Springfield General Hospital")
my_patient = Patient("Homer Simpson","Ghost Pepper")
my_other_patient = Patient("Charlie Brown","Nuts", "Shellfish")
my_other_other_patient = Patient("Steve Rogers","None")
my_other_other_other_patient = Patient("Marty McFly","None")
my_other_other_other_other_patient = Patient("Biff Tannen","Brocolli")
my_other_other_other_other_other_patient = Patient("Sloth Fratelli","Grapes", "Cheese")
my_other_other_other_other_other_other_patient = Patient("Indiana Jones","None")
my_other_other_other_other_other_other_other_patient = Patient("Dick Grayson","None")

my_hospital.admit(my_patient)
my_hospital.admit(my_other_patient)
my_hospital.admit(my_other_other_patient)
my_hospital.admit(my_other_other_other_patient)
my_hospital.admit(my_other_other_other_other_patient)
my_hospital.admit(my_other_other_other_other_other_patient)
my_hospital.admit(my_other_other_other_other_other_other_patient)
my_hospital.discharge(my_other_other_patient)
my_hospital.discharge(my_other_other_other_patient)
