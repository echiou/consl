
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
const int ledPin = 13;
const int buttonPin1 = 2;
const int buttonPin2 = 4;
const int buttonPin3 = 8;
const int buttonPin4 = 12;
const int buttonPin5 = 7;
const int potPin = 0;

int buttonState1 = 0;
int buttonState2 = 0;
int buttonState3 = 0;
int buttonState4 = 0;
int buttonState5 = 0;
int potState = analogRead(potPin);
int tracker = 0;

// the setup routine runs once when you press reset:
void setup() {                
  pinMode(ledPin, OUTPUT);    
  pinMode(buttonPin1, INPUT); 
  pinMode(buttonPin2, INPUT); 
  pinMode(buttonPin3, INPUT); 
  pinMode(buttonPin4, INPUT); 
  pinMode(buttonPin5, INPUT);
  pinMode(potPin, INPUT);
  Serial.begin(57600);
}


  
// the loop routine runs over and over again forever:
void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  buttonState4 = digitalRead(buttonPin4);
  buttonState5 = digitalRead(buttonPin5);
  potState = analogRead(potPin);
  if (potState >= tracker + 100) {
    Serial.println("right");
    tracker = potState;
  }
  else if (potState <= tracker - 100) {
    Serial.println("left");
    tracker = potState;
  }
  if (buttonState1 == HIGH) {
    Serial.println("button1");
    delay(250);
  }
  else if (buttonState2 == HIGH) {
    Serial.println("button2");
    delay(250);
  }
  else if (buttonState3 == HIGH) {
    Serial.println("button3");
    delay(250);
  }
  else if (buttonState4 == HIGH) {
    Serial.println("button4");
    delay(250);
  }
  else if (buttonState5 == HIGH) {
    Serial.println("back");
    delay(250);
  }
}
