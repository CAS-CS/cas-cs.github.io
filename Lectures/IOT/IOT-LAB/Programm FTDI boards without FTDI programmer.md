# Programm FTDI boards without FTDI programmer 
## Using arduino uno or esp8266

To program an FTDI board like the ESP-01 without an FTDI programmer, you can use an Arduino UNO or an ESP8266 as a USB-to-Serial converter. Here's the process to bypass/reset the Arduino UNO or ESP8266 and establish communication using the appropriate pins:

**Using Arduino UNO as USB-to-Serial Converter:**

**Step 1: Gather the Required Materials**
- Arduino UNO
- ESP-01 module
- Jumper wires

**Step 2: Connect the Arduino UNO to the ESP-01**
1. Connect the Arduino UNO and the ESP-01 as follows:
   - Arduino UNO 5V to ESP-01 VCC
   - Arduino UNO GND to ESP-01 GND
   - Arduino UNO RX (pin 0) to ESP-01 TX
   - Arduino UNO TX (pin 1) to ESP-01 RX

**Step 3: Prepare Arduino UNO for Bypassing/Resetting**
1. Disconnect the Arduino UNO from the computer.
2. Short the RESET pin on the Arduino UNO to the GND pin using a jumper wire or push-button switch. This bypasses the Arduino's microcontroller, allowing it to act as a USB-to-Serial converter.

**Step 4: Program the ESP-01**
1. Connect the Arduino UNO to your computer via USB.
2. Open the Arduino IDE.
3. Select the appropriate board (Arduino UNO) and port from the Tools menu.
4. Write or open the sketch you want to upload to the ESP-01.
5. Click on the upload button in the IDE to compile and upload the sketch to the ESP-01.
6. Once the upload is complete, disconnect the RESET pin from the GND pin on the Arduino UNO to return it to normal operation.

That's it! The ESP-01 should now be programmed using the Arduino UNO as a USB-to-Serial converter. Ensure that you have selected the correct board and port settings, and verify the functionality of the programmed ESP-01 as desired.

**Using ESP8266 as USB-to-Serial Converter:**

**Step 1: Gather the Required Materials**
- ESP8266 module (e.g., ESP-01)
- Jumper wires

**Step 2: Connect the ESP8266 to the ESP-01**
1. Connect the ESP8266 and the ESP-01 as follows:
   - ESP8266 3.3V to ESP-01 VCC
   - ESP8266 GND to ESP-01 GND
   - ESP8266 RX (GPIO3 or RXD) to ESP-01 TX
   - ESP8266 TX (GPIO1 or TXD) to ESP-01 RX

**Step 3: Prepare ESP8266 for Bypassing/Resetting**
1. Disconnect the ESP8266 from any power source (e.g., remove power from the VCC pin).
2. Connect the GPIO0 pin of the ESP8266 to GND using a jumper wire or push-button switch. This puts the ESP8266 into programming mode.

**Step 4: Program the ESP-01**
1. Connect the ESP8266 to your computer via USB.
2. Open the Arduino IDE or your preferred programming environment.
3. Select the appropriate board (e.g., Generic ESP8266 Module) and port from the Tools menu.
4. Write or open the sketch you want to upload to the ESP-01.
5. Click on the upload button in the IDE to compile and upload the sketch to the ESP-01.
6. Once the upload is complete, disconnect GPIO0 from GND to return the ESP