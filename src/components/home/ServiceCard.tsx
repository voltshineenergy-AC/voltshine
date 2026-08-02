type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function ServiceCard({
  icon,
  title,
  subtitle,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white/10">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}