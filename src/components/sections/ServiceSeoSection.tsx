import type { Service } from "@/lib/services";

interface ServiceSeoSectionProps {
  service: Service;
}

export function ServiceSeoSection({ service }: ServiceSeoSectionProps) {
  const locationLabel = service.locationLabel ?? "El Gouna";
  const heading = `${service.title} in ${locationLabel}`;
  const paragraphs = service.longDescription?.split("\n\n") ?? [];

  return (
    <section
      aria-labelledby="service-seo-heading"
      className="border-b border-white/10 bg-[#06040c]/60"
    >
      <div className="section-shell py-10 sm:py-12">
        <h1
          id="service-seo-heading"
          className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
        >
          {heading}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {service.seoDescription ?? service.description}
        </p>

        {paragraphs.length > 0 && (
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-zinc-400">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        )}

        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-5 font-display text-2xl font-semibold text-white">
              Frequently asked questions about {service.title.toLowerCase()} in{" "}
              {locationLabel}
            </h2>
            <dl className="grid gap-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <dt className="text-base font-semibold text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
