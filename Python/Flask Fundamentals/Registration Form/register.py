from flask import Flask, render_template, redirect,request, flash, session
import re
app = Flask(__name__)
app.secret_key = 'MySecretKey'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'^(?=.*\d).{8,}$')
NAME_REGEX = re.compile(r'/^([^0-9]*)$/')
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/process', methods = ['POST'])
def process():        
    valid = True
    if NAME_REGEX.match(request.form["first_name"]):
        valid = True
    else:
        valid = False
        flash("First name is empty or contains numbers.")
    if NAME_REGEX.match(request.form["last_name"]):
        valid = True
    else:
        valid = False
        flash("Last name is empty or contains numbers.")
    if EMAIL_REGEX.match(request.form["email"]):
        valid = True
    else:
        valid = False
        flash("Email is invalid. Please type in format of email@domain.com")
    if PASSWORD_REGEX.match(request.form["password"]):
        if request.form["password"] == request.form["pw_confirm"]:
            valid = True
        else:
            valid = False
            flash("Passwords do not match.")
    else:
        valid = False
        flash("Password is not at least eight characters and contains at least one number.")        
        
    if valid == True:
        return redirect('/result')
    else:
        return redirect('/')
@app.route('/result')
def result():     
    return render_template("result.html")
app.run(debug=True)