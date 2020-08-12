let members = false;
let xPos = 80;
let yPos = 80;
let state = 0;

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent('sketch-holder');
    background(0);
    strokeWeight(4);
    stroke(41)
    fill(96, 96, 96.1)
    rectMode(CENTER)
    rect(140, 40, 80, 30)
    fill(255)
    textSize(15);
    text("Senate", 115, 45)
}

fetch('https://api.propublica.org/congress/v1/116/senate/members.json', {
        headers: new Headers({ //opening headers.
            "X-API-Key": "DGGvL6B6czi25Hnv79ZeGaEW8L5jkiU71T1K8gs8"
        })
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        members = data.results[0].members;
    })

/*
function draw() {
    if (98 < mouseX && mouseX < 182 && mouseY > 21 && mouseY < 59) {

    }
}*/

function count(membersObj) {
    let results = [0, 0, 0];
    for (let i = 0; i < membersObj.length; i++) {
        if (membersObj[i].party == "R") {
            results[0] += 1;
        } else if (membersObj[i].party == "D") {
            results[1] += 1;
        } else {
            results[2] += 1;
        }
    }
    return results;
}

function mouseClicked() {
    if (state == 1 && (98 < mouseX && mouseX < 182 && mouseY > 21 && mouseY < 59)) {
        //state = 0
        background(0);

    }
    if (state == 0) {
        console.log("pressed")
        fill(255, 0, 0)
        //ellipse(50,50,15,10)
        noStroke();
        strokeWeight(0);

        if (98 < mouseX && mouseX < 182 && mouseY > 21 && mouseY < 59) {
            if (members != false) {
                console.log(members);
                let data = count(members);
                console.log(data);
                for (let j = 0; j < data.length; j++) {
                    for (let i = 0; i < data[j]; i++) {
                        if (j == 0) {
                            fill(255, 0, 0);
                            if (xPos < 280) {
                                ellipse(xPos, yPos, 10, 10);
                                xPos += 17;
                            } else {
                                xPos = 80;
                                yPos += 20;
                                ellipse(xPos, yPos, 10, 10);
                            }
                        } else if (j == 1) {
                            if (j == 1 && i == 0) {
                                yPos += 40
                                xPos = 80
                            }
                            fill(0, 0, 255);
                            if (xPos < 280) {
                                ellipse(xPos, yPos, 10, 10);
                                xPos += 17;
                            } else {
                                xPos = 80;
                                yPos += 20;
                                ellipse(xPos, yPos, 10, 10);
                            }
                        } else if (j == 2) {
                            if (j == 2 && i == 0) {
                                yPos += 40
                                xPos = 80
                            }
                            fill(255, 255, 0);
                            if (xPos < 280) {
                                ellipse(xPos, yPos, 10, 10);
                                xPos += 17;
                            } else {
                                xPos = 80;
                                yPos += 20;
                                ellipse(xPos, yPos, 10, 10);
                            }
                        }

                    }
                }


            }
            state = 1;
        }

    }
}