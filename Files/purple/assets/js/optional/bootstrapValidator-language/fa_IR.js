(function($) {
    /**
     * Persian (Farsi) Language package.
     * Translated by @i0
     */
    $.fn.bootstrapValidator.i18n = $.extend(true, $.fn.bootstrapValidator.i18n, {
        base64: {
            'default': 'لطفا متن کد گذاری شده base 64 صحیح وارد فرمایید'
        },
        between: {
            'default': 'لطفا یک مقدار بین %s و %s وارد فرمایید',
            notInclusive: 'لطفا یک مقدار بین فقط %s و %s وارد فرمایید'
        },
        callback: {
            'default': 'لطفا یک مقدار صحیح وارد فرمایید'
        },
        choice: {
            'default': 'لطفا یک مقدار صحیح وارد فرمایید',
            less: 'لطفا حداقل %s گزینه را انتخاب فرمایید',
            more: 'لطفا حداکثر %s گزینه را انتخاب فرمایید',
            between: 'لطفا %s - %s گزینه انتخاب فرمایید'
        },
        creditCard: {
            'default': 'لطفا یک شماره کارت اعتباری معتبر وارد فرمایید'
        },
        cusip: {
            'default': 'لطفا یک شماره CUSIP معتبر وارد فرمایید'
        },
        cvv: {
            'default': 'لطفا یک شماره CVV معتبر وارد فرمایید'
        },
        date: {
            'default': 'لطفا یک تاریخ معتبر وارد فرمایید'
        },
        different: {
            'default': 'لطفا یک مقدار متفاوت وارد فرمایید'
        },
        digits: {
             'default': 'لطفا فقط عدد وارد فرمایید'
        },
        ean: {
            'default': 'لطفا یک شماره EAN معتبر وارد فرمایید'
        },
        emailAddress: {
            'default': 'لطفا آدرس ایمیل معتبر وارد فرمایید'
        },
        file: {
            'default': 'لطفا فایل معتبر انتخاب فرمایید'
        },
        greaterThan: {
            'default': 'لطفا مقدار بزرگتر یا مساوی با %s وارد فرمایید',
            notInclusive: 'لطفا مقدار بزرگتر از %s وارد فرمایید'
        },
        grid: {
            'default': 'لطفا شماره GRId معتبر وارد فرمایید'
        },
        hex: {
            'default': 'لطفا عدد هگزادسیمال صحیح وارد فرمایید'
        },
        hexColor: {
            'default': 'لطفا رنگ hex صحیح وارد فرمایید'
        },
        iban: {
            'default': 'لطفا شماره IBAN معتبر وارد فرمایید',
            countryNotSupported: 'کد کشور %s پشتیبانی نمیشود',
            country: 'لطفا یک شماره IBAN صحیح در %s وارد فرمایید',
            countries: {
                AD: 'آندورا',
                AE: 'امارات متحده عربی',
                AL: 'آلبانی',
                AO: 'آنگولا',
                AT: 'اتریش',
                AZ: 'آذربایجان',
                BA: 'بوسنی و هرزگوین',
                BE: 'بلژیک',
                BF: 'بورکینا فاسو',
                BG: 'بلغارستان',
                BH: 'بحرین',
                BI: 'بروندی',
                BJ: 'بنین',
                BR: 'برزیل',
                CH: 'سوئیس',
                CI: 'ساحل عاج',
                CM: 'کامرون',
                CR: 'کاستاریکا',
                CV: 'کیپ ورد',
                CY: 'قبرس',
                CZ: 'جمهوری چک',
                DE: 'آلمان',
                DK: 'دانمارک',
                DO: 'جمهوری دومینیکن',
                DZ: 'الجزایر',
                EE: 'استونی',
                ES: 'اسپانیا',
                FI: 'فنلاند',
                FO: 'جزایر فارو',
                FR: 'فرانسه',
                GB: 'بریتانیا',
                GE: 'گرجستان',
                GI: 'جبل الطارق',
                GL: 'گرینلند',
                GR: 'یونان',
                GT: 'گواتمالا',
                HR: 'کرواسی',
                HU: 'مجارستان',
                IE: 'ایرلند',
                IL: 'اسرائیل',
                IR: 'ایران',
                IS: 'ایسلند',
                IT: 'ایتالیا',
                JO: 'اردن',
                KW: 'کویت',
                KZ: 'قزاقستان',
                LB: 'لبنان',
                LI: 'لیختن اشتاین',
                LT: 'لیتوانی',
                LU: 'لوکزامبورگ',
                LV: 'لتونی',
                MC: 'موناکو',
                MD: 'مولدووا',
                ME: 'مونته نگرو',
                MG: 'ماداگاسکار',
                MK: 'مقدونیه',
                ML: 'مالی',
                MR: 'موریتانی',
                MT: 'مالت',
                MU: 'موریس',
                MZ: 'موزامبیک',
                NL: 'هلند',
                NO: 'نروژ',
                PK: 'پاکستان',
                PL: 'لهستان',
                PS: 'فلسطین',
                PT: 'پرتغال',
                QA: 'قطر',
                RO: 'رومانی',
                RS: 'صربستان',
                SA: 'عربستان سعودی',
                SE: 'سوئد',
                SI: 'اسلوونی',
                SK: 'اسلواکی',
                SM: 'سان مارینو',
                SN: 'سنگال',
                TN: 'تونس',
                TR: 'ترکیه',
                VG: 'جزایر ویرجین، بریتانیا'
            }
        },
        id: {
            'default': 'لطفا شماره شناسایی صحیح وارد فرمایید',
            countryNotSupported: 'کد کشور %s پشتیبانی نمیگردد',
            country: 'لطفا یک شماره شناسایی معتبر در %s وارد کنید',
            countries: {
                BA: 'بوسنی و هرزگوین',
                BG: 'بلغارستان',
                BR: 'برزیل',
                CH: 'سوئیس',
                CL: 'شیلی',
                CN: 'چین',
                CZ: 'چک',
                DK: 'دانمارک',
                EE: 'استونی',
                ES: 'اسپانیا',
                FI: 'فنلاند',
                HR: 'کرواسی',
                IE: 'ایرلند',
                IS: 'ایسلند',
                LT: 'لیتوانی',
                LV: 'لتونی',
                ME: 'مونته نگرو',
                MK: 'مقدونیه',
                NL: 'هلند',
                RO: 'رومانی',
                RS: 'صربی',
                SE: 'سوئد',
                SI: 'اسلوونی',
                SK: 'اسلواکی',
                SM: 'سان مارینو',
                TH: 'تایلند',
                ZA: 'آفریقای جنوبی'
            }
        },
        identical: {
            'default': 'لطفا مقدار یکسان وارد فرمایید'
        },
        imei: {
            'default': 'لطفا شماره IMEI معتبر وارد فرمایید'
        },
        imo: {
            'default': 'لطفا شماره IMO معتبر وارد فرمایید'
        },
        integer: {
            'default': 'لطفا یک عدد صحیح وارد فرمایید'
        },
        ip: {
            'default': 'لطفا یک آدرس IP معتبر وارد فرمایید',
            ipv4: 'لطفا یک آدرس IPv4 معتبر وارد فرمایید',
            ipv6: 'لطفا یک آدرس IPv6 معتبر وارد فرمایید'
        },
        isbn: {
            'default': 'لطفا شماره ISBN معتبر وارد فرمایید'
        },
        isin: {
            'default': 'لطفا شماره ISIN معتبر وارد فرمایید'
        },
        ismn: {
            'default': 'لطفا شماره ISMN معتبر وارد فرمایید'
        },
        issn: {
            'default': 'لطفا شماره ISSN معتبر وارد فرمایید'
        },
        lessThan: {
            'default': 'لطفا مقدار کمتر یا مساوی با %s وارد فرمایید',
            notInclusive: 'لطفا مقدار کمتر از %s وارد فرمایید'
        },
        mac: {
            'default': 'لطفا یک MAC address معتبر وارد فرمایید'
        },
        meid: {
            'default': 'لطفا یک شماره MEID معتبر وارد فرمایید'
        },
        notEmpty: {
            'default': 'لطفا یک مقدار وارد فرمایید'
        },
        numeric: {
            'default': 'لطفا یک عدد اعشاری صحیح وارد فرمایید'
        },
        phone: {
            'default': 'لطفا یک شماره تلفن صحیح وارد فرمایید',
            countryNotSupported: 'کد کشور %s پشتیبانی نمیشود',
            country: 'لطفا یک شماره تلفن معتبر وارد کنید در %s',
            countries: {
                BR: 'برزیل',
                CN: 'کشور چین',
                CZ: 'چک',
                DK: 'دانمارک',
                ES: 'اسپانیا',
                FR: 'فرانسه',
                GB: 'بریتانیا',
                MA: 'مراکش',
                PK: 'پاکستان',
                RO: 'رومانی',
                RU: 'روسیه',
                SK: 'اسلواکی',
                TH: 'تایلند',
                US: 'ایالات متحده آمریکا',
                VE: 'ونزوئلا'
            }
        },
        regexp: {
            'default': 'لطفا یک مقدار مطابق با الگو وارد فرمایید'
        },
        remote: {
            'default': 'لطفا یک مقدار معتبر وارد فرمایید'
        },
        rtn: {
            'default': 'لطفا یک شماره RTN صحیح وارد فرمایید'
        },
        sedol: {
            'default': 'لطفا یک شماره SEDOL صحیح وارد فرمایید'
        },
        siren: {
            'default': 'لطفا یک شماره SIREN صحیح وارد فرمایید'
        },
        siret: {
            'default': 'لطفا یک شماره SIRET صحیح وارد فرمایید'
        },
        step: {
            'default': 'لطفا یک گام صحیح از %s وارد فرمایید'
        },
        stringCase: {
            'default': 'لطفا فقط حروف کوچک وارد فرمایید',
            upper: 'لطفا فقط حروف بزرگ وارد فرمایید'
        },
        stringLength: {
            'default': 'لطفا یک مقدار با طول صحیح وارد فرمایید',
            less: 'لطفا کمتر از %s حرف وارد فرمایید',
            more: 'لطفا بیش از %s حرف وارد فرمایید',
            between: 'لطفا مقداری بین %s و %s حرف وارد فرمایید'
        },
        uri: {
            'default': 'لطفا یک آدرس URI صحیح وارد فرمایید'
        },
        uuid: {
            'default': 'لطفا یک شماره UUID معتبر وارد فرمایید',
            version: 'لطفا یک نسخه UUID صحیح %s شماره وارد فرمایید'
        },
        vat: {
            'default': 'لطفا یک شماره VAT صحیح وارد فرمایید',
            countryNotSupported: 'کد کشور %s پشتیبانی نمیگردد',
            country: 'لطفا یک شماره VAT معتبر در %s وارد کنید',
            countries: {
                AT: 'اتریش',
                BE: 'بلژیک',
                BG: 'بلغارستان',
                BR: 'برزیل',
                CH: 'سوئیس',
                CY: 'قبرس',
                CZ: 'چک',
                DE: 'آلمان',
                DK: 'دانمارک',
                EE: 'استونی',
                ES: 'اسپانیا',
                FI: 'فنلاند',
                FR: 'فرانسه',
                GB: 'بریتانیا',
                GR: 'یونان',
                EL: 'یونان',
                HU: 'مجارستان',
                HR: 'کرواسی',
                IE: 'ایرلند',
                IS: 'ایسلند',
                IT: 'ایتالیا',
                LT: 'لیتوانی',
                LU: 'لوکزامبورگ',
                LV: 'لتونی',
                MT: 'مالت',
                NL: 'هلند',
                NO: 'نروژ',
                PL: 'لهستانی',
                PT: 'پرتغال',
                RO: 'رومانی',
                RU: 'روسیه',
                RS: 'صربستان',
                SE: 'سوئد',
                SI: 'اسلوونی',
                SK: 'اسلواکی',
                VE: 'ونزوئلا',
                ZA: 'آفریقای جنوبی'
            }
        },
        vin: {
            'default': 'لطفا یک شماره VIN صحیح وارد فرمایید'
        },
        zipCode: {
            'default': 'لطفا یک کدپستی صحیح وارد فرمایید',
            countryNotSupported: 'کد کشور %s پشتیبانی نمیگردد',
            country: 'لطفا یک کد پستی معتبر در %s وارد کنید',
            countries: {
                BR: 'برزیل',
                CA: 'کانادا',
                CZ: 'چک',
                DK: 'دانمارک',
                GB: 'بریتانیا',
                IT: 'ایتالیا',
                MA: 'مراکش',
                NL: 'هلند',
                RO: 'رومانی',
                RU: 'روسیه',
                SE: 'سوئد',
                SG: 'سنگاپور',
                SK: 'اسلواکی',
                US: 'ایالات متحده'
            }
        }
    });
}(window.jQuery));
