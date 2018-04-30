from flask import Flask, render_template, redirect,request,flash, session
app = Flask(__name__)
app.secret_key = 'MySecretKey'
@app.route('/')
def index():
    session['name'] = ""
    session['location'] = ""
    session['language'] = ""
    session['comment'] = ""
    return render_template("index.html")
@app.route('/process', methods = ['POST'])
def process():        
    valid = True
    session['location'] = request.form["location"]
    session['language'] = request.form["language"]
    if len(request.form["name"]) > 0:
        session['name'] = request.form["name"]
        valid = True
    else:
        valid = False
        flash("Name is empty.")
    if len(request.form["comment"]) > 0 and len(request.form["comment"]) < 120:
        session['comment'] = request.form["comment"]
        valid = True
    else:
        valid = False
        flash("Comment is empty or longer than 120 characters.")
        return redirect('/')
    if valid == True:
        return redirect('/result')
@app.route('/result')
def result():     
    return render_template("result.html", name = session['name'], location = session['location'], language = session['language'], comment = session['comment'])
app.run(debug=True)