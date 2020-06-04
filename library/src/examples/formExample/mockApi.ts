const defaults = {
  formNumber: '0',
  firstName: 'armin',
  lastName: 'yahya',
  fromDate: '2020-02-03 00:00',
  toDate: '2020/02/02',
  status: {
    value: '1',
    label: 'accepted',
  },
  employmentType: {
    value: '1',
    label: 'contract',
  },
  gender: {
    value: '1',
    label: 'mail',
  },
  maritalStatus: {
    value: '1',
    label: 'married',
  },
  country: 'iran',
  fromBirthDate: '2020/02/02',
  toBirthDate: '2020/02/02',
  city: 'tehran',
  languageLevel: 'intermediate',
  languages: '',
};

export const fetchTableLoginFormDefaultValues = function () {
  return defaults;
  // return new Promise((resolve, reject) => {
  // 	setTimeout(() => {
  // 		resolve(defaults);
  // 	}, 0)
  // })
};
