import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const currency = (opts = {
  thousandsSeparatorSymbol: '.',
  decimalSymbol: ',',
}) => {
  const decimalsRegex = new RegExp(`${opts.decimalSymbol}([0-9]{1,2})`);
  const numberMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    allowDecimal: true,
    requireDecimal: true,
    allowLeadingZeroes: false,
    ...opts,
  });

  return (rawValue) => {
    const mask = numberMask(rawValue);
    const decimals = decimalsRegex.exec(rawValue);

    // In case there is only one decimal
    if (decimals && decimals[1].length < 2) {
      mask.push('0');
    } else if (!decimals) {
      mask.push('0');
      mask.push('0');
    }

    return mask;
  };
};

export default { currency };
