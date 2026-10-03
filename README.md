# IoT Workshop

## Overview

An **IoT Workshop** was conducted during the **Third Year, V Semester of the Bachelor of Engineering (B.E.) program**.

The workshop focused on providing students with practical knowledge of **Internet of Things (IoT)**, **Embedded Systems**, **Arduino Uno**, and **React.js**. It combined hardware programming with modern web development concepts to help students understand how connected devices can interact with software applications.

The workshop emphasized hands-on learning, covering the fundamentals of microcontroller programming, sensor and actuator interfacing, and the development of web-based interfaces for IoT applications.

## Workshop Objectives

The main objectives of the workshop were:

- To understand the fundamentals of **Internet of Things (IoT)**.
- To understand the basics of **Embedded Systems**.
- To learn about the **Arduino Uno** microcontroller development board.
- To learn how to set up and program an Arduino Uno.
- To understand digital and analog input/output operations.
- To understand Arduino pins and their configurations.
- To learn about **PWM (Pulse Width Modulation)**.
- To understand sensors and actuators.
- To learn the basics of **React.js**.
- To understand how web applications can interact with IoT systems.
- To gain practical hands-on experience through IoT experiments.

## Topics Covered

### 1. Internet of Things (IoT)

The workshop introduced the fundamental concepts of the **Internet of Things**, including:

- Introduction to IoT
- IoT architecture
- IoT devices and components
- Sensors and actuators
- Data collection
- Device communication
- IoT applications
- Real-world IoT use cases

### 2. Embedded Systems

The workshop covered the fundamentals of **Embedded Systems** and their role in IoT.

Topics included:

- Introduction to Embedded Systems
- Microcontrollers
- Hardware and software interaction
- Digital and analog signals
- GPIO (General Purpose Input/Output)
- Sensors and actuators
- Interfacing electronic components
- Embedded systems in IoT applications

### 3. Arduino Uno

The workshop introduced the **Arduino Uno** as a microcontroller development board used for learning, prototyping, and developing embedded and IoT applications.

Topics covered included:

- Introduction to Arduino Uno
- Arduino Uno board components
- Digital pins
- Analog pins
- Power pins
- USB connection
- Arduino IDE setup
- Connecting Arduino Uno to a computer
- Writing and uploading programs
- Basic circuit connections
- Interfacing LEDs and sensors

### 4. Arduino IDE Setup

Students learned how to set up the Arduino development environment and upload programs to the Arduino Uno.

The setup process included:

1. Installing the Arduino IDE.
2. Connecting the Arduino Uno to the computer using a USB cable.
3. Selecting the appropriate Arduino board.
4. Selecting the correct communication port.
5. Writing the Arduino program.
6. Compiling the program.
7. Uploading the program to the Arduino Uno.
8. Testing the connected hardware.

### 5. Arduino Programming

The workshop covered the basic structure of an Arduino program and commonly used Arduino functions.

#### `setup()`

The `setup()` function runs **once** when the Arduino starts or is reset.

It is mainly used for initialization and configuration.

Example:

```
void setup() {
  pinMode(13, OUTPUT);
}
```

#### `loop()`

The `loop()` function runs **continuously** after the `setup()` function has completed.

It contains the main logic of the Arduino program.

Example:

```
void loop() {
  digitalWrite(13, HIGH);
  delay(1000);

  digitalWrite(13, LOW);
  delay(1000);
}
```

#### `pinMode()`

The `pinMode()` function is used to configure a digital pin as an input or output.

Example:

```
void setup() {
  pinMode(13, OUTPUT);
}
```

Common modes include:

- `INPUT`
- `OUTPUT`
- `INPUT_PULLUP`

### 6. Digital Input and Output

The workshop covered digital input and output operations using functions such as:

- `digitalRead()`
- `digitalWrite()`

Example:

```
digitalWrite(13, HIGH);
digitalWrite(13, LOW);
```

`digitalWrite()` is used to set a digital output pin to `HIGH` or `LOW`.

`digitalRead()` is used to read the state of a digital input pin.

### 7. PWM (Pulse Width Modulation)

**PWM (Pulse Width Modulation)** is a technique used to control the average power supplied to devices such as LEDs and motors.

On supported Arduino Uno PWM pins, the `analogWrite()` function can be used to generate a PWM signal.

Example:

```
analogWrite(9, 128);
```

The value generally ranges from `0` to `255`.

- `0` represents 0% duty cycle.
- `255` represents 100% duty cycle.
- A value such as `128` produces approximately a 50% duty cycle.

PWM can be used for applications such as:

- Controlling LED brightness
- Controlling motor speed
- Generating variable output levels

### 8. Sensors and Actuators

The workshop introduced the concepts of **sensors** and **actuators**, which are important components of IoT systems.

#### Sensors

Sensors collect information from the physical environment.

Examples include:

- Temperature sensors
- Light sensors
- Ultrasonic sensors
- Motion sensors
- Humidity sensors

#### Actuators

Actuators perform physical actions based on commands from a control system.

Examples include:

- LEDs
- Motors
- Buzzers
- Relays
- Servos

### 9. React.js

The workshop also covered the fundamentals of **React.js** for developing interactive web interfaces.

Topics included:

- Introduction to React.js
- Components
- JSX
- Props
- State
- Event handling
- Conditional rendering
- Lists and keys
- React Hooks
- API communication
- Building interactive user interfaces

### 10. React and IoT Integration

The workshop introduced the concept of integrating **React.js with IoT systems**.

A typical IoT application can follow an architecture such as:

```
IoT Device
     ↓
Sensor / Actuator
     ↓
Microcontroller
     ↓
Backend / API
     ↓
React Frontend
     ↓
User
```

This demonstrates how data collected from physical devices can be processed and presented through a web-based interface.

## Hands-On Learning

The workshop focused on practical implementation along with theoretical concepts.

Students gained hands-on experience with:

- Setting up Arduino Uno.
- Installing and using Arduino IDE.
- Writing basic Arduino programs.
- Understanding `setup()` and `loop()`.
- Configuring pins using `pinMode()`.
- Using digital input and output.
- Working with PWM.
- Interfacing basic sensors and actuators.
- Understanding embedded programming.
- Developing basic React interfaces.
- Understanding communication between IoT devices and web applications.

## Technologies and Tools

- **Arduino Uno**
- **Arduino IDE**
- **Embedded Systems**
- **Internet of Things (IoT)**
- **React.js**
- **JavaScript**
- **HTML**
- **CSS**
- **APIs**
- **Sensors**
- **Actuators**

## Learning Outcomes

After completing the workshop, students gained practical knowledge of:

- Fundamental IoT concepts and applications.
- Embedded systems and microcontroller-based development.
- Arduino Uno hardware and programming.
- Arduino program structure using `setup()` and `loop()`.
- Digital input and output operations.
- Pin configuration using `pinMode()`.
- PWM and its practical applications.
- Sensor and actuator interfacing.
- Fundamentals of React.js development.
- Integration of IoT devices with web applications.

## Conclusion

The IoT Workshop provided a practical introduction to **Embedded Systems, Arduino Uno, IoT, and React.js**.

The combination of hardware programming and frontend development helped students understand how physical devices can collect data, perform actions, and communicate with software applications.

The workshop provided a foundation for developing IoT projects involving **microcontrollers, sensors, actuators, APIs, and web-based dashboards**.
