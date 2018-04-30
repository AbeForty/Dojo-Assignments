from flask import Flask, render_template, session, request, redirect
import random
app = Flask(__name__)
app.secret_key = 'MySecretKey'
@app.route('/')
def index():
    # if not session['number'] in session:
    session['number']  = random.randrange(0, 101)
    print session
    return render_template("index.html")
@app.route('/check', methods = ['POST'])
def check():
    session['guessedNumber']  = request.form['txtNumber'] 
    print session
    return redirect('/load')
@app.route('/load')
def load():
    print session
    if int(session['number']) == int(session['guessedNumber']) :
        return render_template("index.html", message = 'The number was ' + str(session['number']), visibilityValue = "visible")
    elif int(session['guessedNumber']) > int(session['number']) :
        print "Too High"
        return render_template("index.html", message = 'Too High ', visibilityValue = "visible")
    elif int(session['guessedNumber']) < int(session['number']) :
        print "Too Low"
        return render_template("index.html", message = 'Too Low ', visibilityValue = "visible")
@app.route('/reset', methods = ['POST'])
def reset():
    session['number'] = 0
    return render_template("index.html", visibilityValue = "hidden")
app.run(debug=True)
