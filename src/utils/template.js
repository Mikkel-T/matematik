import pupa from 'pupa';

export default function t(template, data) {
  return pupa(template, data, {
    ignoreMissing: true,
    transform: ({ value }) => value || '0',
  });
}
