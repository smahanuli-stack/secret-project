/**
 * Sara Vera — i18n.js
 * Система переводов: ru / pl / en
 * Использование: добавьте data-i18n="ключ" на любой элемент.
 * Для атрибутов: data-i18n-attr="placeholder:ключ" или "aria-label:ключ"
 */

const TRANSLATIONS = {

  /* ───────── НАВБАР ───────── */
  'nav.home':    { ru: 'Главная',            pl: 'Strona główna',   en: 'Home' },
  'nav.about':   { ru: 'О фирме',            pl: 'O firmie',        en: 'About us' },
  'nav.jobs':    { ru: 'Предложения работы', pl: 'Oferty pracy',    en: 'Job offers' },
  'nav.firms':   { ru: 'Для фирм',           pl: 'Dla firm',        en: 'For companies' },
  'nav.workers': { ru: 'Для работников',     pl: 'Dla pracowników', en: 'For workers' },
  'nav.contact': { ru: 'Контакты',           pl: 'Kontakt',         en: 'Contact' },
  'nav.findjob': { ru: 'Найди работу',       pl: 'Znajdź pracę',    en: 'Find a job' },

  /* ───────── ФУТЕР ───────── */
  'footer.copy':    { ru: '© 2026 Sara Vera. Все права защищены.', pl: '© 2026 Sara Vera. Wszelkie prawa zastrzeżone.', en: '© 2026 Sara Vera. All rights reserved.' },
  'footer.privacy': { ru: 'Политика конфиденциальности', pl: 'Polityka prywatności',   en: 'Privacy policy' },
  'footer.cookies': { ru: 'Политика cookie',              pl: 'Polityka cookies',        en: 'Cookie policy' },
  'footer.terms':   { ru: 'Правила и условия',            pl: 'Regulamin',               en: 'Terms & conditions' },
  'footer.contact': { ru: 'Контакты',                     pl: 'Kontakt',                 en: 'Contact' },

  /* ───────── INDEX ───────── */
  'index.hero_title': {
    ru: 'Твой комфортный старт в Польше',
    pl: 'Twój komfortowy start w Polsce',
    en: 'Your comfortable start in Poland'
  },
  'index.btn_firms': {
    ru: 'Для фирм', pl: 'Dla firm', en: 'For companies'
  },
  'index.btn_workers': {
    ru: 'Для работников', pl: 'Dla pracowników', en: 'For workers'
  },
  'index.about_title': {
    ru: 'О нас.', pl: 'O nas.', en: 'About us.'
  },
  'index.about_text': {
    ru: 'Мы — агентство по трудоустройству, которое помогает людям находить работу в Польше быстро, безопасно и без лишнего стресса. Наша цель — помочь каждому человеку найти подходящую вакансию в соответствии с его опытом и навыками. Мы сотрудничаем с проверенными работодателями. Наша команда сопровождает кандидатов на всех этапах: от подбора вакансии до выхода на работу. Если вы ищете работу и хотите быстро начать зарабатывать — мы поможем вам.',
    pl: 'Jesteśmy agencją pracy, która pomaga ludziom znaleźć zatrudnienie w Polsce szybko, bezpiecznie i bez zbędnego stresu. Naszym celem jest pomoc każdemu w znalezieniu odpowiedniej oferty zgodnej z jego doświadczeniem i umiejętnościami. Współpracujemy ze sprawdzonymi pracodawcami. Nasz zespół towarzyszy kandydatom na każdym etapie – od wyboru oferty do rozpoczęcia pracy.',
    en: 'We are a recruitment agency that helps people find jobs in Poland quickly, safely and without unnecessary stress. Our goal is to help everyone find the right vacancy matching their experience and skills. We work with verified employers. Our team supports candidates at every step – from choosing a vacancy to starting work.'
  },
  'index.steps_label': {
    ru: 'Этапы сотрудничества', pl: 'Etapy współpracy', en: 'How it works'
  },
  'index.step1': { ru: 'Принимаем вашу заявку.',                      pl: 'Przyjmujemy Twoje zgłoszenie.',              en: 'We receive your application.' },
  'index.step2': { ru: 'Анализируем предоставленные данные.',          pl: 'Analizujemy dostarczone dane.',              en: 'We review the provided information.' },
  'index.step3': { ru: 'Приглашаем на предварительное собеседование.', pl: 'Zapraszamy na rozmowę wstępną.',             en: 'We invite you for a preliminary interview.' },
  'index.step4': { ru: 'Подбираем вакансию под ваши ожидания.',        pl: 'Dobieramy ofertę do Twoich oczekiwań.',      en: 'We match a vacancy to your expectations.' },
  'index.step5': { ru: 'Подписываем договор и обсуждаем детали.',      pl: 'Podpisujemy umowę i omawiamy szczegóły.',    en: 'We sign the contract and discuss details.' },
  'index.step6': { ru: 'Вы приступаете к работе!',                     pl: 'Zaczynasz pracę!',                           en: 'You start working!' },

  /* FAQ */
  'faq.title': { ru: 'Быстрые ответы', pl: 'Szybkie odpowiedzi', en: 'Quick answers' },
  'faq.q1': { ru: 'Как работает сервис?',      pl: 'Jak działa serwis?',        en: 'How does the service work?' },
  'faq.a1': { ru: 'Наш сервис помогает находить подходящую работу быстро и безопасно.',
              pl: 'Nasz serwis pomaga szybko i bezpiecznie znaleźć odpowiednią pracę.',
              en: 'Our service helps you find the right job quickly and safely.' },
  'faq.q2': { ru: 'Кому подходит сервис?',     pl: 'Dla kogo jest serwis?',     en: 'Who is the service for?' },
  'faq.a2': { ru: 'Он подходит как для опытных специалистов, так и для тех, кто ищет первую работу в Польше.',
              pl: 'Jest odpowiedni zarówno dla doświadczonych specjalistów, jak i dla osób szukających pierwszej pracy w Polsce.',
              en: 'It suits both experienced specialists and those looking for their first job in Poland.' },
  'faq.q3': { ru: 'Сколько это стоит?',        pl: 'Ile to kosztuje?',          en: 'How much does it cost?' },
  'faq.a3': { ru: 'Для работников услуги агентства бесплатны.',
              pl: 'Usługi agencji są bezpłatne dla pracowników.',
              en: 'Agency services are free for workers.' },
  'faq.q4': { ru: 'Где доступен сервис?',      pl: 'Gdzie jest dostępny serwis?', en: 'Where is the service available?' },
  'faq.a4': { ru: 'Мы работаем онлайн — без ограничений по географии.',
              pl: 'Działamy online – bez ograniczeń geograficznych.',
              en: 'We work online – with no geographical restrictions.' },
  'faq.q5': { ru: 'Когда лучше начать?',       pl: 'Kiedy najlepiej zacząć?',   en: 'When is the best time to start?' },
  'faq.a5': { ru: 'Прямо сейчас — чем раньше вы оставите заявку, тем быстрее получите результат.',
              pl: 'Teraz – im wcześniej złożysz zgłoszenie, tym szybciej uzyskasz wyniki.',
              en: 'Right now – the sooner you apply, the faster you get results.' },

  /* Cookie consent */
  'consent.title':   { ru: 'Соглашение с правилами', pl: 'Zgoda na warunki',   en: 'Cookie consent' },
  'consent.text':    { ru: 'Мы используем cookie в соответствии с нашей Политикой конфиденциальности и Политикой cookie. Продолжая использовать сайт, вы соглашаетесь с этими документами.',
                       pl: 'Używamy plików cookie zgodnie z naszą Polityką prywatności i Polityką cookies. Kontynuując korzystanie ze strony, wyrażasz na to zgodę.',
                       en: 'We use cookies in accordance with our Privacy Policy and Cookie Policy. By continuing to use the site, you agree to these documents.' },
  'consent.accept':  { ru: 'Согласен',    pl: 'Akceptuję',  en: 'Accept' },
  'consent.decline': { ru: 'Отказаться', pl: 'Odrzucam',   en: 'Decline' },

  /* ───────── ONAS ───────── */
  'onas.who_title':    { ru: 'Кто мы',           pl: 'Kim jesteśmy',    en: 'Who we are' },
  'onas.who_text':     { ru: 'Мы — агентство по трудоустройству Sara Vera, которое помогает людям находить работу в Польше быстро, безопасно и без лишнего стресса.',
                         pl: 'Jesteśmy agencją pracy Sara Vera, która pomaga ludziom znaleźć pracę w Polsce szybko, bezpiecznie i bez zbędnego stresu.',
                         en: 'We are Sara Vera recruitment agency, helping people find work in Poland quickly, safely and without unnecessary stress.' },
  'onas.mission_title':{ ru: 'Наша миссия',      pl: 'Nasza misja',     en: 'Our mission' },
  'onas.mission_text': { ru: 'Наша цель — помочь каждому человеку найти подходящую вакансию в соответствии с его опытом и навыками. Мы сотрудничаем с проверенными работодателями. Наша команда сопровождает кандидатов на всех этапах: от подбора вакансии до выхода на работу.',
                         pl: 'Naszym celem jest pomoc każdemu w znalezieniu odpowiedniej oferty zgodnej z jego doświadczeniem i umiejętnościami. Nasz zespół towarzyszy kandydatom na każdym etapie: od wyboru oferty do rozpoczęcia pracy.',
                         en: 'Our goal is to help everyone find the right vacancy matching their experience and skills. Our team supports candidates at every step: from choosing a vacancy to starting work.' },
  'onas.values_title': { ru: 'Наши ценности',    pl: 'Nasze wartości',  en: 'Our values' },
  'onas.v1': { ru: '<strong>Надёжность</strong> — работаем только с проверенными работодателями.',
               pl: '<strong>Niezawodność</strong> — współpracujemy tylko ze sprawdzonymi pracodawcami.',
               en: '<strong>Reliability</strong> — we work only with verified employers.' },
  'onas.v2': { ru: '<strong>Честность и прозрачность</strong> — открыто рассказываем об условиях работы.',
               pl: '<strong>Uczciwość i przejrzystość</strong> — otwarcie informujemy o warunkach pracy.',
               en: '<strong>Honesty and transparency</strong> — we openly share job conditions.' },
  'onas.v3': { ru: '<strong>Удобный процесс оформления</strong> — минимум бумаг, максимум скорости.',
               pl: '<strong>Wygodna rekrutacja</strong> — minimum formalności, maksimum szybkości.',
               en: '<strong>Easy onboarding</strong> — minimum paperwork, maximum speed.' },
  'onas.v4': { ru: '<strong>Постоянные вакансии</strong> — регулярно обновляем предложения.',
               pl: '<strong>Stałe oferty</strong> — regularnie aktualizujemy propozycje.',
               en: '<strong>Ongoing vacancies</strong> — we regularly update our offers.' },
  'onas.v5': { ru: '<strong>Оперативная связь</strong> — всегда на связи и готовы помочь.',
               pl: '<strong>Szybki kontakt</strong> — zawsze dostępni i gotowi do pomocy.',
               en: '<strong>Quick response</strong> — always available and ready to help.' },
  'onas.social_title': { ru: 'Найдите нас в социальных сетях', pl: 'Znajdź nas w mediach społecznościowych', en: 'Find us on social media' },

  /* ───────── OFERTY ───────── */
  'jobs.page_title': { ru: 'Предложения работы',                    pl: 'Oferty pracy',                   en: 'Job offers' },
  'jobs.subtitle':   { ru: 'Актуальные вакансии от проверенных работодателей', pl: 'Aktualne oferty od sprawdzonych pracodawców', en: 'Current vacancies from verified employers' },
  'jobs.location':   { ru: 'Местоположение',  pl: 'Lokalizacja',  en: 'Location' },
  'jobs.salary':     { ru: 'Зарплата',        pl: 'Wynagrodzenie', en: 'Salary' },
  'jobs.apply':      { ru: 'Откликнуться',    pl: 'Aplikuj teraz', en: 'Apply now' },
  'jobs.card1_title':{ ru: 'Складской работник', pl: 'Magazynier', en: 'Warehouse worker' },
  'jobs.card1_desc': { ru: 'Работа на складе, комплектование заказов, работа с погрузчиком.',
                       pl: 'Praca w magazynie, kompletowanie zamówień, obsługa wózka widłowego.',
                       en: 'Warehouse work, order picking, forklift operation.' },
  'jobs.card2_title':{ ru: 'Складской работник', pl: 'Magazynier', en: 'Warehouse worker' },
  'jobs.card2_desc': { ru: 'Работа на складе, комплектование заказов, работа с погрузчиком.',
                       pl: 'Praca w magazynie, kompletowanie zamówień, obsługa wózka widłowego.',
                       en: 'Warehouse work, order picking, forklift operation.' },
  'jobs.card3_title':{ ru: 'Водитель C+E',    pl: 'Kierowca C+E', en: 'Driver C+E' },
  'jobs.card3_desc': { ru: 'Международные перевозки. Требуется водительское удостоверение категории C+E.',
                       pl: 'Transport międzynarodowy, wymagane prawo jazdy kategorii C+E.',
                       en: 'International transport. Category C+E driving licence required.' },

  /* ───────── DLAFIRM ───────── */
  'firms.why_title':     { ru: 'Почему стоит сотрудничать с нами?', pl: 'Dlaczego warto z nami współpracować?', en: 'Why work with us?' },
  'firms.why_text':      { ru: 'Мы — агентство по трудоустройству, которое оперативно подбирает персонал для компаний любого масштаба. Предоставляем проверенных сотрудников, готовых приступить к работе в кратчайшие сроки, и берём на себя весь процесс подбора. Быстро. Надёжно. Эффективно.',
                           pl: 'Jesteśmy agencją pracy, która sprawnie dobiera pracowników dla firm każdej wielkości. Dostarczamy sprawdzonych pracowników gotowych do pracy w krótkim czasie i przejmujemy cały proces rekrutacji. Szybko. Niezawodnie. Skutecznie.',
                           en: 'We are a recruitment agency that quickly finds staff for companies of any size. We provide verified employees ready to start work in the shortest possible time and take over the entire recruitment process. Fast. Reliable. Effective.' },
  'firms.contact_title': { ru: 'Свяжитесь с нами',   pl: 'Skontaktuj się z nami', en: 'Contact us' },
  'firms.social_title':  { ru: 'Найдите нас в социальных сетях', pl: 'Znajdź nas w mediach społecznościowych', en: 'Find us on social media' },

  /* ───────── DLARAB ───────── */
  'workers.title':          { ru: 'Для работников',  pl: 'Dla pracowników', en: 'For workers' },
  'workers.intro':          { ru: 'Мы помогаем найти работу в Польше — быстро, бесплатно и без лишнего стресса. Наши специалисты подберут вакансию под ваш опыт и сопроводят на всех этапах трудоустройства.',
                              pl: 'Pomagamy znaleźć pracę w Polsce – szybko, bezpłatnie i bez zbędnego stresu. Nasi specjaliści dobiorą ofertę do Twojego doświadczenia i przeprowadzą Cię przez cały proces.',
                              en: 'We help you find a job in Poland – fast, free and without unnecessary stress. Our specialists will match a vacancy to your experience and guide you through the entire process.' },
  'workers.benefits_title': { ru: 'Что мы предлагаем',  pl: 'Co oferujemy',     en: 'What we offer' },
  'workers.b1': { ru: '🔍 Бесплатный подбор вакансии',          pl: '🔍 Bezpłatne wyszukiwanie ofert',        en: '🔍 Free job matching' },
  'workers.b2': { ru: '📋 Помощь с оформлением документов',     pl: '📋 Pomoc przy dokumentach',              en: '📋 Help with paperwork' },
  'workers.b3': { ru: '🏠 Содействие в поиске жилья',           pl: '🏠 Wsparcie w znalezieniu zakwaterowania', en: '🏠 Help finding accommodation' },
  'workers.b4': { ru: '🚌 Информация о транспорте до работы',   pl: '🚌 Informacje o dojazdach do pracy',     en: '🚌 Information about transport to work' },
  'workers.b5': { ru: '📞 Поддержка на всех этапах трудоустройства', pl: '📞 Wsparcie na każdym etapie',      en: '📞 Support at every stage' },
  'workers.contact_title':  { ru: 'Оставьте заявку',   pl: 'Zostaw zgłoszenie',  en: 'Submit your application' },
  'workers.contact_text':   { ru: 'Свяжитесь с нами удобным способом — мы ответим в течение 24 часов.',
                              pl: 'Skontaktuj się z nami w wygodny sposób – odpiszemy w ciągu 24 godzin.',
                              en: 'Get in touch in any convenient way – we will respond within 24 hours.' },
  'workers.cta':            { ru: 'Смотреть вакансии', pl: 'Zobacz oferty',     en: 'View vacancies' },

  /* ───────── CONTACT ───────── */
  'contact.info_title':   { ru: 'Контактные данные',                   pl: 'Dane kontaktowe',                      en: 'Contact details' },
  'contact.social_title': { ru: 'Найди нас в социальных сетях',        pl: 'Znajdź nas w mediach społecznościowych', en: 'Find us on social media' },
  'contact.address':      { ru: 'Адрес',  pl: 'Adres',  en: 'Address' },

  /* ───────── COOKIES PAGE ───────── */
  'cookiepage.title':   { ru: 'Политика использования cookie', pl: 'Polityka cookies',   en: 'Cookie policy' },
  'cookiepage.updated': { ru: 'Последнее обновление:',         pl: 'Ostatnia aktualizacja:', en: 'Last updated:' },
  'cookiepage.h1': { ru: 'Что такое cookie',         pl: 'Czym są pliki cookie',    en: 'What are cookies' },
  'cookiepage.p1': { ru: 'Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве для обеспечения корректной работы сайта и улучшения пользовательского опыта.',
                    pl: 'Pliki cookie to małe pliki tekstowe zapisywane na Twoim urządzeniu w celu zapewnienia prawidłowego działania strony i poprawy doświadczenia użytkownika.',
                    en: 'Cookies are small text files stored on your device to ensure the website works correctly and to improve the user experience.' },
  'cookiepage.h2': { ru: 'Виды используемых cookie', pl: 'Rodzaje używanych plików cookie', en: 'Types of cookies used' },
  'cookiepage.h3': { ru: 'Управление cookie',        pl: 'Zarządzanie plikami cookie',      en: 'Managing cookies' },
  'cookiepage.p3': { ru: 'Вы можете изменить настройки cookie в браузере или через наш баннер согласия.',
                    pl: 'Możesz zmienić ustawienia plików cookie w przeglądarce lub za pomocą naszego banera zgody.',
                    en: 'You can change cookie settings in your browser or through our consent banner.' },
  'cookiepage.h4': { ru: 'Передача данных',          pl: 'Przekazywanie danych',            en: 'Data transfer' },
  'cookiepage.p4': { ru: 'Informacja z cookie может передаваться нашим партнёрам по аналитике и маркетингу с соблюдением требований GDPR.',
                    pl: 'Informacje z plików cookie mogą być przekazywane naszym partnerom zgodnie z wymogami RODO.',
                    en: 'Cookie information may be shared with our analytics and marketing partners in compliance with GDPR.' },

  /* ───────── PRIVACY PAGE ───────── */
  'privacypage.title': { ru: 'Политика конфиденциальности', pl: 'Polityka prywatności', en: 'Privacy policy' },
  'privacypage.h1':    { ru: 'Контролёр данных',            pl: 'Administrator danych', en: 'Data controller' },
  'privacypage.h2':    { ru: 'Категории данных',            pl: 'Kategorie danych',     en: 'Data categories' },
  'privacypage.h3':    { ru: 'Цели и правовые основания',   pl: 'Cele i podstawy prawne', en: 'Purposes and legal bases' },
  'privacypage.h4':    { ru: 'Передача данных',             pl: 'Przekazywanie danych', en: 'Data transfer' },
  'privacypage.h5':    { ru: 'Сроки хранения',              pl: 'Okresy przechowywania', en: 'Retention periods' },
  'privacypage.h6':    { ru: 'Права субъектов данных',      pl: 'Prawa podmiotów danych', en: 'Data subject rights' },
  'privacypage.h7':    { ru: 'Cookie и аналитика',          pl: 'Pliki cookie i analityka', en: 'Cookies and analytics' },

  /* ───────── TERMS PAGE ───────── */
  'termspage.title': { ru: 'Правила и условия',        pl: 'Regulamin',                  en: 'Terms & conditions' },
  'termspage.h1':    { ru: 'Общие положения',          pl: 'Postanowienia ogólne',        en: 'General provisions' },
  'termspage.p1':    { ru: 'Настоящие правила регулируют использование сайта и предоставляемых услуг.',
                       pl: 'Niniejszy regulamin określa zasady korzystania ze strony i świadczonych usług.',
                       en: 'These terms govern the use of the website and the services provided.' },
  'termspage.h2':    { ru: 'Использование сайта',      pl: 'Korzystanie ze strony',       en: 'Use of the website' },
  'termspage.p2':    { ru: 'Вы обязуетесь использовать сайт только в законных целях.',
                       pl: 'Zobowiązujesz się korzystać ze strony wyłącznie w celach zgodnych z prawem.',
                       en: 'You agree to use the website only for lawful purposes.' },
  'termspage.h3':    { ru: 'Интеллектуальная собственность', pl: 'Własność intelektualna', en: 'Intellectual property' },
  'termspage.p3':    { ru: 'Все материалы сайта защищены авторским правом.',
                       pl: 'Wszystkie materiały na stronie są chronione prawem autorskim.',
                       en: 'All site materials are protected by copyright.' },
  'termspage.h4':    { ru: 'Ответственность',          pl: 'Odpowiedzialność',             en: 'Liability' },
  'termspage.p4':    { ru: 'Компания не несёт ответственности за убытки, возникшие в результате использования сайта.',
                       pl: 'Firma nie ponosi odpowiedzialności za szkody wynikłe z korzystania ze strony.',
                       en: 'The company is not liable for damages arising from the use of the website.' },
  'termspage.h5':    { ru: 'Изменения условий',        pl: 'Zmiany regulaminu',            en: 'Changes to terms' },
  'termspage.p5':    { ru: 'Мы оставляем за собой право изменять правила. Обновлённая версия публикуется на этой странице.',
                       pl: 'Zastrzegamy sobie prawo do zmiany regulaminu. Zaktualizowana wersja jest publikowana na tej stronie.',
                       en: 'We reserve the right to change the terms. The updated version is published on this page.' },
  'termspage.h6':    { ru: 'Применимое право',         pl: 'Prawo właściwe',               en: 'Applicable law' },
  'termspage.p6':    { ru: 'Настоящие правила регулируются законодательством Польши и Европейского Союза.',
                       pl: 'Niniejszy regulamin podlega prawu polskiemu i Unii Europejskiej.',
                       en: 'These terms are governed by Polish law and European Union law.' },
};

/* ══════════════════════════════════════════════
   ФЛАГИ и названия языков
══════════════════════════════════════════════ */
const LANG_META = {
  ru: { label: 'Русский', flag: '🇷🇺' },
  pl: { label: 'Polski',  flag: '🇵🇱' },
  en: { label: 'English', flag: '🇬🇧' },
};

const SUPPORTED_LANGS = ['ru', 'pl', 'en'];
const DEFAULT_LANG = 'ru';

/* ══════════════════════════════════════════════
   ЯДРО СИСТЕМЫ
══════════════════════════════════════════════ */

function t(key, lang) {
  const entry = TRANSLATIONS[key];
  if (!entry) { console.warn(`i18n: missing key "${key}"`); return key; }
  return entry[lang] || entry[DEFAULT_LANG] || key;
}

function applyLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

  // Обновляем html lang
  document.documentElement.lang = lang;

  // Переводим все элементы с data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key, lang);
    // innerHTML для тегов типа <strong>
    if (translated.includes('<')) {
      el.innerHTML = translated;
    } else {
      el.textContent = translated;
    }
  });

  // Переводим атрибуты: data-i18n-attr="aria-label:key,placeholder:key2"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(',').forEach(pair => {
      const [attr, key] = pair.trim().split(':');
      el.setAttribute(attr, t(key, lang));
    });
  });

  // Обновляем текущий флаг и название
  const currentLangBtn = document.getElementById('current-lang-label');
  if (currentLangBtn) {
    currentLangBtn.textContent = `${LANG_META[lang].flag} ${LANG_META[lang].label}`;
  }

  // Сохраняем выбор
  localStorage.setItem('saravera_lang', lang);
}

function initI18n() {
  const saved = localStorage.getItem('saravera_lang');
  const browserLang = navigator.language.slice(0, 2);
  const lang = SUPPORTED_LANGS.includes(saved) ? saved
             : SUPPORTED_LANGS.includes(browserLang) ? browserLang
             : DEFAULT_LANG;

  applyLang(lang);

  // Вешаем обработчики на кнопки смены языка
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      applyLang(btn.getAttribute('data-lang'));
      // Закрываем дропдаун
      const dd = btn.closest('.lang-dropdown');
      if (dd) dd.style.display = 'none';
      setTimeout(() => { if (dd) dd.style.removeProperty('display'); }, 300);
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
