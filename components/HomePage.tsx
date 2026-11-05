import React from 'react';
import { CONTACT_LINKS, CV_URL } from '../data/content';
import { navigate, workPath } from '../hooks/useRoute';
import type { Locale } from '../hooks/useLocale';

const contactHref = (label: string) => CONTACT_LINKS.find((l) => l.label === label)?.href ?? '';

/** In-app link to a case study, handled by the History API router. */
const WorkLink: React.FC<{ slug: string; children: React.ReactNode }> = ({ slug, children }) => (
  <a
    href={workPath(slug)}
    onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(workPath(slug));
    }}
  >
    {children}
  </a>
);

interface HomePageProps {
  locale: Locale;
  onAskAi: () => void;
  askAiRef: React.Ref<HTMLButtonElement>;
}

type BodyProps = Omit<HomePageProps, 'locale'>;

const HomePage: React.FC<HomePageProps> = ({ locale, ...props }) =>
  locale === 'ar' ? <HomeArabic {...props} /> : <HomeEnglish {...props} />;

const HomeEnglish: React.FC<BodyProps> = ({ onAskAi, askAiRef }) => (
  <main>
    <h1>James Jullies</h1>

    <p>
      I'm a martech and AI architect in Johannesburg. I design how customer data moves between engagement
      platforms, and lately I build the AI tools that sit on top of it.
    </p>

    <p>
      Currently, I'm a Senior Solutions Consultant at <a href="https://www.youknow.co.za/">YOUKNOW Technologies</a>,
      where I lead the technical architecture practice and run pre-sales for fintech, banking and retail clients.
      Before that I spent seven years at inQuba in CX, service delivery and business analysis, and started out in
      fund operations on Oracle Flexcube.
    </p>

    <p>Some of the work I'm proudest of:</p>
    <ul>
      <li>
        <WorkLink slug="melon-mobile-amplitude-appsflyer">Melon Mobile</WorkLink> – Amplitude + AppsFlyer across
        Android, iOS, Huawei and web (phase one in 6 weeks)
      </li>
      <li>
        <WorkLink slug="braze-implementation">OM Bank</WorkLink> – Braze architecture and identity resolution (140k
        identities at launch, 1M+ customers by 2026)
      </li>
      <li>
        <WorkLink slug="onesignal-migration">Banco Millennium Atlântico</WorkLink> – OneSignal migration off MS
        Dynamics 365 (WhatsApp + SOAP SMS)
      </li>
      <li>
        <WorkLink slug="retail-analytics-ecosystem">Retail analytics</WorkLink> – one Amplitude taxonomy for Cape
        Union Mart, Old Khaki and Poetry (3 brands)
      </li>
      <li>
        <WorkLink slug="sales-intelligence-slack-bot">Sales Slack bot</WorkLink> – MCP + Claude API across HubSpot,
        Notion and Zendesk (live in sales ops)
      </li>
      <li>
        <strong>Delivery tooling</strong> – time-boxed platform onboarding (~6 months down to ~8 weeks)
      </li>
    </ul>

    <p>
      And a few things I built for fun: <a href="https://tile-predictor-pro.vercel.app">Tile Predictor Pro</a>, which
      reads loyalty gameboards with Gemini vision, and <a href="https://run-dna-cards.vercel.app">Run DNA Cards</a>,
      which turns a GPX file into a collectible card.
    </p>

    <p>
      I'm certified 8× on Braze, 7× on Amplitude and 5× through Anthropic Academy, and I'm an AppsFlyer Reseller
      Solution Architect. I've worked with clients in South Africa, Angola, West Africa, Australia, the USA and the
      UK.
    </p>

    <p>
      In my spare time I mostly run on roads and cross-train. The aim is to stay ready for whatever comes up, like
      entering a 10k on a whim and running it comfortably. I also make music as{' '}
      <a href="https://beacons.ai/jamo251">Jamo Music</a>.
    </p>

    <p>
      You can find me on <a href={contactHref('LinkedIn')}>LinkedIn</a> and{' '}
      <a href={contactHref('GitHub')}>GitHub</a>, grab my <a href={CV_URL} download>CV</a>, or{' '}
      <a href={contactHref('Email')}>email me</a> about a customer-data, engagement or AI problem.
    </p>

    <p>
      <button ref={askAiRef} type="button" className="link-button" onClick={onAskAi} aria-haspopup="dialog">
        Ask an AI about my work →
      </button>
    </p>
  </main>
);

/**
 * Arabic version of the page, shown when the visitor's device language is
 * Arabic. Product, company and client names stay in their Latin spelling.
 */
const HomeArabic: React.FC<BodyProps> = ({ onAskAi, askAiRef }) => (
  <main>
    <h1>جيمس جوليز</h1>

    <p>
      أنا مهندس حلول في تقنيات التسويق والذكاء الاصطناعي، مقيم في جوهانسبرغ. أصمّم طريقة انتقال بيانات العملاء بين
      منصّات التفاعل، وفي الآونة الأخيرة أبني أدوات الذكاء الاصطناعي التي تعمل فوقها.
    </p>

    <p>
      أعمل حاليًا مستشار حلول أول في <a href="https://www.youknow.co.za/">YOUKNOW Technologies</a>، حيث أقود ممارسة
      الهندسة التقنية وأتولّى مرحلة ما قبل البيع لعملاء في قطاعات التقنية المالية والمصارف والتجزئة. قبل ذلك أمضيت سبع
      سنوات في inQuba في مجالات تجربة العملاء وتقديم الخدمات وتحليل الأعمال، وبدأت مسيرتي في عمليات الصناديق على نظام
      Oracle Flexcube.
    </p>

    <p>من الأعمال التي أعتزّ بها أكثر من غيرها:</p>
    <ul>
      <li>
        <WorkLink slug="melon-mobile-amplitude-appsflyer">Melon Mobile</WorkLink> – تطبيق Amplitude و AppsFlyer على
        Android و iOS و Huawei والويب (المرحلة الأولى في 6 أسابيع)
      </li>
      <li>
        <WorkLink slug="braze-implementation">OM Bank</WorkLink> – هندسة Braze وتوحيد الهويات (140 ألف هوية عند
        الإطلاق، وأكثر من مليون عميل بحلول 2026)
      </li>
      <li>
        <WorkLink slug="onesignal-migration">Banco Millennium Atlântico</WorkLink> – الانتقال إلى OneSignal بعيدًا عن
        MS Dynamics 365 (رسائل WhatsApp و SMS عبر SOAP)
      </li>
      <li>
        <WorkLink slug="retail-analytics-ecosystem">تحليلات التجزئة</WorkLink> – تصنيف أحداث موحّد في Amplitude يجمع
        Cape Union Mart و Old Khaki و Poetry (3 علامات تجارية)
      </li>
      <li>
        <WorkLink slug="sales-intelligence-slack-bot">بوت Slack للمبيعات</WorkLink> – MCP و Claude API عبر HubSpot
        و Notion و Zendesk (يعمل فعليًا في عمليات المبيعات)
      </li>
      <li>
        <strong>أدوات التسليم</strong> – تطبيق المنصّات ضمن أطر زمنية محدّدة (من نحو 6 أشهر إلى نحو 8 أسابيع)
      </li>
    </ul>

    <p>
      وبعض الأشياء التي بنيتها للمتعة: <a href="https://tile-predictor-pro.vercel.app">Tile Predictor Pro</a>، الذي
      يقرأ لوحات ألعاب برامج الولاء بتقنية الرؤية في Gemini، و{' '}
      <a href="https://run-dna-cards.vercel.app">Run DNA Cards</a>، الذي يحوّل ملف GPX إلى بطاقة قابلة للجمع.
    </p>

    <p>
      حصلت على 8 شهادات من Braze و 7 من Amplitude و 5 من Anthropic Academy، وأنا معتمد لدى AppsFlyer بصفة Reseller
      Solution Architect. عملت مع عملاء في جنوب أفريقيا وأنغولا وغرب أفريقيا وأستراليا والولايات المتحدة والمملكة
      المتحدة.
    </p>

    <p>
      في وقت فراغي أركض غالبًا على الطرق وأمارس التمارين المتنوّعة. الهدف أن أبقى مستعدًا لأي شيء، مثل المشاركة في
      سباق 10 كيلومترات دون تخطيط مسبق وإنهائه بارتياح. وأؤلّف الموسيقى أيضًا باسم{' '}
      <a href="https://beacons.ai/jamo251">Jamo Music</a>.
    </p>

    <p>
      تجدني على <a href={contactHref('LinkedIn')}>LinkedIn</a> و <a href={contactHref('GitHub')}>GitHub</a>، ويمكنك
      تنزيل <a href={CV_URL} download>سيرتي الذاتية</a> (بالإنجليزية)، أو{' '}
      <a href={contactHref('Email')}>مراسلتي عبر البريد الإلكتروني</a> بشأن أي مسألة تتعلّق ببيانات العملاء أو
      التفاعل أو الذكاء الاصطناعي.
    </p>

    <p>
      <button ref={askAiRef} type="button" className="link-button" onClick={onAskAi} aria-haspopup="dialog">
        اسأل الذكاء الاصطناعي عن أعمالي ←
      </button>
    </p>
  </main>
);

export default HomePage;
