
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
const int ledPin = 13;
const int buttonPin1 = 2;
const int buttonPin2 = 4;
const int buttonPin3 = 7;
const int buttonPin4 = 8;
const int potPin = 0;

int buttonState1 = 0;
int buttonState2 = 0;
int buttonState3 = 0;
int buttonState4 = 0;
int potState = analogRead(potPin);
int tracker = 0;

// the setup routine runs once when you press reset:
void setup() {                
  pinMode(ledPin, OUTPUT);    
  pinMode(buttonPin1, INPUT); 
  pinMode(buttonPin2, INPUT); 
  pinMode(buttonPin3, INPUT); 
  pinMode(buttonPin4, INPUT); 
  pinMode(potPin, INPUT);
  Serial.begin(57600);
}


  
// the loop routine runs over and over again forever:
void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  buttonState4 = digitalRead(buttonPin4);
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
    Serial.print("a");
    delay(250);
  }
  else if (buttonState2 == HIGH) {
    Serial.print("b");
    delay(250);
  }
  else if (buttonState3 == HIGH) {
    Serial.print("c");
    delay(250);
  }
  else if (buttonState4 == HIGH) {
    Serial.print("d");
    delay(250);
  }
}
