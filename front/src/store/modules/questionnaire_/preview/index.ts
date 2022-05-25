const firstQuestionnaireInfo = [
  'Курс «Капитал: инвестируем валюту» (далее по тексту «курс») является объектом интеллектуальной собственности автора – ИП Гогаладзе Ольги Юрьевны. Запрещено распространять, копировать материалы курса без письменного на то согласия автора. За нарушение настоящего условия предусмотрена ответственность по договору-оферте, который подписывается всеми участниками при прохождении курса.',
  'Упоминание название любого юридического лица или имени физического лица в настоящем курсе не является рекламой или попыткой очернить деловую репутацию.',
  'Никакие схемы и варианты инвестиционных решений, предложенные в данном курсе, не являются рекомендациями или руководством к действию.',
  'Все инвестиционные продукты не являются банковским депозитом, не гарантируются государством, сопряжены с рисками. Подробнее о рисках инвестирования в разделе «раскрытие рисков».',
  'Ответственность за принятие инвестиционных решений всегда лежит на инвесторе, так же, как и конечный результат от инвестирования денег.',
  'Автор курса не имеет заинтересованности в оформлении договоров на брокерское обслуживание учениками курса и не склоняет учеников к сотрудничеству с конкретно определенными компаниями и инвестирование в конкретно определенные активы. Ученики курса самостоятельно решают о том, с какими компаниями они готовы сотрудничать и полностью самостоятельно несут ответственность за результаты работы с инвестиционными, страховыми компаниями и банками.',
  'Плата за услуги инвестиционных, страховых компаний и банков не входит в цену курса.',
  'Раскрытие рисков (декларация)',
  'Цель раскрытия рисков — не отговорить учеников курса от использования инвестиционных инструментов, а предоставить информацию о рисках, связанных с осуществлением операций на рынке ценных бумаг, валютном рынке, и предупредить о возможных потерях при осуществлении операций на фондовом рынке.',
  'Обращаем внимание учеников на то, что декларация не раскрывает все возможные риски вследствие разнообразия ситуаций, возникающих на рынке ценных бумаг, валютном рынке, однако позволит определить приемлемый уровень рисков для себя, реально оценить свои возможности и ответственно подойти к решению вопроса о начале проведения операций на рынке ценных бумаг и валютном рынке.',
  'В настоящей декларации под риском при осуществлении операций на рынке ценных бумаг понимается возможность возникновения ситуации, которая может повлечь за собой потерю части или даже всех инвестированных средств.',
  'Системные риски — риски, связанные с функционированием системы в целом. Это риск изменения политической ситуации, риск неблагоприятных (с точки зрения существенных условий бизнеса) изменений в российском законодательстве, в частности в области налогообложения или ограничения инвестиций в отдельные отрасли экономики, общий банковский кризис, дефолт, риск резкого падения курса рубля по отношению к основным мировым валютам. Работая на рынке ценных бумаг, вы изначально подвергаетесь системному риску, уровень которого можно считать неснижаемым (по крайней мере, путем диверсификации) при любых ваших вложениях в ценные бумаги.',
  'Инвестирование на российском фондовом рынке связано с более высокой степенью рисков системного характера, чем инвестирование на рынках развитых стран.',
  'Применительно к иностранным ценным бумагам системные риски, свойственные российскому фондовому рынку дополняются аналогичными системными рисками, свойственными стране, где выпущены или обращаются соответ-ствующие иностранные ценные бумаги. К основным факторам, влияющим на уровень системного риска в целом, относятся политическая ситуация, особенности национального законодательства, валютного регулирования и вероятность их изменения, состояние государственных финансов, наличие и степень развитости финансовой системы страны места нахождения лица, обязанного по иностранной ценной бумаге.',
  "На уровень системного риска могут оказывать влияние и многие другие факторы, в том числе вероятность введения ограничений на инвестиции в отдельные отрасли экономики или вероятность одномоментной девальвации национальной валюты. Общепринятой интегральной оценкой системного риска инвестиций в иностранную ценную бумагу является «суверенный рейтинг» в иностранной или национальной валюте, присвоенный стране, в которой зарегистрирован эмитент, международными рейтинговыми агентствами MOODY»S, STANDARD & POOR'S, FITCH IBCA, однако следует иметь в виду, что рейтинги являются лишь ориентирами и могут в конкретный момент не соответствовать реальной ситуации.",
  'В настоящее время законодательство разрешает российскими инвесторами, в том числе не являющимися квалифицированными, приобретение допущенных к публичному размещению и (или) публичному обращению в Российской Федерации иностранных ценных бумаг как за рубежом, так и в России, а также позволяет учет прав на такие ценные бумаги российскими депозитариями. Между тем, существуют риски изменения регулятивных подходов к владению и операциям, а также к учету прав на иностранные финансовые инструменты, в результате чего может возникнуть необходимость по их отчуждению вопреки планам инвестора.',
  'Правовой риск – риски связанные с возможностью защиты своих прав, а также с соблюдением законодательства РФ и законодательства иностранных юрисдикций.',
  'При приобретении иностранных ценных бумаг необходимо отдавать себе отчет в том, что они не всегда являются аналогами российских ценных бумаг. В любом случае, предоставляемые по ним права и правила их осуществления могут существенно отличаться от прав по российским ценным бумагам.',
  'Возможности судебной защиты прав по иностранным ценным бумагам могут быть существенно ограничены необходимостью обращения в зарубежные судебные и правоохранительные органы по установленным правилам, которые могут существенно отличаться от действующих в России. Кроме того, при операциях с иностранными ценными бумагами инвестор в большинстве случаев не сможет полагаться на защиту своих прав и законных интересов российскими уполномоченными органами.',
  'Ценовой риск — риск потерь вследствие неблагоприятных изменений цен.',
  'Риск ликвидности — возможность возникновения затруднений при продаже или покупке актива по ожидаемой цене в определенный момент времени.',
  'Риск банкротства эмитента — риск возможности наступления неплатежеспособности эмитента ценной бумаги, что приведет к резкому падению цены на такую ценную бумагу (акции) или невозможности погасить ее (долговые ценные бумаги).',
  'Валютный риск — риск потерь вследствие неблагоприятных изменений валютных курсов.',
  'Процентный риск — риск потерь из-за негативных изменений процентных ставок.',
  'Отраслевые риски связаны с неблагоприятным функционированием определенной отрасли, что непосредственно сказывается на деятельности занятых в ней компаний, а значит, и на показателях стоимости выпущенных ими ценных бумаг. Часто негативное состояние такой отрасли передается компаниям из других зависимых отраслей.',
  'Риск неправомерных действий в отношении имущества инвестора и охраняемых законом прав инвестора со стороны третьих лиц, включая эмитента, регистратора или депозитария.',
  'Операционный (технический, технологический, кадровый) риск — риск прямых или косвенных потерь по причине неисправностей информационных, электрических и иных систем, а также их неадекватности, из-за ошибок, связанных с несовершенством инфраструктуры рынка ценных бумаг, технологий проведения операций, процедур управления, учета и контроля, из-за действий (бездействия) персонала и сторонних лиц, в результате воздействия внешних событий, а также при использовании систем удаленного доступа.',
  'Риск ликвидности – риск невозможности реализации ценных бумаг, которыми владеет инвестор, на протяжении короткого или длительного времени ввиду отсутсвия желающих выкупить эти ценные бумаги у инвестора в тот момент, когда инвестор решил реализовать эти ценные бумаги.',
  'К операциям, связанным с повышенным риском, относятся сделки, заключаемые с превышением собственных средств (с использованием заемных средств, кредитного плеча). Автор курса настоятельно рекомендует не инвестировать средства, взятые в кредит!',
  'Наиболее рискованными принято считать спекулятивные операции на рынке срочных и производных финансовых инструментов (фьючерсы и опционы). Автор курса предупреждает учеников о том, что сумма для спекулятивных сделок, не должна превышать 20% от суммы ваших сбережений.',
  'Учитывая вышеизложенное, рекомендуем инвестору внимательно рассмотреть вопрос о том, являются ли риски, возникающие при проведении соответствующих операций, приемлемыми для инвестора с учетом инвестиционных целей и финансовых возможностей.',
  'ПРЕДУПРЕЖДЕНИЕ ПРИ ОФОРМЛЕНИИ СТРАХОВЫХ ПРОГРАММ НСЖ И UNIT LINKED:',
  'Полис необходимо рассматривать как долгосрочные инвестиции. Досрочное расторжение договора / частичное изъятие денежных средств приводит к штрафам и возможности того, что Ваши изначальные инвестиционные цели не будут достигнуты. Перед заключением договора, пожалуйста, убедитесь, что Вы полностью понимаете все условия, включая комиссии и возможные штрафы, которые могут быть применены в случае досрочного расторжения договора / частичного изъятия денежных средств. Это долгосрочное обязательство, поэтому, перед тем как Вы решите приобрести данный продукт, убедитесь, что Вы понимаете как данные условия удовлетворяют Ваши инвестиционные цели и подходят ли oни для Вас — выбор за Вами.',
]; 

const secondQuestionnaireInfo = [
  'Вся информация в этом сообщении не является индивидуальной инвестиционной рекомендацией. Инвестиционные результаты прошлых периодов не гарантируют доходности в будущем. Все решения об инвестировании средств должны приниматься без учета давления со стороны заинтересованных лиц, в соответствии с целями и возможностями инвестора.',
  'Вся описанная информация не является руководством к действию и/или принуждение к инвестированию денег в какие-либо активы.',
  'Курс «Я - Инвестор 2.0» является информационным ресурсом, решение о размещении денег инвестор принимает самостоятельно. Ни организаторы, ни создатели курса, ни эксперты и никакие другие сотрудники и представители ИП Гогаладзе Ольга Юрьевна не несут ответственности за результат инвестиционной деятельности учеников курса.',
];

const firstQuestionnaireRisks = [
  {
    name: 'Осторожный',
    tag: 'осторожном',
    src: `images/risks/one/1.png`,
    icon: '',
    percents: {
      one: 100,
      two: 0,
      three: 0
    }
  },
  {
    name: 'Консервативный',
    tag: 'консервативном',
    src: `images/risks/one/2.png`,
    icon: '',
    percents: {
      one: 80,
      two: 15,
      three: 5
    }
  },
  {
    name: 'Умеренный',
    tag: 'умеренном',
    src: `images/risks/one/3.png`,
    icon: '',
    percents: {
      one: 60,
      two: 30,
      three: 10
    }
  },
  {
    name: 'Агрессивный',
    tag: 'агрессивном',
    src: `images/risks/one/4.png`,
    icon: '',
    percents: {
      one: 50,
      two: 40,
      three: 10
    }
  },
  {
    name: 'Акции 100%',
    tag: '"Акции 100%"',
    src: `images/risks/two/5.png`,
    icon: '',
    percents: {
      one: 100,
      two: 0,
      three: 0
    }
  },
];
const secondQuestionnaireRisks = [
  {
    name: 'Осторожный',
    tag: 'осторожном',
    src: `images/risks/two/1.png`,
    icon: '',
    percents: {
      one: 100,
      two: 0,
      three: 0
    }
  },
  {
    name: 'Консервативный',
    tag: 'консервативном',
    src: `images/risks/two/2.png`,
    icon: '',
    percents: {
      one: 80,
      two: 15,
      three: 5
    }
  },
  {
    name: 'Умеренный',
    tag: 'умеренном',
    src: `images/risks/two/3.png`,
    icon: '',
    percents: {
      one: 60,
      two: 30,
      three: 10
    }
  },
  {
    name: 'Агрессивный',
    tag: 'агрессивном',
    src: `images/risks/two/4.png`,
    icon: '',
    percents: {
      one: 50,
      two: 40,
      three: 10
    }
  },
  {
    name: 'Акции 100%',
    tag: '"Акции 100%"',
    src: `images/risks/two/5.png`,
    icon: '',
    percents: {
      one: 100,
      two: 0,
      three: 0
    }
  },
];

const firstQuestionnaireColors = ["#FCC033", "#369B5F", "#F44336", "#5C6BC0", "#FD9500", "#9B5DE5", "#5DE589", "#E57B32", "#32DEE5", "#DE32E5", "#A4E51C", "#787EFF", "#50AA9B", "#FF7886", "#E000FF", "#FFCACA", "#93B3FF", "#FF00D8", "#FF0074", "FFF861"];
const secondQuestionnaireColors = ["#FFE27A", "#B5C465", "#74A25A", "#3B7E51", "#8771A3", "#654978", "#00A7A7", "#008D8D", "#006A6A", "#DE32E5", "#A4E51C", "#787EFF", "#50AA9B", "#FF7886"];

export { firstQuestionnaireInfo, secondQuestionnaireInfo, firstQuestionnaireRisks, secondQuestionnaireRisks, firstQuestionnaireColors, secondQuestionnaireColors };