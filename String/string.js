export const ucWords = string => {
	return String(string).toLowerCase()
	.replace(/\b[a-z]/g, (l) => l.toUpperCase())
}
ucWords('uc words test'); //'Uc Words Test'

export const ucFirst = string => {
	if (string) {
		return String(string)[0].toUpperCase() + String(string).substring(1)
	}
}
ucFirst('ucFirst'); //'UcFirst'

export const pascalCase = string => {
	string = String(string).replace('-', ' ');
	string = string.replace('_', ' ');
	return string.split(' ')
	.map(str => str[0].toUpperCase() + str.substr(1).toLowerCase())
	.join('')
}
pascalCase('test_object'); //'TestObject'
pascalCase('test object'); //'TestObject'
pascalCase('Test Object'); //'TestObject'
pascalCase('test object'); //'TestObject'
pascalCase('TEST OBJECT'); //'TestObject'
pascalCase('Test object'); //'TestObject'
pascalCase('testObject'); //'Testobject'

export const snakeCase = (string, glue = '_') => {
	return string.replace(/\W+/g, " ")
	.split(/ |\B(?=[A-Z])/)
	.map(word => word.toLowerCase())
	.join(glue);
};
snakeCase('apple-banana-test'); //'apple_banana_test'


export const kebabCase = string => {
	return snakeCase(string, '-');
};
kebabCase('kebabCaseTest');  //'kebab-case-test'
kebabCase('kebab-case-test'); //'kebab-case-test'

export const objectToQueryString = queryParameters => {
	return queryParameters
		? Object.entries(queryParameters).reduce(
			(queryString, [key, val], index) => {
				const symbol = queryString.length === 0 ? '?' : '&';
				queryString +=
					typeof val === 'string' ? `${symbol}${key}=${val}` : '';
				return queryString;
			},
			''
		)
		: '';
};
objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'

export const textTruncate = (str, length = null, ending = null) => {
	if (length == null) {
		length = 50;
	}
	if (ending == null) {
		ending = '...';
	}
	if (str.length > length) {
		return str.substring(0, length) + ending;
	} else {
		return str;
	}
};
textTruncate('abcdefghijklmnopqrstuvwxyz', 3, '...'); // 'abc...'

export const getURLParameters = (url) => {
	return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((key, value) => {
		return (key[value.slice(0, value.indexOf('='))] = value.slice(value.indexOf('=') + 1)), key
	},{})
};

getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
