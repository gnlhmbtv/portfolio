export type ProjectSlug = 'autoscop' | 'lorex-lms' | 'marsol' | 'store-release'

export type ProjectDetail = {
  slug: ProjectSlug
  tag: string
  title: string
  summary: string
  stack: string
  storeLinks?: boolean
  role: string
  overview: string[]
  highlights: { title: string; body: string }[]
  architecture: { title: string; body: string }[]
  features: string[]
  technical: string[]
  outcome: string
}

export type ProjectCopy = {
  back: string
  roleLabel: string
  overviewLabel: string
  highlightsLabel: string
  architectureLabel: string
  featuresLabel: string
  technicalLabel: string
  outcomeLabel: string
  stackLabel: string
  openApp: string
  notFoundTitle: string
  notFoundBody: string
  homeLink: string
  appStore: string
  googlePlay: string
  projects: ProjectDetail[]
}

export const projectCopy: Record<'az' | 'en', ProjectCopy> = {
  az: {
    back: '← İşlərə qayıt',
    roleLabel: 'Rol',
    overviewLabel: 'İcmal',
    highlightsLabel: 'Əsas istiqamətlər',
    architectureLabel: 'Arxitektura',
    featuresLabel: 'Funksionallıq',
    technicalLabel: 'Texniki qərarlar',
    outcomeLabel: 'Nəticə',
    stackLabel: 'Stack',
    openApp: 'Tətbiqi aç',
    notFoundTitle: 'Proyekt tapılmadı',
    notFoundBody: 'Bu səhifə mövcud deyil və ya link səhvdir.',
    homeLink: 'Ana səhifəyə qayıt',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    projects: [
      {
        slug: 'autoscop',
        tag: 'MOBİL · PRODUCTION',
        title: 'AutoScop',
        summary:
          'Azərbaycan üçün smart avtomobil idarəsi — rəqəmsal qaraj, xərclər (keçmiş/proqnoz), xatırlatmalar, sənədlər, partnyor servislər və Bürünc→Gümüş→Qızıl status idarəsi.',
        stack: 'Flutter · Dart · Dio · GetIt · Provider · Firebase · GoRouter · Secure Storage · Camera',
        storeLinks: true,
        role: 'Middle Flutter Developer — feature delivery, API inteqrasiyası, App Store & Play release',
        overview: [
          'AutoScop sürücülər üçün rəqəmsal qaraj və avtomobil idarəetmə məhsuludur.',
          'Kod bazası feature-first qurulub (~300+ Dart fayl): vehicle, expenses, reminders, documents, services_and_partners, auth, notifications, trust_status, vehicle_onboarding və digər modullar.',
          'Mən UI/API feature-larından əlavə release build-ləri, version bump, store metadata və App Store / Google Play submission axınlarını da aparıram.',
        ],
        highlights: [
          {
            title: 'Rəqəmsal qaraj',
            body: 'Çoxlu avtomobil, marka/model/il, texniki lookup-lar (mühərrik, yanacaq, transmissiya və s.) və mileage yeniləmə.',
          },
          {
            title: 'Xərclər + proqnoz',
            body: 'Keçmiş / Gözlənilən tab-ları, gauge/chart-lar, yanacaq·yuma·sığorta·servis CRUD və /expenses/predictions.',
          },
          {
            title: 'Xatırlatma & Reyestr',
            body: 'Tarix/yürüş/servis/sığorta/vəsiqə reminder-ləri; reyestr hub — sürücülük vəsiqəsi, texniki baxış, etibarnamə.',
          },
          {
            title: 'Trust status (Bürünc → Qızıl)',
            body: 'Partnyor endirimlərinə bağlı status ladder; Gold üçün sənəd capture, submit və resubmit axınları.',
          },
          {
            title: 'Servis & partnyorlar',
            body: 'Rəsmi/öz seçim servis, kataloq, promo kodlar, service orders və review axınları.',
          },
          {
            title: 'Auth & təhlükəsizlik',
            body: 'Email OTP, Google/Apple, PIN + biometrika, JWT refresh, secure storage, InstallGuard.',
          },
        ],
        architecture: [
          {
            title: 'Feature-first modullar',
            body: 'Hər domen screens / notifiers / services / models / widgets strukturunu saxlayır.',
          },
          {
            title: 'Provider + GetIt',
            body: 'UI rebuild üçün Provider/ChangeNotifier; DI və singleton servislər üçün GetIt.',
          },
          {
            title: 'GoRouter shell',
            body: '100+ route, bottom nav (Əsas · Xərclər · Xidmətlər · Daha çox) və middle action menu.',
          },
          {
            title: 'Dio + JWT lifecycle',
            body: 'Bearer interceptor, single-flight refresh, SessionManager logout, env-based base URL.',
          },
        ],
        features: [
          'Splash/auth gate + PIN/biometric unlock',
          '7-addımlı vehicle onboarding (foto → sənədlər)',
          'Garage + car details + mileage',
          'Spendings dashboard (Past / Expected)',
          'Reminders, regulations, insurance',
          'Documents / registry CRUD',
          'Services & partners + promo kodlar',
          'Trust status: Bürünc / Gümüş / Qızıl',
          'Camera document capture (Gold)',
          'FCM + local notifications + device register',
          'AZ/EN l10n (ARB) + settings/FAQ/news',
        ],
        technical: [
          'Android flavors: dev (az.autoscop.testapp) / prod (az.autoscop.app)',
          'Firebase Core + Messaging background handler',
          'flutter_secure_storage + local_auth + JWT refresh',
          'Google Sign-In və Sign in with Apple',
          'camera + document_camera_frame (Gold KYC-like flow)',
          'Android Photo Picker (multi-image limit)',
          'Opt-in proxy SSL inspection (QA)',
          'App Store Connect + Google Play Console release (signing, versioning, review)',
        ],
        outcome:
          'App Store və Google Play-də yayımlanan canlı production Flutter məhsulu — mürəkkəb domen məntiqi, multi-flavor build və özüm idarə etdiyim store release prosesi ilə.',
      },
      {
        slug: 'lorex-lms',
        tag: 'TƏHSİL · MOBİL',
        title: 'Lorex LMS',
        summary:
          'eTelim / İdea Consulting ekosistemində multi-tenant learner LMS — təlimlər, zəngin kontent, quiz, hesabatlar, kitabxana və sertifikatlar.',
        stack: 'Flutter · Dart · Riverpod · GoRouter · Dio · HTTP · WebView · fl_chart',
        storeLinks: false,
        role: 'Middle Flutter Developer — LMS feature-ları, REST inteqrasiya, domain/auth axınları',
        overview: [
          'Lorex — “Təlim İdarəetmə Portalı” Idea Consulting and Solutions məhsulu olan Lorex sisteminin mobil versiyasıdır. Domain seçimi ilə müxtəlif backend API-lərə qoşulur.',
          'Axın: domain → sign-in → home → təlimlər / kontent / quiz → hesabatlar, kitabxana, xəbərlər, sertifikat və profil.',
          'Kurs player UI-si, content viewer-lər, quiz gating, report ekranları və REST inteqrasiya üzərində işlənilib.',
        ],
        highlights: [
          {
            title: 'Multi-tenant domain gate',
            body: 'Demo / Rabitəbank / local mühitlər — bir binary, ayrı API origin-lər (*.etelim.az).',
          },
          {
            title: 'Təlim player',
            body: 'HTML, şəkil, PDF/Office WebView, video/YouTube və səhifə-səhifə progress; last lesson resume.',
          },
          {
            title: 'Quiz gating',
            body: 'Required/optional quiz-lər növbəti səhifəni kilidləyir; start/finish quiz API-ləri.',
          },
          {
            title: 'Hesabatlar & sertifikat',
            body: 'Ümumi baxış, təlimlər, qruplar, sertifikatlar; fl_chart + PDF/screenshot export.',
          },
          {
            title: 'Kitabxana & xəbərlər',
            body: 'Material download/share, news HTML, notification deep-link-ləri.',
          },
          {
            title: 'Enroll & statuslar',
            body: 'Yeni / tamamlanmamış / tamamlanmış siyahılar; join/continue CTA və end-date expiry.',
          },
        ],
        architecture: [
          {
            title: 'Riverpod DI + state',
            body: 'ProviderScope; service Provider-lər + FutureProvider/NotifierProvider (course, quiz, reports, auth).',
          },
          {
            title: 'GoRouter + bottom nav',
            body: 'Home · Reports · Trainings · Library shell; token-validasiyalı initial route.',
          },
          {
            title: 'Hybrid networking',
            body: 'Əsas Dio ApiClient + bəzi çağırışlarda http wrapper; ApiConfig environment switch.',
          },
          {
            title: 'Access helpers',
            body: 'course_access / course_page_access — web-parity enroll və quiz kilid qaydaları.',
          },
        ],
        features: [
          'Domain-based sign-in + session bootstrap',
          'Home: recent/new courses, news, notifications',
          'Training info + internal learning player',
          'Exam / quiz + nəticə tarixçəsi',
          'Course files download',
          'Library (OEM permission UX daxil)',
          'Reports tab-ları + certificate preview',
          'Profile, account və password adjustment',
          'Hardcoded AZ UI copy (l10n package yoxdur)',
        ],
        technical: [
          'Cold start: GET /user-settings ilə token validasiyası',
          'Auth: csec.etelim.az / rabitebank-csec.etelim.az',
          'WebView video + Office/PDF embed viewer-lər',
          'flutter_widget_from_html ilə zəngin məzmun',
          'pdf + screenshot ilə sertifikat export',
          'permission_handler / open_filex / share_plus',
          'Incremental Riverpod refactor (mixed Dio/http qalıb)',
        ],
        outcome:
          'Korporativ LMS learner app — multi-tenant auth, zəngin kurs delivery, quiz gating və hesabat/sertifikat axınları ilə Angular web məhsuluna paralel mobil client.',
      },
      {
        slug: 'marsol',
        tag: 'PARTNYOR · MOBİL',
        title: 'Marsol Plus',
        summary:
          'Partnyorlar, aksiyalar, elanlar, qalereya, QR/scanner və xəritə inteqrasiyası olan B2B partnyor mobil tətbiqi.',
        stack: 'Flutter · Dart · Provider · GetIt · GoRouter · Firebase · Google Maps · QR',
        storeLinks: false,
        role: 'Flutter Developer — auth, registered area, maps/QR və API inteqrasiyası',
        overview: [
          'Marsol Plus (marsol.az ekosistemi) partnyor və sponsor yönümlü mobil məhsuldur. API pre-api.marsol.az üzərindən işləyir.',
          'İstifadəçi axını public home-dan login/OTP/register-ə, sonra registered zona: aksiyalar, sales/adverts, partners, gallery, profile, settings və scanner.',
          'Mən auth axınları, registered ekranlar, Firebase messaging və REST endpoint inteqrasiyası üzərində işləmişəm.',
        ],
        highlights: [
          {
            title: 'Auth & OTP',
            body: 'Device login, OTP verification, register axını və session redirect qaydaları.',
          },
          {
            title: 'Aksiyalar & görüş nöqtələri',
            body: 'Action list/detail, meeting point ekranları və partnyor əməkdaşlığı prosesləri.',
          },
          {
            title: 'Sales & elanlar',
            body: 'Advert list/detail, create advert və paket seçimi (packages/contracts).',
          },
          {
            title: 'Partnyorlar & xəritə',
            body: 'Partners list/detail və Google Maps üzərində sponsor/map məlumatları.',
          },
          {
            title: 'Qalereya',
            body: 'Folder/file əlavəetmə, göstərmə və update axınları.',
          },
          {
            title: 'QR & scanner',
            body: 'Profil QR ekranı və mobile_scanner ilə scan funksionallığı.',
          },
        ],
        architecture: [
          {
            title: 'GoRouter + shell',
            body: 'Public və registered route-lar, redirect/auth guard və nested navigation.',
          },
          {
            title: 'State + DI',
            body: 'Provider UI state üçün; GetIt locator shared service-lər üçün.',
          },
          {
            title: 'API layer',
            body: 'ApiEndpoints mərkəzi: partners, actions, news, adverts, gallery, FCM, notifications.',
          },
          {
            title: 'Firebase',
            body: 'Firebase Core + Messaging və local notifications ilə push dəstəyi.',
          },
        ],
        features: [
          'Public home + login/register/OTP',
          'Registered home (actions, news, sales, partners)',
          'Notifications',
          'Gallery CRUD axınları',
          'Profile, person edit, contracts, packages',
          'QR profil və scanner',
          'Settings: security, policies, notification preferences',
          'Maps üzərində partnyorlar',
        ],
        technical: [
          'HTTP client + SharedPreferences session',
          'geolocator + google_maps_flutter',
          'mobile_scanner QR oxuma üçün',
          'image_picker / image processing',
          'permission_handler icazə axınları',
          'FCM token endpoint inteqrasiyası',
          'pre-api.marsol.az REST mühiti',
        ],
        outcome:
          'Partnyor ekosistemi üçün çoxmodullu Flutter app — auth-dan maps/QR-ə qədər registered user experience.',
      },
      {
        slug: 'store-release',
        tag: 'RELEASE · STORES',
        title: 'App Store & Play Release',
        summary:
          'iOS və Android store release bacarığım — build, signing, TestFlight/internal testing, metadata, review və production yayımı.',
        stack: 'App Store Connect · Google Play Console · TestFlight · Xcode · Flutter Build',
        storeLinks: false,
        role: 'Release owner — store submission və post-release dəstək',
        overview: [
          'Sadəcə kod yazmaqla bitmir: production Flutter məhsullarını App Store və Google Play-ə çıxarmaq da işimin bir hissəsidir.',
          'AutoScop kimi canlı məhsullarda release checklist-i özüm aparıram — versioning-dən review cavabına qədər.',
        ],
        highlights: [
          {
            title: 'App Store Connect',
            body: 'Archive/upload, certificates & provisioning, TestFlight, metadata, review submission.',
          },
          {
            title: 'Google Play Console',
            body: 'AAB build, signing, internal/closed/open testing track-ləri və production rollout.',
          },
          {
            title: 'Versioning & flavors',
            body: 'build-name/build-number, dev/prod flavor-lar, release notes və changelog.',
          },
          {
            title: 'Review readiness',
            body: 'Privacy, permissions, screenshots, store listing və rejection risklərinin azaldılması.',
          },
          {
            title: 'QA before ship',
            body: 'Release/profile build test, smoke checklist, device yoxlaması.',
          },
          {
            title: 'Post-release',
            body: 'Crash/monitorinq siqnallarına reaksiya və hotfix release axını.',
          },
        ],
        architecture: [
          {
            title: 'Release pipeline mindset',
            body: 'Feature → QA → store build → review → production → monitor.',
          },
          {
            title: 'Environment separation',
            body: 'Dev/test və production app id, Firebase config və API base URL ayrılığı.',
          },
        ],
        features: [
          'iOS archive & App Store upload',
          'Android AAB & Play upload',
          'TestFlight / internal testing',
          'Store listing & screenshots prep',
          'Release notes yazmaq',
          'Review checklist',
          'Production rollout',
        ],
        technical: [
          'flutter build ipa / appbundle',
          'Xcode signing & provisioning profiles',
          'Play App Signing',
          'Version & build number idarəsi',
          'Privacy nutrition labels / Data safety form',
          'Store rejection fix & resubmit',
        ],
        outcome:
          'Feature-dan store-a qədər ownership — App Store və Google Play-də real production release təcrübəsi.',
      },
    ],
  },
  en: {
    back: '← Back to works',
    roleLabel: 'Role',
    overviewLabel: 'Overview',
    highlightsLabel: 'Key areas',
    architectureLabel: 'Architecture',
    featuresLabel: 'Functionality',
    technicalLabel: 'Technical decisions',
    outcomeLabel: 'Outcome',
    stackLabel: 'Stack',
    openApp: 'Open app',
    notFoundTitle: 'Project not found',
    notFoundBody: 'This page does not exist or the link is incorrect.',
    homeLink: 'Back to home',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    projects: [
      {
        slug: 'autoscop',
        tag: 'MOBILE · PRODUCTION',
        title: 'AutoScop',
        summary:
          'A production vehicle companion for Azerbaijan — digital garage, expenses (past/forecast), reminders, documents, partner services, and Bronze→Silver→Gold trust status.',
        stack: 'Flutter · Dart · Dio · GetIt · Provider · Firebase · GoRouter · Secure Storage · Camera',
        storeLinks: true,
        role: 'Middle Flutter Developer — feature delivery, API integration, App Store & Play release',
        overview: [
          'AutoScop (autoscop.az, v1.0.16+) is a digital garage and vehicle management product. Production: app.autoscop.az; test: testapp.autoscop.az. Android package: az.autoscop.app.',
          'Feature-first codebase (~300+ Dart files): vehicle, expenses, reminders, documents, services_and_partners, auth, notifications, trust_status, vehicle_onboarding, and more.',
          'Beyond UI/API features, I also run release builds, version bumps, store metadata and App Store / Google Play submissions.',
        ],
        highlights: [
          {
            title: 'Digital garage',
            body: 'Multi-car garage, brand/model/year, technical lookups (engine, fuel, transmission, etc.) and mileage updates.',
          },
          {
            title: 'Expenses + predictions',
            body: 'Past / Expected tabs, gauges/charts, fuel·wash·insurance·service CRUD and /expenses/predictions.',
          },
          {
            title: 'Reminders & registry',
            body: 'Date/mileage/service/insurance/license reminders; registry hub for license, inspection, power of attorney.',
          },
          {
            title: 'Trust status (Bronze → Gold)',
            body: 'Partner-discount status ladder; Gold document capture, submit and resubmit flows.',
          },
          {
            title: 'Service & partners',
            body: 'Official/own-choice services, catalog, promo codes, service orders and reviews.',
          },
          {
            title: 'Auth & security',
            body: 'Email OTP, Google/Apple, PIN + biometrics, JWT refresh, secure storage, InstallGuard.',
          },
        ],
        architecture: [
          {
            title: 'Feature-first modules',
            body: 'Each domain keeps screens / notifiers / services / models / widgets.',
          },
          {
            title: 'Provider + GetIt',
            body: 'Provider/ChangeNotifier for UI rebuilds; GetIt for DI and singleton services.',
          },
          {
            title: 'GoRouter shell',
            body: '100+ routes, bottom nav (Home · Expenses · Services · More) and middle action menu.',
          },
          {
            title: 'Dio + JWT lifecycle',
            body: 'Bearer interceptor, single-flight refresh, SessionManager logout, env-based base URL.',
          },
        ],
        features: [
          'Splash/auth gate + PIN/biometric unlock',
          '7-step vehicle onboarding (photo → documents)',
          'Garage + car details + mileage',
          'Spendings dashboard (Past / Expected)',
          'Reminders, regulations, insurance',
          'Documents / registry CRUD',
          'Services & partners + promo codes',
          'Trust status: Bronze / Silver / Gold',
          'Camera document capture (Gold)',
          'FCM + local notifications + device register',
          'AZ/EN l10n (ARB) + settings/FAQ/news',
        ],
        technical: [
          'Android flavors: dev (az.autoscop.testapp) / prod (az.autoscop.app)',
          'Firebase Core + Messaging background handler',
          'flutter_secure_storage + local_auth + JWT refresh',
          'Google Sign-In and Sign in with Apple',
          'camera + document_camera_frame (Gold KYC-like flow)',
          'Android Photo Picker (multi-image limit)',
          'Opt-in proxy SSL inspection (QA)',
          'App Store Connect + Google Play Console release (signing, versioning, review)',
        ],
        outcome:
          'A live production Flutter product on App Store and Google Play — complex domain logic, multi-flavor builds, and a store release process I own end-to-end.',
      },
      {
        slug: 'lorex-lms',
        tag: 'EDUCATION · MOBILE',
        title: 'Lorex LMS',
        summary:
          'A multi-tenant learner LMS in the eTelim / Idea Consulting ecosystem — trainings, rich content, quizzes, reports, library and certificates.',
        stack: 'Flutter · Dart · Riverpod · GoRouter · Dio · HTTP · WebView · fl_chart',
        storeLinks: false,
        role: 'Middle Flutter Developer — LMS features, REST integration, domain/auth flows',
        overview: [
          'Lorex is the learner mobile client for the “Training Management Portal” (Idea Consulting and Solutions / eTelim). Domain selection connects to demo and Rabitəbank backends.',
          'Flow: domain → sign-in (role=4 learner) → home → trainings / content / quizzes → reports, library, news, certificates and profile.',
          'I work on the course player UI, content viewers, quiz gating, report screens and REST integration.',
        ],
        highlights: [
          {
            title: 'Multi-tenant domain gate',
            body: 'Demo / Rabitəbank / local — one binary, separate API origins (*.etelim.az).',
          },
          {
            title: 'Training player',
            body: 'HTML, images, PDF/Office WebView, video/YouTube and page-by-page progress with lesson resume.',
          },
          {
            title: 'Quiz gating',
            body: 'Required/optional quizzes lock next pages; start/finish quiz APIs.',
          },
          {
            title: 'Reports & certificates',
            body: 'Overview, trainings, groups, certificates; fl_chart + PDF/screenshot export.',
          },
          {
            title: 'Library & news',
            body: 'Material download/share, HTML news, notification deep-links.',
          },
          {
            title: 'Enroll & statuses',
            body: 'New / incomplete / completed lists; join/continue CTAs and end-date expiry.',
          },
        ],
        architecture: [
          {
            title: 'Riverpod DI + state',
            body: 'ProviderScope; service Providers + FutureProvider/NotifierProvider (course, quiz, reports, auth).',
          },
          {
            title: 'GoRouter + bottom nav',
            body: 'Home · Reports · Trainings · Library shell; token-validated initial route.',
          },
          {
            title: 'Hybrid networking',
            body: 'Primary Dio ApiClient + http wrapper for some calls; ApiConfig environment switch.',
          },
          {
            title: 'Access helpers',
            body: 'course_access / course_page_access — web-parity enroll and quiz lock rules.',
          },
        ],
        features: [
          'Domain-based sign-in + session bootstrap',
          'Home: recent/new courses, news, notifications',
          'Training info + internal learning player',
          'Exam / quiz + result history',
          'Course files download',
          'Library (including OEM permission UX)',
          'Report tabs + certificate preview',
          'Profile, account and password adjustment',
          'Hardcoded AZ UI copy (no l10n package)',
        ],
        technical: [
          'Cold start: validate token via GET /user-settings',
          'Auth: csec.etelim.az / rabitebank-csec.etelim.az',
          'WebView video + Office/PDF embed viewers',
          'Rich content via flutter_widget_from_html',
          'Certificate export with pdf + screenshot',
          'permission_handler / open_filex / share_plus',
          'Incremental Riverpod refactor (mixed Dio/http remains)',
        ],
        outcome:
          'A corporate LMS learner app — multi-tenant auth, rich course delivery, quiz gating and report/certificate flows as a mobile peer to the Angular web product.',
      },
      {
        slug: 'marsol',
        tag: 'PARTNER · MOBILE',
        title: 'Marsol Plus',
        summary:
          'A B2B partner mobile app with partners, campaigns, adverts, gallery, QR/scanner and map integration.',
        stack: 'Flutter · Dart · Provider · GetIt · GoRouter · Firebase · Google Maps · QR',
        storeLinks: false,
        role: 'Flutter Developer — auth, registered area, maps/QR and API integration',
        overview: [
          'Marsol Plus (marsol.az ecosystem) is a partner/sponsor-oriented mobile product. The API runs on pre-api.marsol.az.',
          'The user journey goes from public home to login/OTP/register, then into the registered area: actions, sales/adverts, partners, gallery, profile, settings and scanner.',
          'I worked on auth flows, registered screens, Firebase messaging and REST endpoint integration.',
        ],
        highlights: [
          {
            title: 'Auth & OTP',
            body: 'Device login, OTP verification, register flow and session redirect rules.',
          },
          {
            title: 'Actions & meeting points',
            body: 'Action list/detail, meeting-point screens and partnership request flows.',
          },
          {
            title: 'Sales & adverts',
            body: 'Advert list/detail, create advert and package/contract selection.',
          },
          {
            title: 'Partners & maps',
            body: 'Partners list/detail and Google Maps sponsor/map data.',
          },
          {
            title: 'Gallery',
            body: 'Folder/file add, show and update flows.',
          },
          {
            title: 'QR & scanner',
            body: 'Profile QR screen and scanning via mobile_scanner.',
          },
        ],
        architecture: [
          {
            title: 'GoRouter + shell',
            body: 'Public and registered routes, redirect/auth guard and nested navigation.',
          },
          {
            title: 'State + DI',
            body: 'Provider for UI state; GetIt locator for shared services.',
          },
          {
            title: 'API layer',
            body: 'Central ApiEndpoints for partners, actions, news, adverts, gallery, FCM and notifications.',
          },
          {
            title: 'Firebase',
            body: 'Firebase Core + Messaging with local notifications for push support.',
          },
        ],
        features: [
          'Public home + login/register/OTP',
          'Registered home (actions, news, sales, partners)',
          'Notifications',
          'Gallery CRUD flows',
          'Profile, person edit, contracts, packages',
          'QR profile and scanner',
          'Settings: security, policies, notification preferences',
          'Partners on maps',
        ],
        technical: [
          'HTTP client + SharedPreferences session',
          'geolocator + google_maps_flutter',
          'mobile_scanner for QR reading',
          'image_picker / image processing',
          'permission_handler permission flows',
          'FCM token endpoint integration',
          'pre-api.marsol.az REST environment',
        ],
        outcome:
          'A multi-module Flutter app for a partner ecosystem — from auth to maps/QR registered user experience.',
      },
      {
        slug: 'store-release',
        tag: 'RELEASE · STORES',
        title: 'App Store & Play Release',
        summary:
          'My iOS and Android store release skills — build, signing, TestFlight/internal testing, metadata, review and production ship.',
        stack: 'App Store Connect · Google Play Console · TestFlight · Xcode · Flutter Build',
        storeLinks: false,
        role: 'Release owner — store submission and post-release support',
        overview: [
          'Shipping doesn’t stop at code: getting production Flutter apps onto the App Store and Google Play is part of my work.',
          'On live products like AutoScop I own the release checklist — from versioning through review response.',
        ],
        highlights: [
          {
            title: 'App Store Connect',
            body: 'Archive/upload, certificates & provisioning, TestFlight, metadata, review submission.',
          },
          {
            title: 'Google Play Console',
            body: 'AAB builds, signing, internal/closed/open testing tracks and production rollout.',
          },
          {
            title: 'Versioning & flavors',
            body: 'build-name/build-number, dev/prod flavors, release notes and changelog.',
          },
          {
            title: 'Review readiness',
            body: 'Privacy, permissions, screenshots, store listing and reducing rejection risk.',
          },
          {
            title: 'QA before ship',
            body: 'Release/profile build testing, smoke checklist, device verification.',
          },
          {
            title: 'Post-release',
            body: 'Reacting to crash/monitoring signals and hotfix release flow.',
          },
        ],
        architecture: [
          {
            title: 'Release pipeline mindset',
            body: 'Feature → QA → store build → review → production → monitor.',
          },
          {
            title: 'Environment separation',
            body: 'Separate dev/test and production app ids, Firebase configs and API base URLs.',
          },
        ],
        features: [
          'iOS archive & App Store upload',
          'Android AAB & Play upload',
          'TestFlight / internal testing',
          'Store listing & screenshots prep',
          'Writing release notes',
          'Review checklist',
          'Production rollout',
        ],
        technical: [
          'flutter build ipa / appbundle',
          'Xcode signing & provisioning profiles',
          'Play App Signing',
          'Version & build number management',
          'Privacy nutrition labels / Data safety form',
          'Store rejection fix & resubmit',
        ],
        outcome:
          'Ownership from feature to store — real production release experience on App Store and Google Play.',
      },
    ],
  },
}

export function getProject(lang: 'az' | 'en', slug: string) {
  return projectCopy[lang].projects.find((project) => project.slug === slug)
}
