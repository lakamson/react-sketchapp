/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-primitives';
import { spacing, colors, typeRamp, fontFamily } from '../designSystem';
import TextBox from './TextBox';
import StrengthMeter from './StrengthMeter';
import Button from './Button';

const styles = StyleSheet.create({
  register: {
    backgroundColor: colors.LightGrey,
    padding: spacing.Large,
    boxSizing: 'border-box',
  },
  heading: {
    color: colors.Purple,
    fontSize: typeRamp.Medium,
    fontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: spacing.Medium,
    width: 300,
  },
});

const Register = ({ session }) => (
  <View style={styles.register}>
    <Text style={styles.heading}>Register an Account</Text>
    <TextBox label="Email" value={session.email} type="email" />
    <TextBox label="Password" value={session.password} type="password">
      <StrengthMeter password={session.password} />
    </TextBox>
    <Button label="Register" backgroundColor={colors.Purple} />
  </View>
);

Register.defaultProps = {
  session: {
    email: '',
    password: '',
  },
};

export default Register;
