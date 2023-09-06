export const combineInternationalPhoneNumber = (
  countryCode: string,
  phoneNumber: string,
  withPrefix?: boolean
) => {
  if (withPrefix) return `+${countryCode}-${phoneNumber}`;
  return `${countryCode}-${phoneNumber}`;
};

export const removeLeadingZeroFromPhoneNumber = ({ value }: { value: string }): string => {
  if (!value) {
    return value;
  }
  const [plusCountryCode, number] = value.split('-');
  return `${plusCountryCode}-${+number}`;
};
