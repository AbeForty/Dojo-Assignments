import random
class CallCenter(object):
    def __init__(self):
        self.calls=[]
        self.queueSize=0
    def add(self, call):
        self.calls.append(call)
        self.queueSize += 1
    def remove(self, call):
        for i in range(0,len(self.calls)):
            if self.calls[i].id == call.id:
                self.calls.pop(i)
        self.queueSize -= 1
    def remove_by_number(self, number):
        for i in range(0,len(self.calls)):
            if self.calls[i].number == number:
                self.calls.pop(i)
                break
        self.queueSize -= 1
    def display(self):
        for i in range(0,len(self.calls)):
            print self.calls[i].name
            print self.calls[i].number
            print self.queueSize
class Call(object):
    def __init__(self, name, number, time, reason):
        self.id = random.randint(1,100000)
        self.name = name
        self.number = number
        self.time = time
        self.reason = reason
    def display_call(self):
        print self.id
        print self.name
        print self.number
        print self.time
        print self.reason
my_call_1 = Call("Homer Simpson","555-299-3940","3:00PM", "Dehydration")
my_call_2 = Call("Charlie Brown","467-824-5233","1:00PM", "Broken Tibia")
my_call_3 = Call("Steve Rogers","235-934-2845","5:00AM", "Fractured Wrist")
my_call_center = CallCenter()
my_call_center.add(my_call_1)
my_call_center.add(my_call_2)
my_call_center.add(my_call_3)
my_call_center.display()
my_call_center.remove(my_call_3)
my_call_center.display()
my_call_center.remove_by_number("467-824-5233")
my_call_center.display()