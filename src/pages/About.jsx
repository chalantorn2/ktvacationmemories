import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { number: "10+", label: t("about.stats.years") },
    { number: "5000+", label: t("about.stats.customers") },
    { number: "50+", label: t("about.stats.tours") },
    { number: "30+", label: t("about.stats.partners") },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-primary-900 h-[400px] mb-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
            alt="About Us Header"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-32"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pt-20">
          <span className="text-primary-300 font-bold tracking-[0.2em] uppercase text-sm mb-2">
            {t("about.hero.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {t("about.hero.title")}
          </h1>
          <p className="text-gray-100 text-lg max-w-2xl font-light drop-shadow-md">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="container mx-auto px-6 py-6">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="text-primary-500 font-bold tracking-[0.15em] uppercase text-xs mb-4 block">
            {t("about.company.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("about.company.title")}
          </h2>
          <div className="space-y-4 text-base text-gray-600 leading-relaxed">
            <p>{t("about.company.description1")}</p>
            <p>{t("about.company.description2")}</p>
            <p>{t("about.company.description3")}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {/* <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-primary-500 font-bold tracking-[0.15em] uppercase text-xs mb-2 block">
              {t("about.certifications.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("about.certifications.title")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t("about.certifications.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src="/document/brc.jpg"
                  alt={t("about.certifications.brc.title")}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {t("about.certifications.brc.title")}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t("about.certifications.brc.department")}
                  <br />
                  <span className="text-primary-600 font-medium">{t("about.certifications.brc.number")}</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src="/document/dbd.jpg"
                  alt={t("about.certifications.dbd.title")}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {t("about.certifications.dbd.title")}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t("about.certifications.dbd.department")}
                  <br />
                  <span className="text-primary-600 font-medium">{t("about.certifications.dbd.number")}</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src="/document/tat_license.jpg"
                  alt={t("about.certifications.tat.title")}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {t("about.certifications.tat.title")}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t("about.certifications.tat.department")}
                  <br />
                  <span className="text-primary-600 font-medium">{t("about.certifications.tat.number")}</span>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* CTA Section */}
      <div className="relative bg-primary-900 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("about.cta.title")}
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              {t("about.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                {t("about.cta.contactBtn")}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                {t("about.cta.viewPackages")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
