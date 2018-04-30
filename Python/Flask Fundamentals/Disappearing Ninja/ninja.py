from flask import Flask, render_template, redirect,request
app = Flask(__name__)
@app.route('/ninja/<color>')
def load_ninja(color):
    print color
    ninja = ""
    if color == "red":
        ninja = "raphael.jpg"
    elif color == "purple":
        ninja = "donatello.jpg"
    elif color == "orange":
        ninja = "michelangelo.jpg"
    elif color == "blue":
        ninja = "leonardo.jpg"
    else:
        ninja = "notapril.jpg"
    return render_template("index.html", ninja_color = ninja)
@app.route('/ninja')
def load_main():
    return render_template("index.html", ninja_color = "tmnt.png")
app.run(debug=True)