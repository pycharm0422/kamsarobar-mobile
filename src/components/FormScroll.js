import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

/**
 * A scrolling form that keeps the field you're typing in (and the cursor of a long text) above the keyboard.
 * The app draws edge-to-edge, so Android no longer shrinks the screen for the keyboard by itself.
 */
export default function FormScroll({ children, ...props }) {
  return (
    <KeyboardAwareScrollView bottomOffset={24} keyboardShouldPersistTaps="handled" {...props}>
      {children}
    </KeyboardAwareScrollView>
  );
}
