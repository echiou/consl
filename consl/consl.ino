
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
const int ledPin = 13;
const int buttonPin1 = 2;
const int buttonPin2 = 4;
const int buttonPin3 = 7;
const int buttonPin4 = 8;

int buttonState1 = 0;
int buttonState2 = 0;
int buttonState3 = 0;
int buttonState4 = 0;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(ledPin, OUTPUT);    
  pinMode(buttonPin1, INPUT); 
  pinMode(buttonPin2, INPUT); 
  pinMode(buttonPin3, INPUT); 
  pinMode(buttonPin4, INPUT); 
}


  
// the loop routine runs over and over again forever:
void loop() {
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);
  buttonState3 = digitalRead(buttonPin3);
  buttonState4 = digitalRead(buttonPin4);
  if (buttonState1 == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
  }
  else if (buttonState2 == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(2000);
    digitalWrite(ledPin, LOW);
  }
  else if (buttonState3 == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(3000);
    digitalWrite(ledPin, LOW);
  }
  else if (buttonState4 == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(4000);
    digitalWrite(ledPin, LOW);
  }
}
