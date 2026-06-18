const storageKey = "mohammed-alqahom-portfolio-v3";
const previousStorageKey = "mohammed-alqahom-portfolio-v2";
const languageKey = "mohammed-portfolio-language";
const adminSessionKey = "mohammed-admin-session";
const adminPasswordHash = "";

const tailoringProject = {
  id: "tailoring-management-system-mts",
  featured: true,
  image: "assets/mts-login.png",
  title: {
    ar: "نظام إدارة محلات الخياطة MTS",
    en: "Tailoring Management System (MTS)",
  },
  category: "C# / WinForms / SQL Server / Crystal Reports / 3-Tier Architecture",
  description: {
    ar: "عملت على هذا النظام كتطبيق سطح مكتب متكامل لإدارة محلات الخياطة. ركزت فيه على الطلبات، العملاء، المقاسات، الأقمشة والمخزون، فواتير الشراء، المستخدمين والصلاحيات، التقارير، والإعدادات. بنيته بأسلوب 3-Tier حتى يكون منطق العمل منفصلًا عن واجهات WinForms وطبقة الوصول إلى SQL Server.",
    en: "I built this as a complete desktop system for tailoring shop operations. I focused on orders, customers, measurements, fabrics and inventory, purchase invoices, users and RBAC permissions, reports, and settings. I structured it with a 3-Tier Architecture to separate the WinForms interface, business logic, and SQL Server data access.",
  },
  speed: {
    ar: "نظام حقيقي متعدد الوحدات مع صلاحيات وتقارير",
    en: "Real multi-module system with RBAC and reporting",
  },
  github: "https://github.com/MOGAHEDMOHAMMED/Tailoring-Management-System_MTS.git",
  demo: "#",
  colors: ["#1428a0", "#3ad6b0"],
};

const tajerProject = {
  id: "tajer-offline-first-business-system",
  featured: true,
  image: "assets/tajer-dashboard.jpg",
  gallery: [
    "assets/tajer-screen-1.jpg",
    "assets/tajer-screen-2.jpg",
    "assets/tajer-screen-3.jpg",
    "assets/tajer-screen-4.jpg",
    "assets/tajer-screen-5.jpg",
    "assets/tajer-screen-6.jpg",
    "assets/tajer-screen-7.jpg",
    "assets/tajer-screen-8.jpg",
    "assets/tajer-screen-9.jpg",
    "assets/tajer-screen-10.jpg",
  ],
  icon: "assets/tajer-logo.png",
  docs: "assets/tager-system-reference.pdf",
  title: {
    ar: "نظام تاجر لإدارة المتاجر والمبيعات",
    en: "Tajer Store and Sales Management System",
  },
  category: "Flutter / GetX / SQLite / Firebase / Offline First / sync_queue",
  description: {
    ar: "في نظام تاجر ركزت على بناء تطبيق تجاري يعمل حتى بدون إنترنت. أضفت إدارة المنتجات والتصنيفات، الباركود والمخزون، الموردين والمشتريات، العملاء والفواتير، الديون والمدفوعات، التقارير، المستخدمين والأدوار، والخطط والاشتراكات. اعتمدت على SQLite للعمل المحلي السريع، وFirebase للحسابات والسحابة، وsync_queue لحفظ العمليات ثم رفعها عند عودة الاتصال بدون فقدان بيانات.",
    en: "In Tajer, I focused on building a business app that keeps working even without internet. I added products and categories, barcode and inventory, suppliers and purchases, customers and invoices, debts and payments, reports, users and roles, plans and subscriptions. I used SQLite for fast local work, Firebase for accounts and cloud sync, and a sync_queue to store operations and upload them safely when the connection returns.",
  },
  speed: {
    ar: "Offline First مع مزامنة Firebase وطابور عمليات آمن",
    en: "Offline First with Firebase sync and a safe operation queue",
  },
  github: "#",
  demo: "#",
  colors: ["#107a58", "#f1b827"],
};

const rowadCollectProject = {
  id: "rowad-collect-web-billing-system",
  image: "assets/rowad-collect-logo.png",
  title: {
    ar: "نظام رواد كولكت للتحصيل والفوترة",
    en: "Rowad Collect Billing and Collection System",
  },
  category: "PHP / MySQL / PDO / JavaScript / mPDF / Responsive Web",
  description: {
    ar: "بنيت هذا النظام لإدارة التحصيل والفوترة عبر الويب. عملت فيه على تسجيل الدخول، لوحة التحكم، إدارة العملاء والمستخدمين، إنشاء وتعديل الفواتير، تسجيل الدفعات، متابعة الحالات المتأخرة والمدفوعة والمستحقة، البحث والتصفية، وتوليد تقارير مالية PDF باستخدام mPDF.",
    en: "I built this web system for billing and collection management. I worked on login, dashboard views, customer and user management, invoice creation and editing, payment tracking, paid/due/overdue status handling, search and filtering, and PDF financial reports generated with mPDF.",
  },
  speed: {
    ar: "نظام ويب ديناميكي مع تقارير PDF وحسابات مالية",
    en: "Dynamic web system with PDF reports and financial calculations",
  },
  github: "https://github.com/Mohammedalqhoom",
  demo: "#",
  colors: ["#4e54c8", "#8f94fb"],
};

const i18n = {
  ar: {
    "nav.fit": "طريقتي",
    "nav.work": "المشاريع",
    "nav.skills": "المهارات",
    "nav.backend": "الباك إند",
    "nav.certificates": "الشهادات",
    "nav.about": "الخبرات",
    "nav.contact": "تواصل",
    "hero.projects": "استعراض المشاريع",
    "hero.cv": "طلب السيرة الذاتية",
    "stats.projects": "مشروع",
    "stats.tech": "تقنيات",
    "stats.certificates": "شهادات",
    "fit.title": "ما الذي أحاول تقديمه في أي فريق؟",
    "fit.card1.title": "أبني على أساس برمجي واضح",
    "fit.card1.text": "لا أتعامل مع البرمجة ككتابة أوامر فقط؛ أحاول فهم الفكرة، تقسيمها، ثم تطبيقها بأسلوب منظم يعتمد على OOP والبرمجة المهيكلة في C# وC++ وDart وPHP.",
    "fit.card2.title": "أحول الفكرة إلى مشروع يمكن تجربته",
    "fit.card2.text": "أهتم بأن يكون عملي قابلًا للعرض والفحص، سواء كان تطبيق Flutter أو موقع ويب أو نظام PHP، مع تنظيم الملفات وتحسين تجربة المستخدم قدر الإمكان.",
    "fit.card3.title": "أتعلم بسرعة وأراجع عملي",
    "fit.card3.text": "عندما أواجه أداة أو مشكلة جديدة أبحث، أجرب، وأحسن النتيجة خطوة بعد خطوة حتى أصل إلى حل واضح يمكن مشاركته على GitHub أو عرضه مباشرة.",
    "snapshot.title": "ما أريد أن يعرفه مسؤول التوظيف عني",
    "snapshot.item1": "أفهم المشكلة والمتطلبات قبل التنفيذ، ثم أبني واجهة ومنطقًا خلفيًا وقاعدة بيانات متناسقة.",
    "snapshot.item2": "أتعامل مع التعقيد بهدوء: أقسم المشكلة، أنظم الكود، وأحافظ على وضوح الحل حتى مع المسائل الطويلة.",
    "snapshot.item3": "لدي مشاريع تجارية موثقة وصور وشهادات تدعم مهاراتي بدل الاكتفاء بسرد التقنيات.",
    "snapshot.item4": "أبحث عن فرصة Junior أتعلم فيها بسرعة وأقدم قيمة واضحة من أول المهام.",
    "work.title": "مشاريع كتبتها لتوضح طريقة تفكيري ومستواي",
    "skills.title": "المهارات والتقنيات",
    "skills.note": "كتبت هذه المهارات بشكل مباشر حتى يعرف مسؤول التوظيف المجالات التي أعمل عليها وما الذي أستطيع تطويره.",
    "backend.title": "أقوى جانب أعمل على تطويره هو الباك إند وقواعد البيانات",
    "backend.note": "أهتم ببناء منطق واضح، قواعد بيانات منظمة، وربط الواجهات بعمليات يمكن فهمها وفحصها وتطويرها.",
    "backend.card1.title": "أفكر بالكائنات والطبقات",
    "backend.card1.text": "أستخدم فهمي لـ OOP وتنظيم الكود لبناء طبقات واضحة وكائنات مفهومة بدل وضع كل المنطق في مكان واحد.",
    "backend.card2.title": "أتعامل مع البيانات كجزء أساسي من النظام",
    "backend.card2.text": "عملت مع MySQL وSQL Server، وأهتم بالعلاقات، الاستعلامات، الحسابات المالية، والتقارير.",
    "backend.card3.title": "أفهم أهمية العمل بدون إنترنت",
    "backend.card3.text": "في نظام تاجر استخدمت فكرة sync_queue لحفظ العمليات محليًا ثم رفعها عند توفر الاتصال.",
    "backend.card4.title": "أبني أنظمة ويب ديناميكية",
    "backend.card4.text": "أعمل على صفحات PHP لإدارة العملاء والفواتير والمدفوعات والتقارير مع اتصال واضح بقاعدة البيانات.",
    "certificates.title": "شهادات تدعم الأساس البرمجي",
    "certificates.note": "أضيف هنا الشهادات التي تثبت عملي على الخوارزميات، حل المشكلات، C، C#، Java، OOP، Agile، والتفكير التصميمي، مع تركيز خاص على النضج العملي في Level 4.",
    "certificates.open": "فتح الشهادة",
    "certificates.card1.title": "Algorithms & Problem Solving - Level 3",
    "certificates.card1.text": "تدريب عملي بعد C++ Level 2 يركز على 51 مسألة متدرجة، Clean Code، Divide & Conquer، والانتقال من حل المسائل إلى تنفيذ مشاريع حقيقية.",
    "certificates.card2.title": "Introduction to Programming using C - Level 2",
    "certificates.card2.text": "أساس قوي في البرمجة باستخدام لغة C.",
    "certificates.card3.title": "Algorithms & Problem Solving - Level 2",
    "certificates.card3.text": "تدريب عملي على خطوات حل المشكلات قبل كتابة الكود.",
    "certificates.card4.title": "OOP as it Should Be",
    "certificates.card4.text": "شهادة في مفاهيم البرمجة الكائنية وطريقة التفكير بالكائنات.",
    "certificates.card5.title": "Java Programming 3",
    "certificates.card5.text": "شهادة من إدراك في مفاهيم Java المتقدمة والبرمجة الكائنية.",
    "certificates.card6.title": "Agile Project Management",
    "certificates.card6.text": "شهادة في منهجية Agile وScrum وإدارة العمل على المنتجات.",
    "certificates.card7.title": "Design Thinking",
    "certificates.card7.text": "شهادة في التفكير التصميمي وفهم المشكلة من منظور المستخدم قبل بناء الحل.",
    "certificates.card8.title": "Algorithms & Problem Solving - Level 4",
    "certificates.card8.text": "تدريب مكثف على حل مسائل متقدمة بكميات كبيرة، مع تطبيق Clean Code وDivide & Conquer والتعامل مع التعقيد بمنهجية منظمة.",
    "certificates.card8.outcome1": "تنظيم الحلول داخل كود طويل بدون فقدان السيطرة.",
    "certificates.card8.outcome2": "استخدام Divide & Conquer وClean Code في مسائل متقدمة.",
    "certificates.card8.outcome3": "الانتقال من حل المسائل إلى التفكير بمشاريع وأنظمة واقعية.",
    "certificates.card9.title": "OOP As It Should Be In C#",
    "certificates.card9.text": "تدريب عملي على البرمجة الكائنية باستخدام C# وبناء التفكير القائم على الكلاسات.",
    "certificates.card10.title": "C# - Level 1",
    "certificates.card10.text": "أساس مركز في لغة C#، منطق البرمجة، ومبادئ التطوير على .NET.",
    "certificates.card11.title": "C# & Database Connectivity",
    "certificates.card11.text": "ربط تطبيقات C# بقواعد البيانات وبناء أنظمة سطح مكتب وأعمال تعتمد على البيانات.",
    "about.title": "كيف أعمل وأتعلم",
    "about.flutter.title": "أبني تطبيقات موبايل بـ Dart",
    "about.flutter.text": "أهتم بتنظيم الواجهات، إدارة الحالة، ربط البيانات، وتجهيز التطبيق ليكون قابلًا للتطوير.",
    "about.web.title": "أصمم واجهات ويب واضحة ومتجاوبة",
    "about.web.text": "أستخدم HTML وCSS وJavaScript لبناء صفحات حديثة تهتم بالتجربة، الأداء، وسهولة الاستخدام.",
    "about.backend.title": "أربط الواجهة بمنطق خلفي واضح",
    "about.backend.text": "أعمل على فهم النماذج، قواعد البيانات، والاستعلامات، وربطها بواجهات المستخدم بشكل منظم.",
    "about.core.title": "أبني على أساس C# وC++ وOOP",
    "about.core.text": "أعتمد على مبادئ البرمجة الكائنية والبرمجة المهيكلة حتى تكون الحلول أوضح وأسهل في الصيانة.",
    "contact.title": "للتواصل أو طلب السيرة الذاتية",
    "contact.cv": "السيرة الذاتية",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.update": "تحديث الموقع",
    "admin.siteName": "لوحة التحكم الخاصة",
    "admin.privateTitle": "صفحة الإدارة منفصلة عن موقع التقديم",
    "admin.privateText": "استخدم هذه الصفحة فقط لتحديث المحتوى، بينما يبقى موقع التقديم العام نظيفًا بدون أي مدخل للوحة التحكم.",
    "admin.backToSite": "العودة للموقع",
    "admin.preview": "معاينة الموقع",
    "admin.title": "لوحة التحكم",
    "admin.lock": "قفل اللوحة",
    "admin.identity": "الهوية",
    "admin.metrics": "الأرقام",
    "admin.project": "مشروع",
    "admin.links": "الروابط",
    "form.nameAr": "الاسم بالعربية",
    "form.nameEn": "Name in English",
    "form.roleAr": "التخصص بالعربية",
    "form.roleEn": "Role in English",
    "form.availabilityAr": "حالة التوفر بالعربية",
    "form.availabilityEn": "Availability in English",
    "form.headlineAr": "العنوان الرئيسي بالعربية",
    "form.headlineEn": "Headline in English",
    "form.bioAr": "النبذة بالعربية",
    "form.bioEn": "Bio in English",
    "form.photo": "الصورة الشخصية",
    "form.saveIdentity": "حفظ الهوية",
    "form.projectsCount": "عدد المشاريع",
    "form.techCount": "عدد التقنيات",
    "form.certificates": "عدد الشهادات",
    "form.saveMetrics": "تحديث الأرقام",
    "form.projectTitleAr": "اسم المشروع بالعربية",
    "form.projectTitleEn": "Project title in English",
    "form.category": "التقنية أو التصنيف",
    "form.speedAr": "الإنجاز بالعربية",
    "form.speedEn": "Impact in English",
    "form.github": "رابط GitHub",
    "form.demo": "رابط المعاينة",
    "form.descAr": "الوصف بالعربية",
    "form.descEn": "Description in English",
    "form.addProject": "إضافة المشروع",
    "form.email": "البريد الإلكتروني",
    "form.cv": "رابط السيرة الذاتية",
    "form.saveLinks": "حفظ الروابط",
    "auth.title": "لوحة التحكم محمية",
    "auth.text": "أدخل كلمة مرور المالك لفتح أدوات تعديل الموقع.",
    "auth.password": "كلمة المرور",
    "auth.open": "فتح اللوحة",
    "auth.cancel": "إلغاء",
    "auth.error": "كلمة المرور غير صحيحة.",
    "project.github": "GitHub",
    "project.demo": "معاينة",
    "project.docs": "التوثيق",
    "saved": "تم الحفظ",
  },
  en: {
    "nav.fit": "My Approach",
    "nav.work": "Projects",
    "nav.skills": "Skills",
    "nav.backend": "Backend",
    "nav.certificates": "Certificates",
    "nav.about": "Experience",
    "nav.contact": "Contact",
    "hero.projects": "View Projects",
    "hero.cv": "Request CV",
    "stats.projects": "Projects",
    "stats.tech": "Technologies",
    "stats.certificates": "Certificates",
    "fit.title": "What I Try to Bring to a Team",
    "fit.card1.title": "I Build on a Clear Programming Foundation",
    "fit.card1.text": "I do not treat programming as writing commands only. I try to understand the idea, break it down, then implement it with organized OOP and structured programming in C#, C++, Dart, and PHP.",
    "fit.card2.title": "I Turn Ideas into Work You Can Review",
    "fit.card2.text": "I care about making my work visible and testable, whether it is a Flutter app, web interface, or PHP system, with file organization and user experience in mind.",
    "fit.card3.title": "I Learn Fast and Improve My Work",
    "fit.card3.text": "When I face a new tool or problem, I research, test, and improve step by step until I reach a clear result that can be shared on GitHub or shown directly.",
    "snapshot.title": "What I Want Recruiters to Know About Me",
    "snapshot.item1": "I understand the problem and requirements before implementation, then build a consistent interface, backend logic, and database.",
    "snapshot.item2": "I handle complexity calmly: I break problems down, organize code, and keep solutions clear even across long problem sets.",
    "snapshot.item3": "My business-focused projects, screenshots, and certificates support my skills instead of only listing technologies.",
    "snapshot.item4": "I am looking for a junior opportunity where I can learn fast and deliver clear value from the first tasks.",
    "work.title": "Projects I Built to Show How I Think and Work",
    "skills.title": "Skills and Technologies",
    "skills.note": "I wrote these skills directly so recruiters can quickly understand the areas I work in and the tools I can grow with.",
    "backend.title": "The Area I Am Strengthening Most Is Backend and Databases",
    "backend.note": "I care about building clear logic, organized databases, and interface connections that can be understood, reviewed, and improved.",
    "backend.card1.title": "I Think in Objects and Layers",
    "backend.card1.text": "I use my understanding of OOP and code organization to build clear layers and understandable objects instead of placing all logic in one place.",
    "backend.card2.title": "I Treat Data as a Core Part of the System",
    "backend.card2.text": "I have worked with MySQL and SQL Server, and I care about relationships, queries, financial calculations, and reports.",
    "backend.card3.title": "I Understand Why Offline Work Matters",
    "backend.card3.text": "In Tajer, I used a sync_queue approach to save operations locally and upload them when the connection returns.",
    "backend.card4.title": "I Build Dynamic Web Systems",
    "backend.card4.text": "I work on PHP pages for customers, invoices, payments, and reports with clear database connectivity.",
    "certificates.title": "Certificates That Support My Programming Foundation",
    "certificates.note": "Here I include certificates that support my work in algorithms, problem solving, C, C#, Java, OOP, Agile, and design thinking, with a special focus on practical maturity in Level 4.",
    "certificates.open": "Open Certificate",
    "certificates.card1.title": "Algorithms & Problem Solving - Level 3",
    "certificates.card1.text": "Practice-focused training after C++ Level 2, built around 51 ordered problems, Clean Code, Divide & Conquer, and moving from problem solving into real project implementation.",
    "certificates.card2.title": "Introduction to Programming using C - Level 2",
    "certificates.card2.text": "A strong foundation in programming with the C language.",
    "certificates.card3.title": "Algorithms & Problem Solving - Level 2",
    "certificates.card3.text": "Practical training on solving problems before writing code.",
    "certificates.card4.title": "OOP as it Should Be",
    "certificates.card4.text": "A certificate in object-oriented programming concepts and object-based thinking.",
    "certificates.card5.title": "Java Programming 3",
    "certificates.card5.text": "An Edraak certificate in advanced Java concepts and object-oriented programming.",
    "certificates.card6.title": "Agile Project Management",
    "certificates.card6.text": "A certificate in Agile methodology, Scrum, and product work management.",
    "certificates.card7.title": "Design Thinking",
    "certificates.card7.text": "A certificate in design thinking and understanding problems from the user perspective before building solutions.",
    "certificates.card8.title": "Algorithms & Problem Solving - Level 4",
    "certificates.card8.text": "Intensive training in solving large volumes of advanced problems while applying Clean Code, Divide & Conquer, and structured complexity handling.",
    "certificates.card8.outcome1": "Keeping long solutions organized without losing control.",
    "certificates.card8.outcome2": "Using Divide & Conquer and Clean Code in advanced problem solving.",
    "certificates.card8.outcome3": "Moving from problem solving into realistic system-level thinking.",
    "certificates.card9.title": "OOP As It Should Be In C#",
    "certificates.card9.text": "Practical object-oriented programming with C# and class-based system thinking.",
    "certificates.card10.title": "C# - Level 1",
    "certificates.card10.text": "A focused foundation in C# syntax, programming logic, and .NET development basics.",
    "certificates.card11.title": "C# & Database Connectivity",
    "certificates.card11.text": "Connecting C# applications with databases and building data-driven desktop/business systems.",
    "about.title": "How I Work and Learn",
    "about.flutter.title": "I Build Mobile Apps with Dart",
    "about.flutter.text": "I care about organized interfaces, state handling, data connection, and preparing apps for future development.",
    "about.web.title": "I Design Clear Responsive Web Interfaces",
    "about.web.text": "I use HTML, CSS, and JavaScript to build modern pages with attention to experience, performance, and usability.",
    "about.backend.title": "I Connect Interfaces with Clear Backend Logic",
    "about.backend.text": "I work on understanding models, databases, queries, and connecting them with user interfaces in an organized way.",
    "about.core.title": "I Build on C#, C++, and OOP",
    "about.core.text": "I rely on object-oriented and structured programming principles so solutions are clearer and easier to maintain.",
    "contact.title": "Contact or Request My CV",
    "contact.cv": "CV",
    "footer.rights": "All rights reserved.",
    "footer.update": "Update Site",
    "admin.siteName": "Private Dashboard",
    "admin.privateTitle": "The Admin Page Is Separate from the Application Portfolio",
    "admin.privateText": "Use this page only to update content, while the public portfolio stays clean with no dashboard entry point.",
    "admin.backToSite": "Back to Site",
    "admin.preview": "Preview Site",
    "admin.title": "Dashboard",
    "admin.lock": "Lock Dashboard",
    "admin.identity": "Identity",
    "admin.metrics": "Metrics",
    "admin.project": "Project",
    "admin.links": "Links",
    "form.nameAr": "Arabic Name",
    "form.nameEn": "English Name",
    "form.roleAr": "Arabic Role",
    "form.roleEn": "English Role",
    "form.availabilityAr": "Arabic Availability",
    "form.availabilityEn": "English Availability",
    "form.headlineAr": "Arabic Headline",
    "form.headlineEn": "English Headline",
    "form.bioAr": "Arabic Bio",
    "form.bioEn": "English Bio",
    "form.photo": "Profile Photo",
    "form.saveIdentity": "Save Identity",
    "form.projectsCount": "Projects Count",
    "form.techCount": "Technologies Count",
    "form.certificates": "Certificates Count",
    "form.saveMetrics": "Update Metrics",
    "form.projectTitleAr": "Arabic Project Title",
    "form.projectTitleEn": "English Project Title",
    "form.category": "Technology or Category",
    "form.speedAr": "Arabic Impact",
    "form.speedEn": "English Impact",
    "form.github": "GitHub Link",
    "form.demo": "Live Demo Link",
    "form.descAr": "Arabic Description",
    "form.descEn": "English Description",
    "form.addProject": "Add Project",
    "form.email": "Email",
    "form.cv": "CV Link",
    "form.saveLinks": "Save Links",
    "auth.title": "Protected Dashboard",
    "auth.text": "Enter the owner password to open the editing tools.",
    "auth.password": "Password",
    "auth.open": "Open Dashboard",
    "auth.cancel": "Cancel",
    "auth.error": "Incorrect password.",
    "project.github": "GitHub",
    "project.demo": "Live Demo",
    "project.docs": "Documentation",
    "saved": "Saved",
  },
};

const defaults = {
  identity: {
    name: { ar: "محمد القحوم", en: "Mohammed Alqahom" },
    role: { ar: "Software Engineer | Business Systems Developer", en: "Software Engineer | Business Systems Developer" },
    availability: {
      ar: "أبني حلول أعمال قابلة للتوسع تبدأ من فهم المشكلة وتصميم النظام",
      en: "I build scalable business solutions that start with understanding the problem and designing the system",
    },
    headline: {
      ar: "أنا محمد القحوم، أبني أنظمة أعمال قبل أن أكتب الكود.",
      en: "I am Mohammed Alqahom, building business systems before writing code.",
    },
    bio: {
      ar: "مهندس برمجيات شغوف بتصميم وبناء الأنظمة التجارية وحلول الأعمال التي تساعد الشركات على العمل بكفاءة أكبر واتخاذ قرارات أفضل. أؤمن أن نجاح أي مشروع لا يبدأ من كتابة الكود، بل من فهم المشكلة، تحليل المتطلبات، تصميم بنية قوية، وقاعدة بيانات سليمة. أعمل على Flutter وC# وتطبيقات الويب مع اهتمام خاص بأنظمة ERP وPOS والمخزون والمبيعات.",
      en: "A software engineer passionate about designing and building business systems that help companies work more efficiently and make better decisions. I believe successful software starts before code: understanding the problem, analyzing requirements, designing a strong architecture, and building a reliable database. I work with Flutter, C#, and web technologies, with a special focus on ERP, POS, inventory, and sales systems.",
    },
    photo: "assets/profile-mohammed.png",
  },
  metrics: { projects: 12, technologies: 12, certificates: 11 },
  links: {
    email: "mhmdalqhwm27@gmail.com",
    github: "https://github.com/Mohammedalqhoom",
    linkedin: "https://www.linkedin.com/in/mohammad-al-qhoom-4406a5394",
    cv: "#",
  },
  skills: [
    { ar: "Flutter", en: "Flutter" },
    { ar: "Dart", en: "Dart" },
    { ar: "PHP", en: "PHP" },
    { ar: "HTML", en: "HTML" },
    { ar: "CSS", en: "CSS" },
    { ar: "JavaScript", en: "JavaScript" },
    { ar: "Java", en: "Java" },
    { ar: "C#", en: "C#" },
    { ar: "C# Backend", en: "C# Backend" },
    { ar: "C++", en: "C++" },
    { ar: "OOP", en: "OOP" },
    { ar: "أساسيات الكود النظيف", en: "Clean Code Basics" },
    { ar: "GitHub", en: "GitHub" },
    { ar: "مفاهيم REST", en: "REST Concepts" },
    { ar: "البرمجة المهيكلة", en: "Structured Programming" },
    { ar: "سرعة التعلم", en: "Fast Learning" },
    { ar: "Software Engineering", en: "Software Engineering" },
    { ar: "System Design", en: "System Design" },
    { ar: "Clean Architecture", en: "Clean Architecture" },
    { ar: "Database Design", en: "Database Design" },
    { ar: "Business Automation", en: "Business Automation" },
    { ar: "ERP Systems", en: "ERP Systems" },
    { ar: "Offline First", en: "Offline First" },
    { ar: "SQLite", en: "SQLite" },
    { ar: "Firebase", en: "Firebase" },
    { ar: "GetX", en: "GetX" },
    { ar: "Repository Pattern", en: "Repository Pattern" },
    { ar: "Controllers / Models", en: "Controllers / Models" },
    { ar: "Sync Queue", en: "Sync Queue" },
    { ar: "Data Modeling", en: "Data Modeling" },
    { ar: "RBAC Permissions", en: "RBAC Permissions" },
    { ar: "Inventory Systems", en: "Inventory Systems" },
    { ar: "POS Workflows", en: "POS Workflows" },
    { ar: "MySQL", en: "MySQL" },
    { ar: "SQL Server", en: "SQL Server" },
    { ar: "PDO", en: "PDO" },
    { ar: "PDF Reports", en: "PDF Reports" },
    { ar: "mPDF", en: "mPDF" },
    { ar: "Agile", en: "Agile" },
    { ar: "Scrum", en: "Scrum" },
    { ar: "التفكير التصميمي", en: "Design Thinking" },
    { ar: "حل المشكلات المتقدمة", en: "Advanced Problem Solving" },
    { ar: "Divide & Conquer", en: "Divide & Conquer" },
    { ar: "System-Level Thinking", en: "System-Level Thinking" },
  ],
  projects: [
    tajerProject,
    tailoringProject,
    rowadCollectProject,
    {
      title: { ar: "تطبيق Flutter لإدارة المهام والإنتاجية", en: "Flutter Task and Productivity App" },
      category: "Flutter / Dart",
      description: {
        ar: "بنيت هذا النوع من التطبيقات لأتدرب على تنظيم الواجهات، إدارة الحالة، تقسيم الملفات، وتجهيز تجربة يمكن تطويرها لاحقًا.",
        en: "I built this type of app to practice organizing interfaces, managing state, structuring files, and preparing an experience that can grow later.",
      },
      speed: { ar: "جاهز للعرض على GitHub", en: "Ready to review on GitHub" },
      github: "#",
      demo: "#",
      colors: ["#3ad6b0", "#ff755f"],
    },
    {
      title: { ar: "موقع شخصي احترافي قابل للإدارة", en: "Professional Managed Portfolio Website" },
      category: "HTML / CSS / JavaScript",
      description: {
        ar: "صممت هذا الموقع ليكون ملفي المهني أمام جهات التوظيف، مع واجهة متجاوبة، حركات خفيفة، وتجربة منظمة تعرض عملي بوضوح.",
        en: "I designed this website to be my professional profile for job applications, with a responsive interface, subtle motion, and an organized experience that presents my work clearly.",
      },
      speed: { ar: "خفيف ومتجاوب", en: "Lightweight and responsive" },
      github: "#",
      demo: "#",
      colors: ["#8f7cff", "#e0b95b"],
    },
    {
      title: { ar: "نظام PHP لإدارة البيانات والعمليات", en: "PHP Data and Operations Management System" },
      category: "PHP / MySQL / Backend Concepts",
      description: {
        ar: "عملت على هذا النوع من المشاريع لأوضح فهمي للمنطق الخلفي، قواعد البيانات، فصل المسؤوليات، وربط الواجهات بعمليات الخادم.",
        en: "I worked on this type of project to show my understanding of backend logic, databases, separation of responsibilities, and connecting interfaces with server-side operations.",
      },
      speed: { ar: "كود منظم قابل للتطوير", en: "Organized and scalable code" },
      github: "#",
      demo: "#",
      colors: ["#ff755f", "#3ad6b0"],
    },
  ],
};

let currentLang = localStorage.getItem(languageKey) === "en" ? "en" : "ar";
let state = loadState();
state = ensureFeaturedProjects(state);
state = ensureProfileLinks(state);
state = ensureSkillSet(state);
state = sanitizeUnsupportedTechnologies(state);
state = strengthenBackendProfile(state);
state = enforceProfessionalIntro(state);
saveState();
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved) return mergeState(saved);

    const previous = JSON.parse(localStorage.getItem(previousStorageKey));
    if (previous) return migratePreviousState(previous);
  } catch {
    return structuredClone(defaults);
  }
  return structuredClone(defaults);
}

function mergeState(saved) {
  return {
    ...structuredClone(defaults),
    ...saved,
    identity: { ...defaults.identity, ...saved.identity },
    metrics: { ...defaults.metrics, ...saved.metrics },
    links: { ...defaults.links, ...saved.links },
    skills: saved.skills || defaults.skills,
    projects: saved.projects || defaults.projects,
  };
}

function migratePreviousState(previous) {
  const migrated = structuredClone(defaults);
  if (previous.identity) {
    migrated.identity.name.ar = previous.identity.name || defaults.identity.name.ar;
    migrated.identity.role.ar = previous.identity.role || defaults.identity.role.ar;
    migrated.identity.availability.ar = previous.identity.availability || defaults.identity.availability.ar;
    migrated.identity.headline.ar = previous.identity.headline || defaults.identity.headline.ar;
    migrated.identity.bio.ar = previous.identity.bio || defaults.identity.bio.ar;
    migrated.identity.photo = previous.identity.photo || "";
  }
  if (previous.metrics) migrated.metrics = { ...migrated.metrics, ...previous.metrics };
  if (previous.links) migrated.links = { ...migrated.links, ...previous.links };
  if (Array.isArray(previous.projects)) {
    migrated.projects = previous.projects.map((project, index) => ({
      title: { ar: project.title || "مشروع", en: defaults.projects[index]?.title.en || "Project" },
      category: project.category || "Software Project",
      description: { ar: project.description || "", en: defaults.projects[index]?.description.en || "" },
      speed: { ar: project.speed || "", en: defaults.projects[index]?.speed.en || "" },
      github: project.github || "#",
      demo: project.demo || "#",
      colors: project.colors || defaults.projects[index % defaults.projects.length].colors,
    }));
  }
  localStorage.setItem(storageKey, JSON.stringify(migrated));
  return migrated;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function ensureFeaturedProjects(currentState) {
  const projects = Array.isArray(currentState.projects) ? currentState.projects : [];
  const featuredProjects = [tajerProject, tailoringProject, rowadCollectProject];

  featuredProjects
    .slice()
    .reverse()
    .forEach((featuredProject) => {
      const existingIndex = projects.findIndex(
        (project) =>
          project.id === featuredProject.id ||
          (featuredProject.github !== "#" && project.github === featuredProject.github) ||
          (featuredProject.docs && project.docs === featuredProject.docs),
      );

      if (existingIndex >= 0) projects.splice(existingIndex, 1);
      projects.unshift(featuredProject);
    });

  currentState.projects = projects;
  currentState.metrics.projects = Math.max(Number(currentState.metrics.projects) || 0, projects.length);
  return currentState;
}

function ensureProfileLinks(currentState) {
  currentState.links = {
    ...currentState.links,
    email: "mhmdalqhwm27@gmail.com",
    github: "https://github.com/Mohammedalqhoom",
    linkedin: "https://www.linkedin.com/in/mohammad-al-qhoom-4406a5394",
  };
  return currentState;
}

function ensureSkillSet(currentState) {
  const requiredSkills = defaults.skills;
  const currentSkills = Array.isArray(currentState.skills) ? currentState.skills : [];
  const existing = new Set(currentSkills.map((skill) => localizeSkillKey(skill)));

  requiredSkills.forEach((skill) => {
    const key = localizeSkillKey(skill);
    if (!existing.has(key)) {
      currentSkills.push(skill);
      existing.add(key);
    }
  });

  currentState.skills = currentSkills;
  currentState.metrics.technologies = Math.max(Number(currentState.metrics.technologies) || 0, currentSkills.length);
  return currentState;
}

function sanitizeUnsupportedTechnologies(currentState) {
  const cleanText = (value) =>
    String(value || "")
      .replaceAll(" وLaravel", "")
      .replaceAll(" Laravel", "")
      .replaceAll("Laravel و", "")
      .replaceAll("Laravel", "")
      .replaceAll("لارافيل", "")
      .replaceAll("لارفل", "")
      .replaceAll("PHP /  Concepts", "PHP / MySQL / Backend Concepts")
      .replaceAll("PHP / Concepts", "PHP / MySQL / Backend Concepts")
      .replaceAll("PHP  ومفاهيم", "PHP وMySQL ومفاهيم")
      .replace(/\s{2,}/g, " ")
      .trim();

  const cleanLocalized = (value) => {
    if (value && typeof value === "object") {
      return {
        ...value,
        ar: cleanText(value.ar),
        en: cleanText(value.en),
      };
    }
    return cleanText(value);
  };

  currentState.identity = {
    ...currentState.identity,
    role: cleanLocalized(currentState.identity.role),
    headline: cleanLocalized(currentState.identity.headline),
    bio: cleanLocalized(currentState.identity.bio),
  };
  currentState.skills = (currentState.skills || []).filter((skill) => !localizeSkillKey(skill).includes("laravel"));
  currentState.projects = (currentState.projects || []).map((project) => ({
    ...project,
    category: cleanText(project.category),
    title: cleanLocalized(project.title),
    description: cleanLocalized(project.description),
    speed: cleanLocalized(project.speed),
  }));

  return currentState;
}

function strengthenBackendProfile(currentState) {
  currentState.identity.bio = {
    ar: defaults.identity.bio.ar,
    en: defaults.identity.bio.en,
  };
  currentState.skills = currentState.skills || [];
  [
    { ar: "C# Backend", en: "C# Backend" },
    { ar: "SQL Server", en: "SQL Server" },
  ].forEach((skill) => {
    if (!currentState.skills.some((item) => localizeSkillKey(item) === localizeSkillKey(skill))) {
      currentState.skills.push(skill);
    }
  });
  currentState.metrics.technologies = Math.max(Number(currentState.metrics.technologies) || 0, currentState.skills.length);
  return currentState;
}

function enforceProfessionalIntro(currentState) {
  currentState.identity = {
    ...currentState.identity,
    role: defaults.identity.role,
    availability: defaults.identity.availability,
    headline: defaults.identity.headline,
    bio: defaults.identity.bio,
    photo: currentState.identity.photo || defaults.identity.photo,
  };
  currentState.metrics = {
    ...currentState.metrics,
    certificates: 11,
  };
  delete currentState.metrics.level;
  return currentState;
}

function localizeSkillKey(skill) {
  if (skill && typeof skill === "object") return (skill.en || skill.ar || "").toLowerCase();
  return String(skill || "").toLowerCase();
}

function localize(value) {
  if (value && typeof value === "object") return value[currentLang] || value.ar || value.en || "";
  return value || "";
}

function translate(key) {
  return i18n[currentLang][key] || i18n.ar[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.title = document.body.classList.contains("admin-page")
    ? currentLang === "ar"
      ? "لوحة تحكم محمد القحوم"
      : "Mohammed Alqahom Dashboard"
    : currentLang === "ar"
      ? "محمد القحوم | مطور برمجيات"
      : "Mohammed Alqahom | Software Developer";
  const langToggle = document.querySelector("#langToggle");
  if (langToggle) langToggle.textContent = currentLang === "ar" ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translate(node.dataset.i18n);
  });
  renderIdentity();
  renderMetrics();
  renderLinks();
  renderSkills();
  renderProjects();
  fillForms();
}

function renderIdentity() {
  document.querySelectorAll('[data-field="name"]').forEach((node) => {
    node.textContent = localize(state.identity.name);
  });
  setText("role", localize(state.identity.role));
  setText("availability", localize(state.identity.availability));
  setText("headline", localize(state.identity.headline));
  setText("bio", localize(state.identity.bio));

  const portrait = document.querySelector("#portrait");
  const initials = localize(state.identity.name)
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  if (portrait) {
    if (state.identity.photo) {
      portrait.innerHTML = `<img src="${state.identity.photo}" alt="${escapeAttr(localize(state.identity.name))}" />`;
    } else {
      portrait.innerHTML = `<span>${escapeHtml(initials || "M")}</span>`;
    }
  }

  const brandMark = document.querySelector(".brand-mark");
  if (brandMark) brandMark.textContent = initials[0] || "M";
}

function renderMetrics() {
  Object.entries(state.metrics).forEach(([key, value]) => {
    const node = document.querySelector(`[data-stat="${key}"]`);
    if (node) node.textContent = value;
  });
}

function renderLinks() {
  const emailLink = document.querySelector('[data-field="emailLink"]');
  if (emailLink) {
    emailLink.textContent = state.links.email;
    emailLink.href = `mailto:${state.links.email}`;
  }
  setAnchor("githubLink", state.links.github);
  setAnchor("linkedinLink", state.links.linkedin);
  setAnchor("cvLink", state.links.cv);
}

function renderSkills() {
  const grid = document.querySelector("#skillsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  state.skills.forEach((skill, index) => {
    const chip = document.createElement("span");
    chip.className = "skill-chip";
    chip.textContent = localize(skill);
    chip.style.transitionDelay = `${index * 35}ms`;
    grid.appendChild(chip);
  });
}

function renderProjects() {
  const grid = document.querySelector("#projectGrid");
  if (!grid) return;
  grid.innerHTML = "";

  state.projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = `project-card${project.featured ? " featured-project" : ""}`;
    article.style.setProperty("--card-a", project.colors?.[0] || "#3ad6b0");
    article.style.setProperty("--card-b", project.colors?.[1] || "#ff755f");
    article.innerHTML = `
      <div class="project-visual${project.image ? " has-image" : ""}" aria-hidden="true">
        ${project.image ? `<img class="project-image" src="${escapeAttr(project.image)}" alt="" />` : ""}
      </div>
      <div class="project-body">
        <span class="project-category">${escapeHtml(project.category)}</span>
        <h3>${escapeHtml(localize(project.title))}</h3>
        <p>${escapeHtml(localize(project.description))}</p>
        <span class="impact">${escapeHtml(localize(project.speed) || (currentLang === "ar" ? "جاهز للعرض" : "Ready to review"))}</span>
        <div class="project-links">
          ${project.github && project.github !== "#" ? `<a href="${escapeAttr(project.github)}" target="_blank" rel="noreferrer">${translate("project.github")}</a>` : ""}
          ${project.demo && project.demo !== "#" ? `<a href="${escapeAttr(project.demo)}" target="_blank" rel="noreferrer">${translate("project.demo")}</a>` : ""}
          ${project.docs && project.docs !== "#" ? `<a href="${escapeAttr(project.docs)}" target="_blank" rel="noreferrer">${translate("project.docs")}</a>` : ""}
        </div>
        ${renderProjectGallery(project)}
      </div>
    `;
    grid.appendChild(article);
    window.setTimeout(() => article.classList.add("visible"), index * 90);
  });
}

function renderProjectGallery(project) {
  if (!Array.isArray(project.gallery) || project.gallery.length === 0) return "";
  return `
    <div class="project-gallery" aria-label="Project screenshots">
      ${project.gallery
        .slice(0, 8)
        .map((image) => `<img src="${escapeAttr(image)}" alt="" loading="lazy" />`)
        .join("")}
    </div>
  `;
}

function fillForms() {
  const identityForm = document.querySelector("#identityPanel");
  if (!identityForm) return;
  identityForm.elements.nameAr.value = state.identity.name.ar;
  identityForm.elements.nameEn.value = state.identity.name.en;
  identityForm.elements.roleAr.value = state.identity.role.ar;
  identityForm.elements.roleEn.value = state.identity.role.en;
  identityForm.elements.availabilityAr.value = state.identity.availability.ar;
  identityForm.elements.availabilityEn.value = state.identity.availability.en;
  identityForm.elements.headlineAr.value = state.identity.headline.ar;
  identityForm.elements.headlineEn.value = state.identity.headline.en;
  identityForm.elements.bioAr.value = state.identity.bio.ar;
  identityForm.elements.bioEn.value = state.identity.bio.en;

  const metricsForm = document.querySelector("#metricsPanel");
  Object.entries(state.metrics).forEach(([key, value]) => {
    metricsForm.elements[key].value = value;
  });

  const linksForm = document.querySelector("#linksPanel");
  Object.entries(state.links).forEach(([key, value]) => {
    linksForm.elements[key].value = value;
  });
}

function bindDashboard() {
  if (!document.querySelector("#identityPanel")) return;
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".dashboard-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`[data-panel="${button.dataset.tab}"]`).classList.add("active");
    });
  });

  document.querySelector("#identityPanel").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const photoFile = form.elements.photo.files[0];
    const photo = photoFile ? await fileToDataUrl(photoFile) : state.identity.photo;
    state.identity = {
      name: {
        ar: form.elements.nameAr.value.trim() || defaults.identity.name.ar,
        en: form.elements.nameEn.value.trim() || defaults.identity.name.en,
      },
      role: {
        ar: form.elements.roleAr.value.trim() || defaults.identity.role.ar,
        en: form.elements.roleEn.value.trim() || defaults.identity.role.en,
      },
      availability: {
        ar: form.elements.availabilityAr.value.trim() || defaults.identity.availability.ar,
        en: form.elements.availabilityEn.value.trim() || defaults.identity.availability.en,
      },
      headline: {
        ar: form.elements.headlineAr.value.trim() || defaults.identity.headline.ar,
        en: form.elements.headlineEn.value.trim() || defaults.identity.headline.en,
      },
      bio: {
        ar: form.elements.bioAr.value.trim() || defaults.identity.bio.ar,
        en: form.elements.bioEn.value.trim() || defaults.identity.bio.en,
      },
      photo,
    };
    saveState();
    applyLanguage();
    pulseButton(form.querySelector("button"));
  });

  document.querySelector("#metricsPanel").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    state.metrics = {
      projects: Number(form.elements.projects.value) || 0,
      technologies: Number(form.elements.technologies.value) || 0,
      certificates: Number(form.elements.certificates.value) || 0,
    };
    saveState();
    renderMetrics();
    pulseButton(form.querySelector("button"));
  });

  document.querySelector("#projectPanel").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const palette = [
      ["#3ad6b0", "#ff755f"],
      ["#8f7cff", "#e0b95b"],
      ["#ff755f", "#3ad6b0"],
      ["#e0b95b", "#8f7cff"],
    ];
    state.projects.unshift({
      title: {
        ar: form.elements.titleAr.value.trim() || "مشروع جديد",
        en: form.elements.titleEn.value.trim() || "New Project",
      },
      category: form.elements.category.value.trim() || "Software Project",
      speed: {
        ar: form.elements.speedAr.value.trim() || "جاهز للعرض",
        en: form.elements.speedEn.value.trim() || "Ready to review",
      },
      github: form.elements.github.value.trim() || "#",
      demo: form.elements.demo.value.trim() || "#",
      description: {
        ar: form.elements.descriptionAr.value.trim() || "وصف مختصر للمشروع، التقنيات المستخدمة، والقيمة التي يقدمها.",
        en: form.elements.descriptionEn.value.trim() || "A short description of the project, technologies used, and the value it provides.",
      },
      colors: palette[state.projects.length % palette.length],
    });
    state.metrics.projects = state.projects.length;
    saveState();
    applyLanguage();
    form.reset();
    pulseButton(form.querySelector("button"));
  });

  document.querySelector("#linksPanel").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    state.links = {
      email: form.elements.email.value.trim() || defaults.links.email,
      github: form.elements.github.value.trim() || "#",
      linkedin: form.elements.linkedin.value.trim() || "#",
      cv: form.elements.cv.value.trim() || "#",
    };
    saveState();
    renderLinks();
    pulseButton(form.querySelector("button"));
  });
}

function bindDrawer() {
  if (!document.body.classList.contains("admin-page")) return;
  const adminLock = document.querySelector("#adminLock");
  const adminWorkspace = document.querySelector("#adminWorkspace");
  const authForm = document.querySelector("#authForm");
  const authError = document.querySelector("#authError");

  const openWorkspace = () => {
    adminLock.hidden = true;
    adminWorkspace.hidden = false;
    fillForms();
  };
  const lockWorkspace = () => {
    sessionStorage.removeItem(adminSessionKey);
    adminWorkspace.hidden = true;
    adminLock.hidden = false;
    authError.textContent = "";
    authForm.reset();
  };

  if (sessionStorage.getItem(adminSessionKey) === "true") openWorkspace();
  document.querySelector("#logoutAdmin").addEventListener("click", () => {
    lockWorkspace();
  });
  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const passwordHash = await hashPassword(authForm.elements.password.value);
    if (passwordHash === adminPasswordHash) {
      sessionStorage.setItem(adminSessionKey, "true");
      openWorkspace();
      return;
    }
    authError.textContent = translate("auth.error");
    authForm.elements.password.select();
  });
}

function bindLanguage() {
  const langToggle = document.querySelector("#langToggle");
  if (!langToggle) return;
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem(languageKey, currentLang);
    applyLanguage();
  });
}

function bindTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") document.documentElement.classList.add("light");
  const themeToggle = document.querySelector("#themeToggle");
  if (!themeToggle) return;
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    localStorage.setItem("portfolio-theme", document.documentElement.classList.contains("light") ? "light" : "dark");
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.14 },
  );
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function setupCanvas() {
  const canvas = document.querySelector("#heroCanvas");
  const context = canvas.getContext("2d");
  const points = Array.from({ length: 62 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.0014 + (index % 5) * 0.00022,
    radius: 1.4 + (index % 3) * 0.55,
  }));

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function draw(time) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      const drift = Math.sin(time * point.speed + index) * 28;
      const x = point.x * width + drift + (mouse.x - width / 2) * 0.012;
      const y = point.y * height + Math.cos(time * point.speed + index) * 24 + (mouse.y - height / 2) * 0.012;
      context.beginPath();
      context.arc(x, y, point.radius, 0, Math.PI * 2);
      context.fillStyle = index % 3 === 0 ? "#3ad6b0" : index % 3 === 1 ? "#ff755f" : "#e0b95b";
      context.globalAlpha = 0.75;
      context.fill();
      for (let next = index + 1; next < points.length; next += 1) {
        const other = points[next];
        const ox = other.x * width + Math.sin(time * other.speed + next) * 28;
        const oy = other.y * height + Math.cos(time * other.speed + next) * 24;
        const distance = Math.hypot(x - ox, y - oy);
        if (distance < 145) {
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(ox, oy);
          context.strokeStyle = "#f5f2eb";
          context.globalAlpha = (145 - distance) / 760;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    });
    context.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  requestAnimationFrame(draw);
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    mouse = { x: event.clientX, y: event.clientY };
  });
}

function setText(field, value) {
  const node = document.querySelector(`[data-field="${field}"]`);
  if (node) node.textContent = value;
}

function setAnchor(field, value) {
  const node = document.querySelector(`[data-field="${field}"]`);
  if (node) {
    node.href = value || "#";
    node.classList.toggle("disabled-link", !value || value === "#");
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function hashPassword(value) {
  if (!window.crypto?.subtle) return "";
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function escapeHtml(value) {
  const span = document.createElement("span");
  span.textContent = value;
  return span.innerHTML;
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function pulseButton(button) {
  const original = button.textContent;
  button.textContent = translate("saved");
  button.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.04)" },
      { transform: "scale(1)" },
    ],
    { duration: 320, easing: "ease-out" },
  );
  window.setTimeout(() => {
    button.textContent = original;
  }, 950);
}

const yearNode = document.querySelector("#year");
if (yearNode) yearNode.textContent = new Date().getFullYear();
bindDashboard();
bindDrawer();
bindLanguage();
bindTheme();
setupReveal();
setupCanvas();
applyLanguage();
