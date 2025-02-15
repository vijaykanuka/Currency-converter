const country = {
    "IN": { "name": "India", "currency": "INR" },
    "US": { "name": "United States", "currency": "USD" },
    "CA": { "name": "Canada", "currency": "CAD" },
    "GB": { "name": "United Kingdom", "currency": "GBP" },
    "FR": { "name": "France", "currency": "EUR" },
    "DE": { "name": "Germany", "currency": "EUR" },
    "JP": { "name": "Japan", "currency": "JPY" },
    "CN": { "name": "China", "currency": "CNY" },
    "BR": { "name": "Brazil", "currency": "BRL" },
    "ZA": { "name": "South Africa", "currency": "ZAR" },
    "AU": { "name": "Australia", "currency": "AUD" },
    "IT": { "name": "Italy", "currency": "EUR" },
    "RU": { "name": "Russia", "currency": "RUB" },
    "ES": { "name": "Spain", "currency": "EUR" },
    "MX": { "name": "Mexico", "currency": "MXN" },
    "KR": { "name": "South Korea", "currency": "KRW" },
    "SE": { "name": "Sweden", "currency": "SEK" },
    "NO": { "name": "Norway", "currency": "NOK" },
    "FI": { "name": "Finland", "currency": "EUR" },
    "CH": { "name": "Switzerland", "currency": "CHF" },
    "NL": { "name": "Netherlands", "currency": "EUR" },
    "BE": { "name": "Belgium", "currency": "EUR" },
    "AT": { "name": "Austria", "currency": "EUR" },
    "PT": { "name": "Portugal", "currency": "EUR" },
    "PL": { "name": "Poland", "currency": "PLN" },
    "DK": { "name": "Denmark", "currency": "DKK" },
    "IE": { "name": "Ireland", "currency": "EUR" },
    "GR": { "name": "Greece", "currency": "EUR" },
    "TR": { "name": "Turkey", "currency": "TRY" },
    "SA": { "name": "Saudi Arabia", "currency": "SAR" },
    "AR": { "name": "Argentina", "currency": "ARS" },
    "CL": { "name": "Chile", "currency": "CLP" },
    "CO": { "name": "Colombia", "currency": "COP" },
    "NG": { "name": "Nigeria", "currency": "NGN" },
    "EG": { "name": "Egypt", "currency": "EGP" },
    "KE": { "name": "Kenya", "currency": "KES" },
    "SG": { "name": "Singapore", "currency": "SGD" },
    "MY": { "name": "Malaysia", "currency": "MYR" },
    "TH": { "name": "Thailand", "currency": "THB" },
    "VN": { "name": "Vietnam", "currency": "VND" },
    "PH": { "name": "Philippines", "currency": "PHP" },
    "ID": { "name": "Indonesia", "currency": "IDR" },
    "NZ": { "name": "New Zealand", "currency": "NZD" },
    "UA": { "name": "Ukraine", "currency": "UAH" },
    "HU": { "name": "Hungary", "currency": "HUF" },
    "CZ": { "name": "Czech Republic", "currency": "CZK" },
    "RO": { "name": "Romania", "currency": "RON" },
    "SK": { "name": "Slovakia", "currency": "EUR" },
    "BG": { "name": "Bulgaria", "currency": "BGN" },
    "HR": { "name": "Croatia", "currency": "HRK" },
    "RS": { "name": "Serbia", "currency": "RSD" },
    "SI": { "name": "Slovenia", "currency": "EUR" },
    "MK": { "name": "North Macedonia", "currency": "MKD" },
    "ME": { "name": "Montenegro", "currency": "EUR" },
    "AL": { "name": "Albania", "currency": "ALL" },
    "BY": { "name": "Belarus", "currency": "BYN" },
    "IS": { "name": "Iceland", "currency": "ISK" },
    "MT": { "name": "Malta", "currency": "EUR" },
    "CY": { "name": "Cyprus", "currency": "EUR" },
    "LU": { "name": "Luxembourg", "currency": "EUR" },
    "LV": { "name": "Latvia", "currency": "EUR" },
    "LT": { "name": "Lithuania", "currency": "EUR" },
    "EE": { "name": "Estonia", "currency": "EUR" },
    "QA": { "name": "Qatar", "currency": "QAR" },
    "KW": { "name": "Kuwait", "currency": "KWD" },
    "BH": { "name": "Bahrain", "currency": "BHD" },
    "OM": { "name": "Oman", "currency": "OMR" },
    "IL": { "name": "Israel", "currency": "ILS" },
    "JO": { "name": "Jordan", "currency": "JOD" },
    "LB": { "name": "Lebanon", "currency": "LBP" },
    "IQ": { "name": "Iraq", "currency": "IQD" },
    "IR": { "name": "Iran", "currency": "IRR" },
    "SY": { "name": "Syria", "currency": "SYP" },
    "YE": { "name": "Yemen", "currency": "YER" },
    "AF": { "name": "Afghanistan", "currency": "AFN" },
    "PK": { "name": "Pakistan", "currency": "PKR" },
    "BD": { "name": "Bangladesh", "currency": "BDT" },
    "LK": { "name": "Sri Lanka", "currency": "LKR" },
    "NP": { "name": "Nepal", "currency": "NPR" },
    "BT": { "name": "Bhutan", "currency": "BTN" },
    "MV": { "name": "Maldives", "currency": "MVR" },
    "MM": { "name": "Myanmar", "currency": "MMK" },
    "KH": { "name": "Cambodia", "currency": "KHR" },
    "LA": { "name": "Laos", "currency": "LAK" },
    "MN": { "name": "Mongolia", "currency": "MNT" },
    "KZ": { "name": "Kazakhstan", "currency": "KZT" },
    "UZ": { "name": "Uzbekistan", "currency": "UZS" },
    "TM": { "name": "Turkmenistan", "currency": "TMT" },
    "TJ": { "name": "Tajikistan", "currency": "TJS" },
    "KG": { "name": "Kyrgyzstan", "currency": "KGS" },
    "AM": { "name": "Armenia", "currency": "AMD" },
    "GE": { "name": "Georgia", "currency": "GEL" },
    "AZ": { "name": "Azerbaijan", "currency": "AZN" },
    "ET": { "name": "Ethiopia", "currency": "ETB" },
    "UG": { "name": "Uganda", "currency": "UGX" },
    "TZ": { "name": "Tanzania", "currency": "TZS" },
    "GH": { "name": "Ghana", "currency": "GHS" },
    "CI": { "name": "Ivory Coast", "currency": "XOF" },
    "SN": { "name": "Senegal", "currency": "XOF" },
    "MA": { "name": "Morocco", "currency": "MAD" },
    "DZ": { "name": "Algeria", "currency": "DZD" },
    "TN": { "name": "Tunisia", "currency": "TND" },
    "LY": { "name": "Libya", "currency": "LYD" }
};

//
export default country;