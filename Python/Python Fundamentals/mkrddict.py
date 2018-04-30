hello_dict = {"Name": "Aaron", "Age": "22", "Country of birth": "The United States", "Favorite language": "VB.NET"}
def read_dict(my_dict):
    for key, value in my_dict.items():
        print "My {} is {}".format(str(key).lower(), value)
read_dict(hello_dict)

