import { NativeModules } from 'react-native';

const { BleKeyboardModule } = NativeModules;

// Fallback mock implementation for web platform
const isWeb = typeof window !== 'undefined';

const BleKeyboardService = isWeb ? {
  // Mock methods for web
  someMethod: () => {
    console.log('This is a mock implementation for the web.');
  },
  // Add more methods as needed
} : BleKeyboardModule;

export default BleKeyboardService;
