/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */
 
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;
int motorLeft = 1;
int motorRight = 3;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);    
  pinMode(motorLeft, OUTPUT); 
  pinMode(motorRight, OUTPUT);
}

void turnRight() {
  digitalWrite(motorLeft, HIGH);
  delay(1000);
  digitalWrite(motorLeft, LOW);
}

void turnLeft() {
  digitalWrite(motorRight, HIGH);
  delay(1000);
  digitalWrite(motorRight, LOW);
}

void moveForward() {
  digitalWrite(motorRight, HIGH);
  digitalWrite(motorLeft, HIGH);
  delay(1000);
  digitalWrite(motorRight, LOW);
  digitalWrite(motorLeft, LOW);
}
  
// the loop routine runs over and over again forever:
void loop() {
  turnLeft();
  turnRight();
  moveForward();
}