// === Translations ===
const translations = {
    en: {
        // Nav
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.achievements": "Achievements",
        "nav.projects": "Projects",
        "nav.activities": "Activities",
        "nav.contact": "Contact",
        // Hero
        "hero.desc": "3rd-year Digital Business student at NEU with a strong foundation in data analytics for e-commerce operations. Aspiring Data Analyst focused on Business & E-commerce Analytics.",
        "hero.exp": "Years of Experience",
        "hero.growth": "Shopee Growth",
        "hero.contact": "Contact Me",
        "hero.learn": "Learn More",
        // About
        "about.title": "About Me",
        "about.lead": "I'm <strong>Do Thanh Binh</strong>, a 3rd-year Digital Business student at National Economics University (NEU) with a strong foundation in data analytics for e-commerce.",
        "about.p1": "With experience designing and operating data systems for business analysis and decision-making at Everred Group and Meta Ecom Group, I specialize in Shopee & TikTok Shop operations powered by data-driven strategies.",
        "about.p2": "I'm pursuing a career as a Data Analyst focused on Business & E-commerce Analytics.",
        // Education
        "edu.neu": "National Economics University",
        "edu.major": "Digital Business Management",
        "edu.scholarship": "Excellence & Merit Scholarship",
        "edu.hs": "Tran Phu Gifted High School",
        "edu.gpa_caption": "Academic Transcript — Cumulative GPA: 3.88/4.0 (9.09/10)",
        // Skills
        "skills.title": "Skills",
        "skills.h_analytics": "Data Analytics",
        "skills.analytics": "Advanced Google Sheets — automated reporting systems. Data cleaning, transformation & aggregation. KPI evaluation, dashboard building & data visualization.",
        "skills.h_tools": "Tools & Languages",
        "skills.tools": "SQL (MySQL) — queries, joins, aggregation. HTML, CSS, PHP. SQLite, MongoDB (basic). Power BI (basic). SPSS & SmartPLS for research.",
        "skills.ecom": "Managing Shopee & TikTok Shop storefronts. Product listing, pricing, promotions, advertising. Analyzing Traffic → CTR → Conversion Rate.",
        "skills.marketing": "Running ads, booking 100+ KOL/KOC partnerships, organizing Mega Livestream and Super Day events.",
        "skills.leadership": "Operations team leader, club vice president, and event lead for large-scale competitions.",
        "skills.business": "Building B2B, D2C, and B2C business models. Planning and executing startup ventures.",
        // Experience
        "exp.title": "Experience",
        "exp.everred_brand": "Everred Group — BYCAMCAM Brand",
        "exp.ev1": "Designed and automated operational data systems on Google Sheets — built data processing pipelines (source → transform → data-driven decisions), reducing ~60% manual reporting time",
        "exp.ev2": "Evaluated business performance (Traffic → CTR → Conversion Rate), combined with time-series trend analysis to identify fluctuation causes and propose pricing, promotions & catalog adjustments",
        "exp.ev3": "Mined data across 600+ products with 5,000+ SKUs, segmented by performance to identify top & underperforming products, optimized catalog and budget allocation",
        "exp.ev4": "Contributed to outstanding growth in Q4/2025 (avg 11%) and Q1/2026 (24.99% on Shopee, 18.03% on TikTok Shop)",
        "exp.r1": "Q4/2025: ~11% growth",
        "exp.caption": "MoM Growth Data Q1/2026",
        "exp.demo": "Demo Data System",
        "exp.me1": "Operated and optimized Shopee & TikTok Shop storefronts for fashion brands (MunMiu, Calie.vn, Gago, etc.)",
        "exp.me2": "Booked and collaborated with 100+ KOLs/KOCs",
        "exp.me3": "Supported 50+ TikTok Shop sellers via TSP network: platform policies, violation appeals, Key Livestream registration",
        "exp.me4": "Organized successful Mega Livestream & Super Day events (80% hit platform KPIs, sellers averaged 8.5% growth in Q4/2024)",
        // Achievements
        "ach.title": "Achievements",
        "ach.champion": "Champion",
        "ach.istartup_org": "Investment Faculty — National Economics University",
        "ach.is1": "RePaws project — sustainable pet care from pineapple husks",
        "ach.is2": "Built B2B, D2C, and B2C business models",
        "ach.is3": "Product testing via TikTok Shop",
        "ach.more": "More",
        "ach.runnerup": "3rd Runner-up",
        "ach.ebiz_org": "Business Breakthrough Competition",
        "ach.eb1": "Planned cosmetics business on Lazada marketplace",
        "ach.eb2": "Launched, operated, and optimized the online store",
        "ach.consolation": "Consolation Prize",
        "ach.vecom_title": "Online Selling — Digital Business Competition",
        "ach.vecom_org": "Vietnam E-Commerce Association — VECOM",
        "ach.vc1": "Planned functional food e-commerce business",
        "ach.vc2": "1-month results: 9.1M VND revenue, 30+ hours livestream, 55k+ reach",
        "ach.scholarship": "Scholarship",
        "ach.scholarship_title": "Academic Scholarship",
        "ach.scholarship_org": "School of Business Administration — NEU",
        "ach.sc1": "Excellence (2023 – 2024)",
        "ach.sc2": "Merit (2024 – 2025)",
        // Projects
        "proj.title": "Projects",
        "proj.nckh2_title": "Employer Branding Research (Competition Entry)",
        "proj.nckh2_desc": "Topic: Impact of content source on employer attractiveness, mediated by perceived authenticity. Experimental study with 200 samples using SPSS & SmartPLS. Applied ANOVA and mediation analysis.",
        "proj.tag_experiment": "Experimental",
        "proj.nckh_title": "University-Level Scientific Research",
        "proj.nckh_desc": "Topic: The impact of E-Commerce on impulse buying behavior of young households in Vietnam.",
        "proj.nckh_prize": "3rd Prize",
        "proj.tag_research": "Research",
        "proj.tag_behavior": "Consumer Behavior",
        "proj.cat_community": "Community",
        "proj.yagi_title": "Givelove — Typhoon Yagi Relief",
        "proj.yagi_desc": "Built a fundraising website to support communities affected by Typhoon Yagi. A meaningful social impact project.",
        "proj.tag_social": "Social Impact",
        "proj.tag_typhoon": "Typhoon Relief",
        "proj.visit": "Visit Site",
        "proj.apt_title": "APT Music Web",
        "proj.apt_desc": "A music website project built to explore web development skills and creative design.",
        "proj.tag_music": "Music",
        "proj.repaws_title": "RePaws — Sustainable Pet Care",
        "proj.repaws_desc": "Eco-friendly pet care brand made from pineapple husks. B2B, D2C, B2C business model. I-STARTUP 2025 Champion.",
        // Activities
        "act.title": "Leadership & Activities",
        "act.vp": "Vice President",
        "act.ecc_title": "ECC E-Commerce Club — NEU",
        "act.ecc_org": "Sponsored by School of Trade & International Economics — NEU and Vietnam E-Commerce Association (VECOM)",
        "act.vice_org": "Vice Organizer",
        "act.vice_org2": "Vice Organizer",
        "act.event_lead": "Event Lead",
        "act.bf_desc": "The first and largest cross-border e-commerce competition in Northern Vietnam",
        "act.ec_desc": "Event series connecting the E-Commerce community",
        "act.em_desc": "Competition organized by TikTok for Business, Meta Ecom, and Ecomdy Media",
        // Contact
        "ct.title": "Get in Touch",
        "ct.intro": "Interested in collaboration, opportunities, or just want to connect? I'm always open to hearing from you!",
        "ct.phone": "Phone",
        "ct.location": "Location",
        "ct.address": "Hanoi, Vietnam",
        "ct.name": "Full Name",
        "ct.name_ph": "John Doe",
        "ct.subject": "Subject",
        "ct.subject_ph": "Collaboration / Hiring / Other",
        "ct.message": "Message",
        "ct.message_ph": "Your message...",
        "ct.send": "Send Message",
        "ct.sent": "Sent!",
    },
    vi: {
        // Nav
        "nav.about": "Giới thiệu",
        "nav.experience": "Kinh nghiệm",
        "nav.achievements": "Thành tích",
        "nav.projects": "Dự án",
        "nav.activities": "Hoạt động",
        "nav.contact": "Liên hệ",
        // Hero
        "hero.desc": "Sinh viên năm 3 chuyên ngành Digital Business tại NEU với nền tảng phân tích dữ liệu trong vận hành e-commerce. Định hướng trở thành Data Analyst tập trung vào Business & E-commerce Analytics.",
        "hero.exp": "Năm kinh nghiệm",
        "hero.growth": "Tăng trưởng Shopee",
        "hero.contact": "Liên hệ",
        "hero.learn": "Tìm hiểu thêm",
        // About
        "about.title": "Giới thiệu",
        "about.lead": "Mình là <strong>Đỗ Thanh Bình</strong>, sinh viên năm 3 ngành Quản trị Kinh doanh số tại ĐH Kinh tế Quốc dân (NEU) với nền tảng phân tích dữ liệu trong vận hành e-commerce.",
        "about.p1": "Có kinh nghiệm thiết kế và vận hành hệ thống dữ liệu phục vụ phân tích và ra quyết định kinh doanh tại Everred Group và Meta Ecom Group — chuyên vận hành sàn Shopee, TikTok Shop.",
        "about.p2": "Định hướng phát triển trở thành Data Analyst tập trung vào Business & E-commerce Analytics.",
        // Education
        "edu.neu": "ĐH Kinh tế Quốc dân",
        "edu.major": "Quản trị Kinh doanh số",
        "edu.scholarship": "Học bổng Xuất sắc & Giỏi",
        "edu.hs": "THPT Chuyên Trần Phú",
        "edu.gpa_caption": "Bảng điểm học tập — GPA tích luỹ: 3.88/4.0 (9.09/10)",
        // Skills
        "skills.title": "Kỹ năng",
        "skills.h_analytics": "Phân tích dữ liệu",
        "skills.analytics": "Google Sheets nâng cao — xây dựng hệ thống dữ liệu và tự động hóa báo cáo. Làm sạch, biến đổi và tổng hợp dữ liệu. Đánh giá KPI, trực quan hóa dữ liệu và xây dựng dashboard.",
        "skills.h_tools": "Công cụ & Ngôn ngữ",
        "skills.tools": "SQL (MySQL) – truy vấn, join bảng, tổng hợp dữ liệu. HTML, CSS, PHP. SQLite, MongoDB (cơ bản). Power BI (cơ bản). SPSS & SmartPLS cho nghiên cứu.",
        "skills.ecom": "Vận hành gian hàng Shopee, TikTok Shop. Quản lý sản phẩm, giá, khuyến mãi, quảng cáo. Phân tích Traffic → CTR → Conversion Rate.",
        "skills.marketing": "Chạy quảng cáo, booking 100+ KOL/KOC, tổ chức Mega Livestream và Super Day Livestream.",
        "skills.leadership": "Trưởng nhóm vận hành, phó chủ nhiệm CLB, leader ban sự kiện các cuộc thi quy mô lớn.",
        "skills.business": "Xây dựng mô hình kinh doanh B2B, D2C, B2C. Lên kế hoạch và triển khai startup.",
        // Experience
        "exp.title": "Kinh nghiệm",
        "exp.everred_brand": "Everred Group — Thương hiệu BYCAMCAM",
        "exp.ev1": "Thiết kế và tự động hóa hệ thống dữ liệu vận hành trên Google Sheets, xây dựng luồng xử lý dữ liệu (nguồn → chuyển đổi → quyết định dựa trên dữ liệu), giúp giảm ~60% thời gian báo cáo thủ công",
        "exp.ev2": "Đánh giá hiệu quả kinh doanh (Traffic → CTR → Conversion Rate), kết hợp phân tích xu hướng theo thời gian để xác định nguyên nhân biến động và đề xuất điều chỉnh giá, khuyến mãi và danh mục sản phẩm",
        "exp.ev3": "Khai thác dữ liệu 600+ sản phẩm với 5000+ SKU, phân nhóm theo hiệu suất để xác định sản phẩm chủ lực và kém hiệu quả, tối ưu danh mục và phân bổ ngân sách",
        "exp.ev4": "Đóng góp vào tăng trưởng nổi bật trong Q4/2025 (trung bình 11%) và Q1/2026 (24,99% trên Shopee, 18,03% trên TikTok Shop)",
        "exp.r1": "Q4/2025: ~11% tăng trưởng",
        "exp.caption": "Dữ liệu tăng trưởng MoM Q1/2026",
        "exp.demo": "Demo hệ thống dữ liệu",
        "exp.me1": "Vận hành và tối ưu gian hàng Shopee, TikTok Shop cho các brand thời trang (MunMiu, Calie.vn, Gago...)",
        "exp.me2": "Booking và làm việc với 100+ KOLs/KOCs",
        "exp.me3": "Hỗ trợ 50+ nhà bán hàng TikTokShop trong mạng lưới TSP: chính sách sàn, kháng cáo vi phạm, đăng ký Key Livestream",
        "exp.me4": "Tổ chức thành công các phiên Mega Livestream, Super Day Livestream (80% các phiên đạt KPI của sàn, Nhà bán hàng đạt tăng trưởng trung bình 8.5% Q4/2024)",
        // Achievements
        "ach.title": "Thành tích",
        "ach.champion": "Quán quân",
        "ach.istartup_org": "Liên Chi Hội Khoa Đầu Tư — ĐH Kinh tế Quốc dân",
        "ach.is1": "Dự án RePaws — chăm sóc thú cưng bền vững từ vỏ dứa",
        "ach.is2": "Xây dựng mô hình B2B, D2C, B2C",
        "ach.is3": "Test sản phẩm bằng TikTok Shop",
        "ach.more": "Xem thêm",
        "ach.runnerup": "Quý quân",
        "ach.ebiz_org": "Cuộc thi Đột phá Kinh doanh",
        "ach.eb1": "Lên kế hoạch kinh doanh mỹ phẩm trên Lazada",
        "ach.eb2": "Mở gian hàng, vận hành và tối ưu Shop",
        "ach.consolation": "Khuyến khích",
        "ach.vecom_title": "Bán hàng Online — Cuộc thi Kinh doanh số",
        "ach.vecom_org": "Hiệp hội Thương mại điện tử Việt Nam — VECOM",
        "ach.vc1": "Lên kế hoạch kinh doanh thực phẩm chức năng trên sàn TMĐT",
        "ach.vc2": "1 tháng thực chiến: 9.1 triệu doanh thu, 30+ giờ Livestream, 55k+ lượt reach",
        "ach.scholarship": "Học bổng",
        "ach.scholarship_title": "Học bổng Học tập",
        "ach.scholarship_org": "Viện Quản trị Kinh doanh — ĐH KTQD",
        "ach.sc1": "Xuất sắc (2023 – 2024)",
        "ach.sc2": "Giỏi (2024 – 2025)",
        // Projects
        "proj.title": "Dự án",
        "proj.nckh2_title": "NCKH dự thi cấp Đại học",
        "proj.nckh2_desc": "Đề tài: Ảnh hưởng của nguồn đăng tải nội dung đến sức hấp dẫn nhà tuyển dụng, vai trò trung gian của cảm nhận về tính chân thực. Nghiên cứu thực nghiệm 200 mẫu, sử dụng SPSS & SmartPLS. Áp dụng ANOVA và trung gian (mediation).",
        "proj.tag_experiment": "Thực nghiệm",
        "proj.nckh_title": "Giải Ba NCKH cấp Đại học",
        "proj.nckh_desc": "Đề tài: Ảnh hưởng của Thương mại điện tử đến hành vi mua sắm ngẫu hứng của hộ gia đình trẻ tại Việt Nam.",
        "proj.nckh_prize": "Giải Ba",
        "proj.tag_research": "NCKH",
        "proj.tag_behavior": "Hành vi tiêu dùng",
        "proj.cat_community": "Cộng đồng",
        "proj.yagi_title": "Givelove — Hỗ trợ bão Yagi",
        "proj.yagi_desc": "Xây dựng website kêu gọi ủng hộ người dân chịu ảnh hưởng của bão Yagi. Dự án mang ý nghĩa cộng đồng sâu sắc.",
        "proj.tag_social": "Cộng đồng",
        "proj.tag_typhoon": "Bão Yagi",
        "proj.visit": "Xem trang",
        "proj.apt_title": "APT Music Web",
        "proj.apt_desc": "Dự án website âm nhạc, xây dựng để rèn luyện kỹ năng phát triển web và thiết kế sáng tạo.",
        "proj.tag_music": "Âm nhạc",
        "proj.repaws_title": "RePaws — Chăm sóc thú cưng bền vững",
        "proj.repaws_desc": "Thương hiệu chăm sóc thú cưng từ vỏ dứa. Mô hình kinh doanh B2B, D2C, B2C. Quán quân I-STARTUP 2025.",
        // Activities
        "act.title": "Lãnh đạo & Hoạt động",
        "act.vp": "Phó Chủ nhiệm CLB",
        "act.ecc_title": "CLB Thương mại điện tử ECC — NEU",
        "act.ecc_org": "Bảo trợ bởi Viện TM&KTQT — ĐH KTQD và Hiệp hội TMĐT Việt Nam VECOM",
        "act.vice_org": "Phó BTC",
        "act.vice_org2": "Phó BTC",
        "act.event_lead": "Trưởng Ban Sự kiện",
        "act.bf_desc": "Cuộc thi TMĐT xuyên biên giới đầu tiên và lớn nhất miền Bắc",
        "act.ec_desc": "Chuỗi sự kiện kết nối cộng đồng E-Commerce",
        "act.em_desc": "Cuộc thi do TikTok for Business, Meta Ecom và Ecomdy Media tổ chức",
        // Contact
        "ct.title": "Liên hệ",
        "ct.intro": "Bạn muốn hợp tác, trao đổi cơ hội hoặc kết nối? Mình luôn sẵn sàng lắng nghe!",
        "ct.phone": "Điện thoại",
        "ct.location": "Địa chỉ",
        "ct.address": "Hà Nội, Việt Nam",
        "ct.name": "Họ và tên",
        "ct.name_ph": "Nguyễn Văn A",
        "ct.subject": "Chủ đề",
        "ct.subject_ph": "Hợp tác / Tuyển dụng / Khác",
        "ct.message": "Tin nhắn",
        "ct.message_ph": "Nội dung tin nhắn...",
        "ct.send": "Gửi tin nhắn",
        "ct.sent": "Đã gửi!",
    }
};

// === Language Switcher ===
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update toggle button
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'vi' : 'en');
});

// Apply saved language on load
setLanguage(currentLang);

// === Mobile Navigation ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// === Navbar scroll effect ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// === Staggered scroll animations ===

// Groups: elements that should stagger together (siblings in a grid/list)
const staggerGroups = [
    { selector: '.skills-grid .skill-card', delay: 100 },
    { selector: '.achievements-grid .ach-card', delay: 120 },
    { selector: '.projects-grid .proj-card', delay: 120 },
    { selector: '.act-row .act-card', delay: 100 },
    { selector: '.cert-row .cert-chip', delay: 80 },
    { selector: '.contact-cards .ct-card', delay: 100 },
];

// Assign stagger delay as CSS custom property per group
staggerGroups.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
        el.style.setProperty('--stagger', `${i * delay}ms`);
    });
});

// All individually animated elements
const fadeEls = document.querySelectorAll(
    '.skill-card, .tl-item, .ach-card, .proj-card, .act-card, .act-featured, .edu-card, .cert-chip, .ct-card, .section-header, .about-portrait, .gpa-table, .edu-gallery'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

// Timeline items get incremental stagger
document.querySelectorAll('.tl-item').forEach((el, i) => {
    el.style.setProperty('--stagger', `${i * 150}ms`);
});

// Education cards stagger
document.querySelectorAll('.edu-card').forEach((el, i) => {
    el.style.setProperty('--stagger', `${i * 100}ms`);
});

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));

// === Active nav link on scroll ===
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
});

// === Contact form handler ===
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    const sentText = translations[currentLang]['ct.sent'];
    btn.innerHTML = `<i class="fas fa-check"></i> ${sentText}`;
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        e.target.reset();
    }, 2500);
}
