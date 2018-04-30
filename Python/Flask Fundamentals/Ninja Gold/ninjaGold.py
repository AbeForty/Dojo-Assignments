from flask import Flask, render_template, session, request, redirect
import random,datetime
app = Flask(__name__)
app.secret_key = 'MySecretKey'
@app.route('/')
def index():
    returnMessage = ""
    if not 'coins' in session:
        session['coins'] = 0
    if not 'message' in session:
        session['message'] = []
    else:
        for i in session['message']:
            returnMessage += i + "\n"
    return render_template("index.html", coins = session['coins'], message = returnMessage)
@app.route('/process_money', methods = ['POST'])
def procress_money():
    print request.form['building']
    message_to_send = ""
    if request.form['building'] == "farm":
        random_coins  = random.randrange(10, 21)        
    elif request.form['building'] == "house":
        random_coins  = random.randrange(5, 11)
    elif request.form['building'] == "cave":
        random_coins  = random.randrange(2, 6)
    elif request.form['building'] == "casino":
        random_coins  = random.randrange(0, 50)
        lose_or_win = random.randrange(0,2)
    if request.form['building'] != "casino":
        message_to_send = "Earned " + str(random_coins) + " golds from the " + request.form['building']  + "!" + " (" + str(datetime.datetime.now())+")"
        message_log = session['message']
        message_log.append(message_to_send)
        session['message'] = message_log
        session['coins'] += random_coins
    else:
        if lose_or_win == 0:
            session['coins'] += random_coins
            message_to_send = "Entered a casino and won " + str(random_coins) + " golds! Lucky you!" + " (" + str(datetime.datetime.now()) +")"
            message_log = session['message']
            message_log.append(message_to_send)
            session['message'] = message_log
        elif lose_or_win == 1 and random_coins != 0:
            session['coins'] -= random_coins
            message_to_send = "Entered a casino and lost " + str(random_coins) + " golds... Ouch..." + " (" + str(datetime.datetime.now()) +")"
            message_log = session['message']
            message_log.append(message_to_send)
            session['message'] = message_log
        elif lose_or_win == 1 and random_coins == 0:
            session['coins'] -= random_coins
            message_to_send = "Entered a casino and lost " + str(random_coins) + " golds... Lucky you!" + " (" + str(datetime.datetime.now()) +")"
            message_log = session['message']
            message_log.append(message_to_send)
            session['message'] = message_log
    return redirect('/')
@app.route('/reset', methods = ['POST'])
def reset():
    session.clear()
    return redirect('/')
app.run(debug = True)
