import Link from 'next/link';

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

export default function RelatedServices({ services, title = "Related Services" }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.link}
              className="card card-hover p-6 group animate-fade-in block"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <div className="text-primary font-semibold text-sm">Learn more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
