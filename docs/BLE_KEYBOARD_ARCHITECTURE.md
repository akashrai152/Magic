# BLE Keyboard Architecture Documentation

## Overview
This document provides a comprehensive overview of the architecture for the BLE Keyboard implementation.

### GATT Service Structures and UUIDs
- **GATT Services:**
  - **Battery Service (UUID: 0x180F)**
      - Characteristics: Battery Level (UUID: 0x2A19)
  - **Device Information Service (UUID: 0x180A)**
      - Characteristics: Manufacturer Name (UUID: 0x2A29), Model Number (UUID: 0x2A24)
  - **HID Service (UUID: 0x1812)**
      - Characteristics: HID Report (UUID: 0x2A4D)

### HID Report Format
- The HID Report follows the 8-byte USB standard format:
  - Byte 0: Modifier keys (Ctrl, Shift, Alt)
  - Byte 1: Reserved
  - Byte 2: Keycode 1
  - Byte 3: Keycode 2
  - Byte 4: Keycode 3
  - Byte 5: Keycode 4
  - Byte 6: Keycode 5
  - Byte 7: Keycode 6

### Keycodes for 100+ Characters
| Character | Keycode |
|-----------|---------|
| A         | 0x04    |
| B         | 0x05    |
| C         | 0x06    |
| ...       | ...     |
| Z         | 0x19    |
| 0         | 0x27    |
| 1         | 0x1E    |
| ...       | ...     |
| ?         | 0x4C    |

(Include all keycodes for 100+ characters)

### BLEKeyboardManager Singleton Pattern
- **Design Pattern:** Singleton
- **Purpose:** Ensures a single instance of the BLEKeyboardManager handles BLE interactions.
- **Implementation Basics:**
  ```
  class BLEKeyboardManager {
      private static BLEKeyboardManager instance;
      // Constructor and methods here
  }
  ```

### React Native Bridge
- **Integration:** The React Native bridge allows for communicating with the native BLE layers.
- **Setup:** Instructions for setting up the bridge should be provided.

### Performance Metrics
- **Key Throttle:** 60 keys/second
- **Key Duration:** 15ms

### Connection Lifecycle
- **States:**
  - Disconnected
  - Connecting
  - Connected
  - Disconnecting
- **Handler Methods:** Implement methods to handle each state transition.

### Entitlements and Provisioning Requirements
- **Entitlements:** Required for BLE access in iOS apps.
- **Provisioning:** Guidelines for provisioning devices must be defined.

### Testing Checklist
- Test BLE connection stability.
- Verify HID report format.
- Ensure performance metrics are achieved.
- Validate keycode mappings.
- Conduct stress tests (60 keys/second).

### MFi Migration Path
- **Overview:** Steps to migrate to the MFi program for future iOS native pairing:
  - Implement required entitlements.
  - Adjust the provisioning process as per MFi requirements.
  - Update documentation for MFi compliance.

## Conclusion
This documentation will serve as a guide for developers working with the BLE Keyboard implementation, ensuring a streamlined understanding of the architecture and requirements.