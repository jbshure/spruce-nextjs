import Link from 'next/link';

interface RelatedService {
  title: string;
  desc: string;
  link: string;
}

interface InternalLinksProps {
  services: RelatedService[];
  title?: string;
}

export default function InternalLinks({ services, title = "Related Services" }: InternalLinksProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className={`grid md:grid-cols-2 ${services.length >= 4 ? 'lg:grid-cols-4' : services.length === 3 ? 'lg:grid-cols-3' : ''} gap-6`}>
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition group"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <span className="text-primary font-bold text-2xl">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
