interface questions {
    idq?: number;
    str?: string;
    values?: string[];
}

interface DataTableInterface {
    id?: number;
    title?: string;
    'questions'?: questions[];
}

const DataTableValues: DataTableInterface[] = [
    {
        'id': 1,
        'title': 'اطلاعات مدیریتی',
        'questions': [
            {
                idq: 1,
                str: 'ثبت کننده اطلاعات',
                'values': null
            },
            {
                idq: 2,
                str: 'منبع  ثبت اسیب(مثل: بیمارستان، کلینیک پزشکی ورزشی و سایر، سوابق بیمه، سوابق مدرسه و ...)',
                'values': null
            },
            {
                idq: 3,
                str: 'تاریخ آسیب (روز/ماه/سال)',
                'values': null
            },
            {
                idq: 4,
                str: 'زمان آسیب(در 24 ساعت ساعت/دقیقه، صبح/عصر)، فصل مسابقات( قبل/بعد/ حین)',
                'values': null
            },
            {
                idq: 5,
                str: 'تاریخ ثبت آسیب',
                'values': null
            },
            {
                idq: 6,
                str: 'نوع بیمه ورزشی',
                'values': null
            },
            {
                idq: 7,
                str: 'روز عادی یا تعطیل رسمی',
                'values': null
            },
        ]
    },
    {
        'id': 2,
        'title': 'داده های دموگرافیک و شخصی فرد آسیب دیده',
        'questions': [
            {
                idq: 1,
                str: 'شماره ثبت',
                'values': null
            },
            {
                idq: 2,
                str: 'کد ملی',
                'values': null
            },
            {
                idq: 3,
                str: 'سن',
                'values': null
            },
            {
                idq: 4,
                str: 'قد',
                'values': null
            },
            {
                idq: 5,
                str: 'وزن',
                'values': null
            },
            {
                idq: 6,
                str: 'جنس',
                'values': null
            },
            {
                idq: 7,
                str: 'استان محل سکونت',
                'values': null
            },
            {
                idq: 8,
                str: 'شهر محل سکونت',
                'values': null
            },
            {
                idq: 9,
                str: 'سطح رقابت/تمرین(نخبه، آماتور، ورزشکاران تفریحی)،',
                'values': null
            },
            {
                idq: 10,
                str: 'اطلاعات تماس(شماره تلفن، شماره تلفن جایگزین)،',
                'values': null
            },
            {
                idq: 11,
                str: 'وضعیت تاهل',
                'values': null
            },
            {
                idq: 12,
                str: 'تحصیلات',
                'values': null
            },
            {
                idq: 13,
                str: 'سال تحصیلی',
                'values': null
            },
            {
                idq: 14,
                str: 'ملیت',
                'values': null
            },
            {
                idq: 15,
                str: 'اطلاعات پستی محل سکونت',
                'values': null
            },
            {
                idq: 16,
                str: 'شماره پرونده بیمارستانی',
                'values': null
            },
        ]
    },
    {
        'id': 3,
        'title': 'مکان آسیب',
        'questions': [
            {
                idq: 1,
                str: 'نام مکان اسیب(متن)',
                'values': null
            },
            {
                idq: 2,
                str: 'نوع مکان آسیب (مراکز ورزشی، خانه، بیمارستان، موسسه اقامتی، مرکز تفریحی، خیابان، مدرسه و ...)',
                'values': null
            },
            {
                idq: 3,
                str: 'نوع مکان ورزشی ',
                'values': null
            },
            {
                idq: 4,
                str: 'مکان ورزشی سرپوشیده یا بیرونی',
                values: null
            },
            {
                idq: 5,
                str: 'بخش خاصی از مکان اسیب(جزئیات مربوط به مکان آسیب)',
                values: null
            },
        ]
    },
    {
        id: 4,
        title: 'ویژگیهای اسیب (پاتولوژی)',
        questions: [
            {
                idq: 1,
                str: 'طبقه بندی مناطق بدن',
                values: null
            },
            {
                idq: 2,
                str: 'سمت اسیب',
                values: null
            },
            {
                idq: 3,
                str: 'نوع اسیب',
                values: null
            },
            {
                idq: 4,
                str: 'حالت شروع آسیب(حاد، مزمن، ترکیبی)',
                values: null
            },
            {
                idq: 5,
                str: 'طبقه بندی مکانیسم اسیب(برخوردی، غیر برخوردی)',
                values: null
            },
        ]
    },
    {
        id: 5,
        title: 'شدت آسیب ( شدت آسیب بر اساس کدام یک از شدت های زیر محاسبه شود؟)',
        questions: [
            {
                idq: 1,
                str: 'مدت زمان دورافتادگی از ورزش و فعالیت TIME LOSS',
                values: null
            },
            {
                idq: 2,
                str: 'استفاده از شاخص شدت ورزش (SSI)',
                values: null
            },
            {
                idq: 3,
                str: 'با استفاده از مقیاس آسیب مختصر (AIS)abbreviated injury scale',
                values: null
            },
            {
                idq: 4,
                str: 'بر اساس نوع اسیب( کشیدگی، پارگی و ...)',
                values: null
            },
        ]
    },
    {
        id: 6,
        title: 'گزارش ورزشکار در معرض اسیب (نوع در معرض)',
        questions: [
            {
                idq: 1,
                str: 'تعداد جلسات تمرین در هفته',
                values: null
            },
            {
                idq: 2,
                str: 'تعداد مسابقات در هفته',
                values: null
            },
            {
                idq: 3,
                str: 'تعداد دقایق تمرین در هفته',
                values: null
            },
            {
                idq: 4,
                str: 'تعداد دقایق مسابقه در هفته',
                values: null
            },
            {
                idq: 5,
                str: 'تعداد شرکت کنندگان در هر جلسه تمرین در هفته',
                values: null
            },
            {
                idq: 6,
                str: 'تعداد شرکت کنندگان در هر مسابقه در هفته',
                values: null
            },
        ]
    },
    {
        id: 7,
        title: 'ارتباط آسیب با فعالیت بدنی',
        questions: [
            {
                idq: 1,
                str: 'ارتباط آسیب با فعالیت بدنی(مستقیم، عیر مستقیم)',
                values: null
            },
        ]
    },
    {
        id: 8,
        title: 'متغیرهای مورد نیاز برای گزارش شیوع و بروز و بارآسیب' ,
        questions: [
            {
                idq: 1,
                str: 'تعداد اسیب',
                values: null
            },
            {
                idq: 2,
                str: 'تعداد ورزشکاران اسیب دیده',
                values: null
            },
            {
                idq: 3,
                str: 'اسیب جدید',
                values: null
            },
            {
                idq: 4,
                str: 'اسیب متعاقب: همان موضع ولی تشخیص متفاوت با اسیب اول',
                values: null
            },
            {
                idq: 5,
                str: 'اسیب مجدد: همان موضع و همان تشخیص',
                values: null
            },
            {
                idq: 6,
                str: 'عود و بدتر شدن',
                values: null
            },
            {
                idq: 7,
                str: 'تعداد روزهای time loss',
                values: null
            },
        ]
    },
    {
        id: 9,
        title: 'کد تشخیص آسیبهای ورزشی و کد تشخیص علل خارجی آسیب با استفاده از سیستمهای طبقه بندی زیر',
        questions: [
            {
                idq: 1,
                str: 'سیسنم طبقه بندی بین المللی بیماریها (ICD)',
                values: null
            },
            {
                idq: 2,
                str: 'سیستم کدگذاری اسیب ورزشی ارچارد(OSICS)',
                values: null
            },
            {
                idq: 3,
                str: 'سیستم کدگزاری تشخیص اسیب ورزشی میوایز(SMDCS)',
                values: null
            },
            {
                idq: 4,
                str: 'دیکشنری اسیب های ورزشی استرالیا(ASIDD)',
                values: null
            },
        ]
    },
    {
        id: 10,
        title: 'طبقه بندی گروه های ورزشی',
        questions: [
            {
                idq: 1,
                str: 'نوع فعالیت موقع اسیب ( حرفه ای، آماتور، ورزش سازمان یافته، غیر سازمان یافته، اوقات فراغت، اموزش و پرورش، سایر)',
                values: null
            },

            {
                idq: 2,
                str: 'نوع فعالیت ورزشی/تمرین(شمل لیست کامل انواع ورزشهای تیمی و انفرادی)',
                values: [
                    'لیست ورزشهای تیمی با توپ',
                    'لیست سایر فعالیت های تفریحی مرتبط با مدرسه',
                ]
            },
            {
                idq: 3,
                str:'مرحله فعالیت',
                values: [
                    'مرحله آموزش/ تمرین',
                    'قبل از رویداد: هر فعالیتی که پس از انتقال به یک رویداد اما قبل از گرم کردن رخ می دهد.' +
                    'شامل: لباس پوشیدن، تیپینگ، دوش گرفتن',
                    'گرم کردن: هر گونه فعالیت بدنی که برای گرم کردن عضلات بلافاصله قبل از مسابقه یا شرکت انجام می' +
                    ' شود:' +
                    'شامل: تمرینات کششی، جاگینگ، تمرین ان ورزش با دیگران بصورت سبک',
                    'رقابت/مشارکت ' +
                    'اگر رویدادی شروع و پایان برنامه ریزی شده ای داشته باشد',
                    '  سرد کردن: هر گونه فعالیت بدنی که برای خنک کردن عضلات بلافاصله پس از شرکت یا مسابقه انجام می شود',
                    'پس از رویداد: هر فعالیتی که پس از خنک شدن اما قبل از انتقال به دور از رویداد رخ می دهد' +
                    'شامل :' +
                    ' دوش گرفتن، لباس پوشیدن',
                    ' مشارکت تفریحی: برای آسیب‌هایی که در طول فعالیت‌ها رخ می‌دهد بدون اینکه مرز مشخصی بین آموزش/تمرین (1) و مسابقه/شرکت وجود داشته باشد. ' +
                    'شامل: دویدن، پیاده روی، دوچرخه سواری غیررقابتی',
                ]
            },
        ]
    },
    {
        id: 11,
        title: 'درجه یا سطح فعالیت',
        questions: [
            {
                idq: 1,
                str: 'بر اساس گروه سنی(کودکی، جوانی، بزرگسالی)',
                values: [
                    'کودکی\n' +
                    'شامل: کودکی، نوجوانی\n',
                    'جوانی\n' +
                    ' 20 تا 40 سالگی\n',
                    'بزرگسالی\n' +
                    '41 به بالا\n',

                ]
            },
            {
                idq: 2,
                str: 'بر اساس نخبه و غیر نخبه',
                values: [
                    'کودکی',
                    'جوانی',
                    'بزرگسالی'
                ]
            },
        ]
    },
    {
        id: 12,
        title: 'منبع/منابع استفاده داده',
        questions: [
            {
                idq: 1,
                str: 'گزارش خود ورزشکار',
                values: null
            },
            {
                idq: 2,
                str: 'پرونده پزشکی',
                values: null
            },
            {
                idq: 3,
                str: 'معاینات',
                values: null
            },
            {
                idq: 4,
                str: 'ضبط ویدئو',
                values: null
            },


        ]
    },
    {
        id: 13,
        title: 'فاکتورهای اسیب: انواع اشیا، مواد و عوامل محیطی دخیل در بروز آسیب.',
        questions: [
            {
                idq: 1,
                str: 'تجهیزات ورزشی( لیستی  شامل توپ، راکت، چوب بازی و ...)',
                values: null
            },
            {
                idq: 2,
                str: 'اشیا طبیعی یا حیوانی(لیستی شامل درخت، گیاه، اسب، عوامل اقلیمی مثل باد، باران، برف و ....)',
                values: null
            },
            {
                idq: 3,
                str: 'جنس سطح بازی( شامل لیستی از انواع سطح بازی رو باز و سر پوشیده)',
                values: null
            },
            {
                idq: 4,
                str: 'عوامل محیطی( لیستی از وضعیت هوا و شرایط زمین بازی)',
                values: null
            },
        ]
    },
    {
        id: 14,
        title: 'اقدامات متقابل شخصی برای محافظت از اسیب',
        questions: [
            {
                idq: 1,
                str: 'اقدامات متقابل شخصی برای محافظت از اسیب(لیست وسایل حفاظتی و حمایتی)',
                values: null
            },
        ]
    },
    {
        id: 15,
        title: 'اقدامات متقابل زیست محیطی( مثل فنس، محافظ تیرک های دروازه، نشانگرهای کرنرو...)',
        questions: [
            {
                idq: 1,
                str: 'اقدامات محافظتی محیطی اسیب',
                values: null
            },
        ]
    },
    {
        id: 16,
        title: 'قصد و نیت: نقش هدف انسان در رویداد آسیب',
        questions: [
            {
                idq: 1,
                str: 'قصد و نیت: نقش هدف انسان در رویداد آسیب( عمد و غیر عمد)',
                values: null
            },
        ]
    },
    {
        id: 17,
        title: 'مکانیسم اسیب: روشی که در آن جراحت وارد شده است (یعنی چگونه فرد آسیب دیده است).',
        questions: [
            {
                idq: 1,
                str: 'افتادن(شامل لیست انواع افتادن در سطوع همسطح و غیر همسطح)',
                values: null
            },
            {
                idq: 2,
                str: 'ضربه یا تصادف با اشیا، انسان یا حیوان',
                values: null
            },
            {
                idq: 3,
                str: 'خرد کردن، سوراخ کردن، سایش',
                values: null
            },
            {
                idq: 4,
                str: 'خفگی',
                values: null
            },
            {
                idq: 5,
                str: 'فشار بیش از حد تدریجی یا مزمن بدن یا بخشی از بدن( ضربه های مکرر، استفاده بیش از حد، فعالیت بیش از حد تدریجی یا مزمن)',
                values: null
            },
            {
                idq: 6,
                str: 'اعمال بیش از حد حاد بدن یا بخشی از بدن',
                values: null
            },


        ]
    },
    {
        id: 18,
        title: 'شرح مکانیسم اسیب: نحوه وقوع اسیب را دقیقاً شرح دهید',
        questions: [
            {
                idq: 1,
                str: 'شرح مکانیسم اسیب: نحوه وقوع اسیب را دقیقاً شرح دهید',
                values: null
            },
        ]

    },
    {
        id: 19,
        title: 'تشخیص خود را بطور مختصر توضیح دهید.',
        questions: [
            {
                idq: 1,
                str: 'تشخیص خود را بطور مختصر توضیح دهید.',
                values: null
            },
        ]
    },
    {
        id: 20,
        title: 'فاکتورهای درمان: ',
        questions: [
            {
                idq: 1,
                str: 'نوع درمان',
                values: null
            },
            {
                idq: 2,
                str: 'تاریخ درمان اسیب بصورت: DD/MM/YYYY',
                values: null
            },
            {
                idq: 3,
                str: 'زمان ارایه درمان: زمانی که فرد آسیب دیده تحت درمان یا ارزیابی آسیب خود قرار گرفته است باید با استفاده از ساعت 24 ساعته ثبت شود.',
                values: null
            },
            {
                idq: 3,
                str: 'دلیل معرفی:',
                values: [
                    'مصدومیت جدید',
                    'آسیب مکرر',
                    'تشدید آسیب',
                    'درمان مداوم (کلینیک یا محیط بازی)',
                    'سایر',
                    'ناشناخته',
                ]
            },


        ]
    },
    {
        id: 21,
        title: 'توصیه هایی به فرد آسیب دیده',
        questions: [
            {
                idq: 1,
                str: 'بازگشت فوری به رقابت یا فعالیت نامحدود',
                values: null
            },
            {
                idq: 2,
                str: 'قادر به بازگشت به فعالیت با محدودیت',
                values: null
            },
            {
                idq: 3,
                str: 'در حال حاضر قادر به بازگشت نیست',
                values: null
            },
            {
                idq: 4,
                str: 'سایر',
                values: null
            },

        ]
    },
    {
        id: 22,
        title: 'ارجاع: نشان می دهد که اگر مصدوم برای ارزیابی بیشتر ارجاع داده شود، به چه کسی و میزان فوریتی که به آنها توصیه می شود که به دنبال ارزیابی یا درمان بیشتر باشند. ',
        questions: [
            {
                idq: 1,
                str: 'چه موقع فرد باید ارجاع شود؟',
                values: null
            },
            {
                idq: 2,
                str: 'مصدوم به کجا یا به چه کسی ارجاع می شود؟',
                values: null
            },


        ]
    },
    {
        id: 23,
        title: 'شخص درمان کننده ',
        questions: [
            {
                idq: 1,
                str: 'شخص درمان کننده',
                values: null
            },
        ]
    },
    {
        id: 24,
        title: 'پوزیشن بازیکن (در صورت ورزش تیمی)',
        questions: [
            {
                idq: 1,
                str: 'دفاع',
                values: null
            },
            {
                idq: 2,
                str: 'حمله',
                values: null
            },
            {
                idq: 3,
                str: 'هافبک',
                values: null
            },
            {
                idq: 4,
                str: 'کناره های زمین',
                values: null
            },
            {
                idq: 5,
                str: 'سانتر',
                values: null
            },
            {
                idq: 6,
                str: 'دروازه بان',
                values: null
            },
            {
                idq: 7,
                str: 'سایر',
                values: null
            },

        ]
    },
]

export default DataTableValues;
