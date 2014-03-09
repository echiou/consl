
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
const int ledPin = 13;
const int buttonPin = 2;

int buttonState = 0;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(ledPin, OUTPUT);    
  pinMode(buttonPin, INPUT); 
}


  
// the loop routine runs over and over again forever:
void loop() {
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  }
  else {
    digitalWrite(ledPin, LOW);
  }
}
