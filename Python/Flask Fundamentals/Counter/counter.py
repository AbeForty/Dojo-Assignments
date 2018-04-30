from flask import Flask, render_template, session
app = Flask(__name__)
@app.route('/')
def index():
    app.secret_key = 'ThisIsSecret'
    # if session['counter'] == None:
    if session['counter'] < 2:
        session['counter'] = 1
    else:     
        session['counter'] += 1
    return render_template("index.html", counter = session['counter'])
@app.route('/plus2', methods = ['POST'])
def plus2():
    session['counter'] += 2
    return render_template("index.html", counter = session['counter'])
@app.route('/reset', methods = ['POST'])
def reset():
    session['counter'] = 1
    return render_template("index.html", counter = session['counter'])

app.run(debug=True)
